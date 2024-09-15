/** @odoo-module **/
import { Component, useState } from '@odoo/owl';

export class CounterClick extends Component {
    static template = 'CounterClick';
    static props = [] // Nessuna props

    setup() {
        super.setup();
        this.state = useState({
            counter: 0,
        });
    }

    increment() {
        this.state.counter++;
    }
}