/** @odoo-module **/

import { xml, Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
const fieldRegistry = registry.category("fields");

export class ExampleField extends Component {
    static components = { };
    static template = "example_template";
    static props = {
        ...standardFieldProps,
        bgColor: { type: String, optional: true },
    };
    static defaultProps = {
        bgColor: "primary",
    };
    setup() {
        //this.orm = useService("orm");
        this.state = useState({
            value: this.props.value,
        });
        this.state.value = "Default vaulue inserito da javascript."
        super.setup();
    }
}

export const exampleField = {
    component: ExampleField,
    extractProps: ({ attrs, options }) => {
        return { bgColor: options.bg_color, };
    },
};

fieldRegistry.add("example", exampleField);
