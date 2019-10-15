
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import {EventData, NavigatedData, Observable, Page, PropertyChangeData} from 'tns-core-modules/ui/page';
import {AutocompleteXEvent} from '../../../src/autocomplete-x.common';

let viewModel: Observable;

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    const items = ['First', 'Second', 'Third', '4th', 'fifth', 'sixth'];

    viewModel = new Observable();

    viewModel.set('items', items);
    viewModel.set('editable', false);

    viewModel.set('autocompleteText', '');
    viewModel.set('currentText', 'Type something up there to see it here');

    // handling TextField text change
    viewModel.on('propertyChange', (propertyChangeData: PropertyChangeData) => {
        if (propertyChangeData.propertyName === 'autocompleteText') {
            console.log('Text changed: ' + propertyChangeData.value);

            viewModel.set('currentText', propertyChangeData.value);
        }
    });

    setTimeout(() => {
        // viewModel.set('editable', false);

    }, 2000);

    page.bindingContext = viewModel;
}

export function pageLoaded(args: EventData) {
    const page = args.object as Page;

}

export function onOpened() {
    console.log('suggestions opened');
}

export function onClosed() {
    console.log('suggestions closed');
}

export function onSelected(args: AutocompleteXEvent) {
    console.log('selected: ', args.text);
}
