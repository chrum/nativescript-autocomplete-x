# [WORK - IN - PROGRESS ]
# nativescript-autocomplete-x

***nativescript-autocomplete-x*** is a NativeScript plugin for autocompleting (suggesting) text field content

##### On ***iOS*** 
 we are using:
[SearchTextField](https://github.com/apasccon/SearchTextField)
or actually my ***[sweet fork](https://github.com/apasccon/SearchTextField)*** ;)

##### On Android
that is not available yet

## Installation

Describe your plugin installation steps. Ideally it would be something like:

```javascript
tns plugin add nativescript-autocomplete-x
```

## Usage 

# Core
<span style="color:red">IMPORTANT: </span>_Make sure you include `xmlns:acx="nativescript-autocomplete-x"` on the Page element_
```xml
<Page class="page" xmlns:acx="nativescript-autocomplete-x">
    <StackLayout>
        <acx:AutocompleteX placeholder="check autocomplete..."
                           text="{{ text }}"
                           items="{{ ['First', 'Second', 'Third'] }}"
                           selected="onSelected"></acx:AutocompleteX>
    </StackLayout>
</Page>

```

Describe any usage specifics for your plugin. Give examples for Android, iOS, Angular if needed. See [nativescript-drop-down](https://www.npmjs.com/package/nativescript-drop-down) for example.
	
	```javascript
    Usage code snippets here
    ```)

# Angular

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
               [maxVisibleRows]="4"
               [currentTextInResultsPrefixProperty]="'Use: '"
               (selected)="onSelected($event)">
</AutocompleteX>
```

## API [ TODO ]

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.
    
| Property | Default | Description |
| --- | --- | --- |
| some property | property default value | property description, default values, etc.. |
| another property | property default value | property description, default values, etc.. |

## Authors

[Chrystian Ruminowicz](http://chrum.it)

## License

This project is licensed under the MIT license
