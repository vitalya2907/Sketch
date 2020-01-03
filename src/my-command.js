import SketchToolbar from 'sketch-toolbar-item';
// Handlers for the toolbar item's run action
export function generate(context) {
    ////
}

export function create(context) {
    /////
}

export function update(context) {
    /////
}

export function registerToolbarActions(context) {
    // to register a toolbar item with a dropdown menu, create a menuItem for each sub-item
    let menuItem1 = SketchToolbar.menuItemForToolbarAction(context, 'generate', 'generate.png');
    let menuItem2 = SketchToolbar.menuItemForToolbarAction(context, 'create', 'create.png');
    let menuItem3 = SketchToolbar.separatorMenuItem();
    let menuItem4 = SketchToolbar.menuItemForToolbarAction(context, 'update', 'update.png');

    // Then register them using the `registerToolbarMenu` method
    SketchToolbar.registerToolbarMenu(context, 'plugin', 'Plugin', 'plugin.png', [menuItem1, menuItem2, menuItem3, menuItem4]);
}