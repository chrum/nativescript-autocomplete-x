declare class SearchTextField extends UITextField implements UITableViewDataSource, UITableViewDelegate {

    static alloc(): SearchTextField; // inherited from NSObject

    static appearance(): SearchTextField; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): SearchTextField; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SearchTextField; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SearchTextField; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SearchTextField; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SearchTextField; // inherited from UIAppearance

    static new(): SearchTextField; // inherited from NSObject

    currentTextOnResultsListPrefix: string;

    itemSelectionHandler: (p1: NSArray<SearchTextFieldItem>, p2: number) => void;

    itemSelectionTextHandler: (titie: string) => void;

    maxNumberOfResults: number;

    maxResultsListHeight: number;

    startVisible: boolean;

    theme: SearchTextFieldTheme;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterItems(items: NSArray<SearchTextFieldItem> | SearchTextFieldItem[]): void;

    filterStrings(strings: NSArray<string> | string[]): void;

    indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    keyboardDidChangeFrame(notification: NSNotification): void;

    keyboardWillHide(notification: NSNotification): void;

    keyboardWillShow(notification: NSNotification): void;

    numberOfSectionsInTableView(tableView: UITableView): number;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

    scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

    scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

    scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

    scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

    scrollViewDidScroll(scrollView: UIScrollView): void;

    scrollViewDidScrollToTop(scrollView: UIScrollView): void;

    scrollViewDidZoom(scrollView: UIScrollView): void;

    scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

    scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

    scrollViewWillBeginDragging(scrollView: UIScrollView): void;

    scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

    scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

    sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

    self(): this;

    tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

    tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

    tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

    tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

    tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

    tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

    tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

    tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

    tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): any;

    tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

    tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

    tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

    tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

    tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

    tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

    tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

    tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

    tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

    tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

    tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

    tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

    tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

    tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

    tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

    tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

    tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

    tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

    tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

    tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

    tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

    tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

    tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

    tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

    tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration): any;

    tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration): any;

    tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

    tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

    tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

    tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

    tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

    tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

    tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

    tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

    tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

    tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

    tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

    tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

    tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

    tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

    tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

    tableViewWillCommitMenuWithAnimator(tableView: UITableView, animator): void;

    tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

    tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

    tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

    tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

    tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration, animator): void;

    tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

    textFieldDidBeginEditing(): void;

    textFieldDidChange(): void;

    textFieldDidEndEditing(): void;

    textFieldDidEndEditingOnExit(): void;

    typingDidStop(): void;

    viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class SearchTextFieldItem extends NSObject {

    static alloc(): SearchTextFieldItem; // inherited from NSObject

    static new(): SearchTextFieldItem; // inherited from NSObject

    image: UIImage;

    subtitle: string;

    title: string;

    constructor(o: { title: string; });

    constructor(o: { title: string; subtitle: string; });

    constructor(o: { title: string; subtitle: string; image: UIImage; });

    initWithTitle(title: string): this;

    initWithTitleSubtitle(title: string, subtitle: string): this;

    initWithTitleSubtitleImage(title: string, subtitle: string, image: UIImage): this;
}

declare class SearchTextFieldTheme extends NSObject {

    static alloc(): SearchTextFieldTheme; // inherited from NSObject

    static darkTheme(): SearchTextFieldTheme;

    static lightTheme(): SearchTextFieldTheme;

    static new(): SearchTextFieldTheme; // inherited from NSObject

    bgColor: UIColor;

    borderColor: UIColor;

    borderWidth: number;

    cellHeight: number;

    font: UIFont;

    fontColor: UIColor;

    placeholderColor: UIColor;

    separatorColor: UIColor;

    subtitleFontColor: UIColor;
}

declare var SearchTextFieldVersionNumber: number;

declare var SearchTextFieldVersionString: interop.Reference<number>;
