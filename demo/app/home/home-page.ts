
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import {EventData, NavigatedData, Observable, Page} from 'tns-core-modules/ui/page';
import { HomeViewModel } from './home-view-model';

let viewModel: Observable;

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
}

export function pageLoaded(args: EventData) {
    const page = args.object as Page;
    const items = ['First', 'Second', 'Third', '4th', 'fifth', 'sixth'];

    viewModel = new Observable();

    viewModel.set('items', items);
    viewModel.set('text', 'T');
    setTimeout(() => {

        viewModel.set('text', 'Text');

    }, 4000);


    page.bindingContext = viewModel;
}

export function onOpened() {
    console.log('suggestions opened');
}

export function onSelected(args) {
    console.log('selected: ' + args.selected);
}
