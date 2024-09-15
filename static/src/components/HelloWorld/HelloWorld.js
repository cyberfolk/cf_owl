/** @odoo-module **/

import { Component, useState } from '@odoo/owl';

export class HelloWorld extends Component {
    static template = 'HelloWorld';
    setup() {
        super.setup();
        this.state = useState({
            name: "Mondo",
            value: 0,
            is_primary: true
        });
    }
    updateName(newName) {
        this.state.name = newName;
    }
    increment() {
        this.state.value++;
    }
    toggle_is_primary() {
        this.state.is_primary = this.state.is_primary ? false : true;
    }
}

HelloWorld.components = { HelloWorld };


