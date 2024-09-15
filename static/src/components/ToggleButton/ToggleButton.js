/** @odoo-module **/
import { Component, useState } from '@odoo/owl';

export class ToggleButton extends Component {
    static template = 'ToggleButton';
    setup() {
        super.setup();
        this.state = useState({
            is_primary: true
        });
    }

    toggle_is_primary() {
        this.state.is_primary = this.state.is_primary ? false : true;
    }
}