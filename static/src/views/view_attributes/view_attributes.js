/** @odoo-module **/
var AbstractAction = require('web.AbstractAction');
var core = require('web.core');

var ViewAttributes = AbstractAction.extend({
    contentTemplate: 'ViewAttributes',
});

core.action_registry.add('view_attributes', ViewAttributes);
return ViewAttributes;
