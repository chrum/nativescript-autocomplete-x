import {
    AutocompleteXBase, AutocompleteXEvent, currentTextInResultsPrefixProperty, editableProperty, hintProperty,
    itemsProperty,
    textProperty
} from './autocomplete-x.common';
import {EventData} from 'tns-core-modules/data/observable';

export class AutocompleteX extends AutocompleteXBase {
    [editableProperty.setNative](value: boolean) {
        this.editable = value;
    }

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

    [hintProperty.getDefault](): string {
        return '';
    }

    [hintProperty.setNative](value: string) {
        this.nativeView.placeholder = value;
    }

    [itemsProperty.getDefault](): Array<string> {
        return [];
    }

    [itemsProperty.setNative](value: Array<string>) {
        this._ios.filterStrings(value);
    }

    private _ios: SearchTextField;
    private _delegate: AutoCompleteXDelegateImpl;

    get ios() {
        return this.nativeView;
    }

    public createNativeView() {
        this._ios = SearchTextField.alloc().init();
        return this._ios;
    }

    public initNativeView(): void {
        super.initNativeView();

        this._delegate = AutoCompleteXDelegateImpl.initWithOwner(new WeakRef(this));
    }

    public onLoaded(): void {
        super.onLoaded();
        this._ios.delegate = this._delegate;

        this._ios.startVisible = true;
        const fontSize = 18;
        const theme = SearchTextFieldTheme.lightTheme();
        theme.font = UIFont.systemFontOfSize(fontSize);
        theme.cellHeight = 2 * fontSize;
        theme.bgColor = new UIColor ({red: 1, green: 1, blue: 1, alpha: 0.9});
        this._ios.theme = theme;
        this._ios.clearButtonMode = UITextFieldViewMode.Always;

        this._ios.itemSelectionTextHandler = this._emitSelected.bind(this);
        this._ios.filterStrings(this.items);
    }

    private _emitSelected(selectedItemTitle: string) {
        this.notify({
            eventName: AutocompleteX.selectedEvent,
            object: this,
            text: selectedItemTitle
        } as AutocompleteXEvent);
    }

    public emitOpened() {
        this.notify({
            eventName: AutocompleteX.openedEvent,
            object: this,
        } as EventData);
    }

    public emitClosed() {
        this.notify({
            eventName: AutocompleteX.closedEvent,
            object: this,
        } as EventData);
    }

    public emitTextChanged(str: string) {
        this.notify({
            eventName: AutocompleteX.textChangedEvent,
            object: this,
            text: str
        } as AutocompleteXEvent);
    }
}

@ObjCClass(UITextFieldDelegate)
class AutoCompleteXDelegateImpl extends NSObject implements UITextFieldDelegate {
    private _owner: WeakRef<AutocompleteX>;
    private firstEdit: boolean;

    public static initWithOwner(owner: WeakRef<AutocompleteX>): AutoCompleteXDelegateImpl {
        const delegate = AutoCompleteXDelegateImpl.new() as AutoCompleteXDelegateImpl;

        delegate._owner = owner;

        return delegate;
    }

    public textFieldShouldBeginEditing(textField: UITextField): boolean {
        this.firstEdit = true;
        const owner = this._owner.get();
        if (owner) {
            return owner.editable;
        }

        return true;
    }

    public textFieldDidBeginEditing(textField: UITextField): void {
        const owner = this._owner.get();
        if (owner) {
            // owner.selectedIndex = row;
            // owner.selectedIndex = row;
            // owner.emitOpened();
        }
    }
    //
    // public textFieldDidEndEditing(textField: UITextField): void {
    //     const owner = this._owner.get();
    //     if (owner) {
    //         // owner.selectedIndex = row;
    //         owner.emitClosed();
    //     }
    // }

    public textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, replacementString: string): boolean {
        const owner = this._owner.get();
        if (owner) {
            const delta = replacementString.length - range.length;
            if (delta > 0) {
                if (textField.text.length + delta > owner.maxLength) {
                    return false;
                }
            }

            // TODO: refactor this hardcoded thing
            if (true /*owner.updateTextTrigger === 'textChanged'*/) {
                if (textField.secureTextEntry && this.firstEdit) {
                    textProperty.nativeValueChange(owner, replacementString);
                }
                else {
                    if (range.location <= textField.text.length) {
                        const newText = NSString.stringWithString(textField.text).stringByReplacingCharactersInRangeWithString(range, replacementString);
                        textProperty.nativeValueChange(owner, newText);
                    }
                }
            }
        }

        this.firstEdit = false;

        return true;
    }

}
