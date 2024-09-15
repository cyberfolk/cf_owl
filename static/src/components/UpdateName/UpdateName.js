/** @odoo-module **/
import { Component, useState } from '@odoo/owl';

export class UpdateName extends Component {
    static template = 'UpdateName';
    static props = ["name"] // Evito il warning. Permetto solo la props 'name'.

    setup() {
        super.setup();
        this.state = useState({
            name: this.props.name || ''
        });
    }
    updateName(newName) {
        this.state.name = newName;
    }
}