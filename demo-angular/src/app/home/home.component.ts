import { Component, OnInit } from "@angular/core";
import {AutocompleteXEvent} from "../../../../src/autocomplete-x.common";
import {TextField} from "tns-core-modules/ui/text-field";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public text;

    public items = ['First', 'Second', 'Third', '4th', '5th'];
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onSelected($event: AutocompleteXEvent) {
        console.log('got selection: ' + $event.text);
    }

    onOpened($event) {
        console.log('suggestions view opened');
    }

    onTextChanged($event) {
        let textField = <TextField>$event.object;

        console.log('text changed: ' + textField.text);
    }
}
