import {CSSType, Property, View, EventData} from 'tns-core-modules/ui/core/view';

export class AutocompleteXBase extends View {
    public static openedEvent = 'opened';
    public static closedEvent = 'closed';
    public static selectedEvent = 'selected';

    public placeholder: string;
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

export const placeholderProperty = new Property<AutocompleteXBase, string>({
    name: 'placeholder',
    defaultValue: ''
});
placeholderProperty.register(AutocompleteXBase);

export const itemsProperty = new Property<AutocompleteXBase, Array<any>>({
    name: 'items',
    defaultValue: [],
});
itemsProperty.register(AutocompleteXBase);
