/** @odoo-module */
//import {HelloWorld} from '@cf_owl/HelloWorld/HelloWorld';
import { FormController } from "@web/views/form/form_controller";
import { formView } from "@web/views/form/form_view";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { Component, onWillStart } from "@odoo/owl";

class QuadFormController extends FormController {
    // static components = { QuadFormController, HelloWorld }; // TODO-: Da errore qui.

    setup() {
        super.setup();
        this.orm = useService("orm");
        this.quad = null

        onWillStart(async () => {
            this.quad = await this.orm.call("hex.quad", "get_json_quad", [], {'id': this.props.resId})
                .then((result) => {
                    return JSON.parse(result)
                })
        })
    }
}

QuadFormController.template = "QuadFormView";

export const quadFormView = {
    ...formView, // contains the default Renderer/Controller/Model
    Controller: QuadFormController,
};

registry.category("views").add("quad_form", quadFormView);
