import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import {NativeScriptFormsModule} from 'nativescript-angular';

registerElement('AutocompleteX', () => require('../').AutocompleteX);


@NgModule({
    declarations: [ ],
    providers:    [],
    imports:      [
        NativeScriptFormsModule
    ],
    exports:      [
        NativeScriptFormsModule,
    ]
})
export class AutocompleteXModule {
}
