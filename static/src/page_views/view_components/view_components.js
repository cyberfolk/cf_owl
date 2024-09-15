/** @odoo-module **/
import {ParentComponent} from '@cf_owl/components/ParentComponent/ParentComponent';
import { registry } from "@web/core/registry";
import { Component } from  "@odoo/owl";
const actionRegistry = registry.category("actions");

class ViewComponents extends Component {
    static template = "ViewComponents"
    static components = { ParentComponent };
}

actionRegistry.add('view_components', ViewComponents);
