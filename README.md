# [WORK - IN - PROGRESS ]
### [ only iOS so far ]
# nativescript-autocomplete-x

***nativescript-autocomplete-x*** is a NativeScript plugin for autocompleting (suggesting) text field content

##### On ***iOS*** 
 we are using:
[SearchTextField](https://github.com/apasccon/SearchTextField)
or actually my ***[sweet fork](https://github.com/chrum/SearchTextField)*** ;)

##### On Android
that is not available yet

## Demo apps

#### NativeScript-Core (XML)
Check out the [demo](/demo) folder. This is how to clone and run it:

```bash
git clone https://github.com/chrum/nativescript-autocomplete-x
cd nativescript-autocomplete-x/src
npm run demo.ios
```

#### NativeScript-Angular
Check out the [demo-angular](/demo-angular) folder. This is how to clone and run it:

```bash
git clone https://github.com/chrum/nativescript-autocomplete-x
cd nativescript-autocomplete-x/src
npm run demo-angular.ios
```
## Installation
```javascript
tns plugin add nativescript-autocomplete-x
```

## Usage 

# Core
***IMPORTANT !!!*** Make sure you include `xmlns:acx="nativescript-autocomplete-x"` on the Page element
```xml
<Page class="page" xmlns:acx="nativescript-autocomplete-x">
    <StackLayout>
        <acx:AutocompleteX placeholder="check autocomplete..."
                           currentTextInResultsPrefix="Use: "
                           items="{{ ['First', 'Second', 'Third'] }}"
                           selected="onSelected"></acx:AutocompleteX>
    </StackLayout>
</Page>

```

# Angular
Include AutocompleteXModule in your @NgModule  
***IMPORTANT !!!*** you need to do it for every module that will be autocompleting things ;)
```typescript
import { AutocompleteXModule } from 'nativescript-autocomplete-x/angular';

@NgModule({
    imports: [
        AutocompleteXModule,
        ...
    ],
    ...
})
```

```html
<AutocompleteX [placeholder]="'Placeholder...'"
               [items]="items"
               [currentTextInResultsPrefix]="'Use: '"
               (selected)="onSelected($event)">
</AutocompleteX>
```

## API [ TODO ]
### Properties    
| Property | Default | Type | Description |
| --- | --- | --- | --- |
| text |  | `string` | Gets or sets the text |
| items | [ ] | `Array<string>` | array with strings that should be used as autocomplete source |
| hint |  | `string` | Placeholder |
| editable | false | `boolean` | |
| currentTextInResultsPrefix |  | `string` | If set then typed text will appear as the first item on the suggestions list prefixed with this value. <br><br>***Example*** <br>if this one is set to  `'Use:'`<br> then first item on the suggestions list will be `'Use: {typed text}'`  |

### Events    
| Property | Type | Description |
| --- | --- | --- |
| selected | (args: { text: string}): void | fired when selected suggestion gets tapped |


# Troubleshooting
### iOS



## TODO
* **Android** support
* expose clear button mode
* font configuration
* theming, bg color
* more compatibility features with {N} TextField

## Authors

[Chrystian Ruminowicz](http://chrum.it)

## License

This project is licensed under the MIT license
