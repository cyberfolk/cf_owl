/** @odoo-module **/
import { Component, useState } from '@odoo/owl';

export class UpdateName extends Component {
    static template = 'UpdateName';
    setup() {
        super.setup();
        this.state = useState({
            name: "",
        });
    }
    updateName(newName) {
        this.state.name = newName;
    }
}