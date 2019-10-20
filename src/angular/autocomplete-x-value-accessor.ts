import { Directive, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { TextValueAccessor } from "nativescript-angular/forms/value-accessors/text-value-accessor";

const AUTOCOMPLETEX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteXValueAccessor),
    multi: true
};

@Directive({
    selector:
        "AutocompleteX[ngModel], AutocompleteX[formControlName], AutocompleteX[formControl]" +
        "autoCompleteX[ngModel], autoCompleteX[formControlName], autoCompleteX[formControl]" +
        "autocomplete-x[ngModel], autocomplete-x[formControlName], autocomplete-x[formControl]",
    providers: [AUTOCOMPLETEX_VALUE_ACCESSOR],
    host: {
        "(blur)": "onTouched()",
        "(textChange)": "onChange($event.value)"
    }
})
export class AutocompleteXValueAccessor extends TextValueAccessor {
    // Empty as we will use the same logic as the TextValueAccessor
}
