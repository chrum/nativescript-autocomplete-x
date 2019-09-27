import {
    AutocompleteXBase, currentTextInResultsPrefixProperty,
    itemsProperty,
    placeholderProperty,
    textProperty
} from './autocomplete-x.common';
import {EventData} from "tns-core-modules/data/observable";

export class AutocompleteX extends AutocompleteXBase {
    [textProperty.getDefault](): string {
        return '';
    }

    [textProperty.setNative](value: string) {
        this.nativeView.text = value;
    }

    [currentTextInResultsPrefixProperty.getDefault](): string {
        return '';
    }

    [currentTextInResultsPrefixProperty.setNative](value: string) {
        this._ios.currentTextOnResultsListPrefix = value;
    }

    [placeholderProperty.getDefault](): string {
        return '';
    }

    [placeholderProperty.setNative](value: string) {
        this.nativeView.placeholder = value;
    }

    [itemsProperty.getDefault](): Array<string> {
        return [];
    }

    [itemsProperty.setNative](value: Array<string>) {
        this._ios.filterStrings(value);
    }

    private _ios: SearchTextField;

    get ios() {
        return this.nativeView;
    }

    public createNativeView() {
        this._ios = SearchTextField.alloc().init();
        return this._ios;
    }

    public initNativeView(): void {
        super.initNativeView();
    }

    public onLoaded(): void {
        super.onLoaded();
        this._ios.startVisible = true;

        const fontSize = 18;
        const theme = SearchTextFieldTheme.lightTheme();
        theme.font = UIFont.systemFontOfSize(fontSize);
        theme.cellHeight = 2 * fontSize;
        theme.bgColor = new UIColor ({red: 1, green: 1, blue: 1, alpha: 0.9});
        this._ios.theme = theme;
        this._ios.itemSelectionTextHandler = this._emitSelected.bind(this);
        this._ios.filterStrings(this.items);
    }

    private _emitSelected(selectedItemTitle: string) {
        this.notify({
            eventName: AutocompleteX.selectedEvent,
            object: this,
            text: selectedItemTitle
        } as EventData);
    }

    private _emitOpened() {
        this.notify({
            eventName: AutocompleteX.openedEvent,
            object: this,
        } as EventData);
    }

    private _emitClosed() {
        this.notify({
            eventName: AutocompleteX.closedEvent,
            object: this,
        } as EventData);
    }
}
