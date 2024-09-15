/** @odoo-module **/
import { Component, useState } from '@odoo/owl';

export class ToggleButton extends Component {
    static template = 'ToggleButton';
    static props = {
        active: {type: Boolean}
    }

    setup() {
        super.setup();
        this.state = useState({
            active: this.props.active || false
        });
    }

    toggleActive() {
        this.state.active = this.state.active ? false : true;
    }
}