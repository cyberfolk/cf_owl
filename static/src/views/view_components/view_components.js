/** @odoo-module **/
import {HelloWorld} from '@cf_owl/HelloWorld/HelloWorld';
import { registry } from "@web/core/registry";
import { Component } from  "@odoo/owl";
const actionRegistry = registry.category("actions");

class ViewComponents extends Component {
    static template = "ViewComponents"
    static components = { HelloWorld };
}

actionRegistry.add('view_components', ViewComponents);
