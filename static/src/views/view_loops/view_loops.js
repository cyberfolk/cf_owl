/** @odoo-module **/
var AbstractAction = require('web.AbstractAction');
var core = require('web.core');

var ViewLoops = AbstractAction.extend({
    contentTemplate: 'ViewLoops',
});

core.action_registry.add('view_loops', ViewLoops);
return ViewLoops;