/** @odoo-module **/
import { Component, useState } from '@odoo/owl';
import { mousePosition } from "../../utility/mousePosition";

export class MousePosition extends Component {
    static template = 'MousePosition';
    setup() {
        super.setup();
        this.mouse = mousePosition();
        this.state = useState({
            counter: 0,
        });
    }

    increment() {
        this.state.counter++;
    }
}