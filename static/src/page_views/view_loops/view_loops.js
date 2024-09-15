/** @odoo-module **/
import { registry } from "@web/core/registry";
import { Component } from  "@odoo/owl";
const actionRegistry = registry.category("actions");

class ViewLoops extends Component {
    static template = "ViewLoops"
}

actionRegistry.add('view_loops', ViewLoops);
