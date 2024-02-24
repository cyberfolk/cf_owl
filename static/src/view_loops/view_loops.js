odoo.define("cf_owl.ViewLoops", function (require) {

    var AbstractAction = require('web.AbstractAction');
    var core = require('web.core');
    var QWeb = core.qweb;
    var web_client = require('web.web_client');
    var session = require('web.session');
    var ajax = require('web.ajax');
    var _t = core._t;
    var rpc = require('web.rpc');

    var ViewLoops = AbstractAction.extend({
        contentTemplate: 'ViewLoops',

        events: {
        },

        init: function (parent, context) {
            this._super(parent, context);
        },

        willStart: function () {
            return this._super();
        },

        start: function () {
            this.set("title", 'Void');

            return this._super();
        }
    });

   core.action_registry.add('view_loops', ViewLoops);
   return ViewLoops;
});