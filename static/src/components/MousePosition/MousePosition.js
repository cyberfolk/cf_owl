/** @odoo-module **/
import { Component, useState } from '@odoo/owl';
import { mousePosition } from "../../utility/mousePosition";

export class MousePosition extends Component {
    static template = 'MousePosition';
    static props = [] // Nessuna props

    setup() {
        super.setup();
        this.mouse = mousePosition();
    }

    increment() {
        this.state.counter++;
    }
}