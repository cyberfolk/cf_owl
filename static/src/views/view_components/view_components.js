/** @odoo-module **/
import {HelloWorld} from '@cf_owl/HelloWorld/HelloWorld';  //INFO-: Riesco ad importarlo ma non a riutilizzarlo

var AbstractAction = require('web.AbstractAction');
var core = require('web.core');

var ViewComponents = AbstractAction.extend({
    contentTemplate: 'ViewComponents',
});

core.action_registry.add('view_components', ViewComponents);

return ViewComponents;
