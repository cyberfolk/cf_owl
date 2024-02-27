/** @odoo-module **/
import { registry } from "@web/core/registry";
import { Component } from  "@odoo/owl";
const actionRegistry = registry.category("actions");

class ViewAttributes extends Component {
    static template = "ViewAttributes"
}

actionRegistry.add('view_attributes', ViewAttributes);
