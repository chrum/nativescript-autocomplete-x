import {CSSType, Property, View, EventData, booleanConverter} from 'tns-core-modules/ui/core/view';

export interface AutocompleteXEvent extends EventData {
    text: string;
}

export class AutocompleteXBase extends View {
    public static openedEvent = 'opened';
    public static closedEvent = 'closed';
    public static selectedEvent = 'selected';
    public static textChangedEvent = 'textChange';

    /* To make it 'compatible with regular {N} TextField */
    public editable: boolean;
    public autocorrect: boolean;
    public hint: string;
    public maxLength: number;

    public text: string;
    public items: Array<string>;
    public maxVisibleRows: number;

    constructor() {
        super();
    }

    public filteredItems(str) {
        const lowercased = str.toLocaleLowerCase();
        const filtered = this.items.filter((item) => {
            return item.toLocaleLowerCase().indexOf(lowercased) > -1;
        });
        if (str) {
            filtered.unshift('  use: ' + str);
        }

        return filtered;
    }

    public refresh() {

    }
}

export const maxVisibleRowsProperty = new Property<AutocompleteXBase, number>({
    name: 'maxVisibleRows',
    defaultValue: 5
});
maxVisibleRowsProperty.register(AutocompleteXBase);

export const textProperty = new Property<AutocompleteXBase, string>({
    name: 'text',
    defaultValue: ''
});
textProperty.register(AutocompleteXBase);

export const currentTextInResultsPrefixProperty = new Property<AutocompleteXBase, string>({
    name: 'currentTextInResultsPrefix',
    defaultValue: ''
});
currentTextInResultsPrefixProperty.register(AutocompleteXBase);

export const itemsProperty = new Property<AutocompleteXBase, Array<any>>({
    name: 'items',
    defaultValue: [],
});
itemsProperty.register(AutocompleteXBase);

/* To make it 'compatible with regular {N} TextField */
export const editableProperty = new Property<AutocompleteXBase, boolean>({ name: "editable", defaultValue: true, valueConverter: booleanConverter });
editableProperty.register(AutocompleteXBase);

export const autocorrectProperty = new Property<AutocompleteXBase, boolean>({ name: "autocorrect", valueConverter: booleanConverter });
autocorrectProperty.register(AutocompleteXBase);

export const hintProperty = new Property<AutocompleteXBase, string>({ name: "hint", defaultValue: "" });
hintProperty.register(AutocompleteXBase);

export const maxLengthProperty = new Property<AutocompleteXBase, number>({ name: "maxLength", defaultValue: Number.POSITIVE_INFINITY, valueConverter: parseInt });
maxLengthProperty.register(AutocompleteXBase);

