import app from 'flarum/forum/app';
import icon from 'flarum/common/helpers/icon';
import ItemList from 'flarum/common/utils/ItemList';
import Component from 'flarum/common/Component';
import classList from 'flarum/common/utils/classList';

import sortByAttribute from '@common/helpers/sortByAttribute';
import FieldEditDropdown from './FieldEditDropdown';
import FieldEditText from './FieldEditText';
import FieldEditTags from './FieldEditTags';
import FieldGrid from './FieldGrid';

export default class FieldsEditorAll extends Component {
    oninit(vnode) {
        super.oninit(vnode);

        this.fields = sortByAttribute(app.store.all('mason-fields'));

        // Index to quickly do a reverse lookup from answer to field
        this.answerToFieldIndex = [];
        this.fields.forEach((field) => {
            const answers = field.suggestedAnswers();

            // Since we silenced the error everywhere else using `|| []`, we'll keep just one place here
            // where we log a warning if the relationship appears to be missing
            // This should help troubleshooting what happens if no answers are offered
            if (!Array.isArray(answers)) {
                console.warn('[mason] Missing suggestedAnswers relationship for field', field);

                return;
            }

            answers.forEach((answer) => {
                this.answerToFieldIndex[answer.id()] = field.id();
            });
        });
    }

    view() {
        return (
            <div className="Mason-Fields Mason-Fields--editor">
                {this.headItems().toArray()}
                <FieldGrid items={this.fieldItems().toArray()} />
            </div>
        );
    }

    updateSelection(field, fieldAnswers) {
        // Keep only answers to other fields
        let answers = this.attrs.answers.filter((answer) => {
            const reverseFieldLookup = this.answerToFieldIndex[answer.id()];

            // If the answer is not in the reverse lookup table it's probably a non-suggested (user) answer
            // In that case the field should be linked in the relationship
            if (typeof reverseFieldLookup === 'undefined') {
                return answer.field().id() !== field.id();
            }

            return reverseFieldLookup !== field.id();
        });

        answers = answers.concat(fieldAnswers);

        this.attrs.onchange(answers);
    }

    headItems() {
        const items = new ItemList();

        if (app.forum.attribute('xsoft-mason-tag.fields-section-title')) {
            items.add('title', <h5 className="Mason-Field--title">{app.forum.attribute('xsoft-mason-tag.fields-section-title')}</h5>);
        }
        return items;
    }

    fieldItems() {
        const items = new ItemList();

        // taking this feature off beacuse changing tags will affect which fields show up

        // if (app.forum.attribute('xsoft-mason-tag.tags-as-fields')) {
        //     items.add(
        //         'tags',
        //         <FieldEditTags
        //             discussion={this.attrs.discussion}
        //             onchange={(tags) => {
        //                 this.attrs.ontagchange && this.attrs.ontagchange(tags);
        //             }}
        //         />
        //     );
        // }

        this.fields.forEach((field) => {
            const inputAttrs = {
                field,
                bytags: this.attrs.bytags,
                inputId: field.data.id,
                answers: this.attrs.answers,
                onchange: (fieldAnswers) => {
                    // Every input component calls "onchange" with a list of answers from the store
                    this.updateSelection(field, fieldAnswers);
                },
            };
            let input = null;

            if (field.user_values_allowed()) {
                input = <FieldEditText {...inputAttrs} />;
            } else {
                input = <FieldEditDropdown {...inputAttrs} />;
            }

            this.attrs.bytags.forEach((tag) => {
                // filter the items list for fields we actually need
                if (tag == field.data.attributes.name) {
                    items.add(
                        `field-${field.id()}`,
                        <div
                            class={classList('Mason-Field Form-group', {
                                ['Mason-Field--label-as-placeholder']: app.forum.attribute('xsoft-mason-tag.labels-as-placeholders'),
                            })}
                        >
                            <label>
                                {field.icon() ? <>{icon(field.icon())} </> : null}
                                {field.name()}
                                {field.required() ? ' *' : null}
                            </label>
                            {input}
                            {field.description() ? <div className="helpText">{field.description()}</div> : null}
                        </div>
                    );
                }
            });
        });

        return items;
    }
}
