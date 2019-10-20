import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import {NativeScriptFormsModule} from 'nativescript-angular';
import {FormsModule} from '@angular/forms';
import {AutocompleteXValueAccessor} from './autocomplete-x-value-accessor';

registerElement('AutocompleteX', () => require('../').AutocompleteX);


@NgModule({
    declarations: [
        AutocompleteXValueAccessor
    ],
    providers: [],
    imports: [
        FormsModule,
        NativeScriptFormsModule
    ],
    exports: [
        FormsModule,
        NativeScriptFormsModule,
        AutocompleteXValueAccessor
    ]
})
export class AutocompleteXModule {
}
