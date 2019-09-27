import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public items = ['First', 'Second', 'Third', '4th', '5th'];
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onSelected() {
        console.log('got selection');
    }

    onOpened() {
        console.log('suggestions view opened');
    }
}
