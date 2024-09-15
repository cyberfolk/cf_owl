/** @odoo-module **/

import { Component, useState } from '@odoo/owl';
import { store, useStore } from "../../store";
store.add("New list item!");

export class HelloWorld extends Component {
    static template = 'HelloWorld';
    setup() {
        super.setup();
        this.store = useStore({cognome: 'lucio'});
        this.state = useState({
            name: "Mondo",
            value: 0,
            is_primary: true
        });
        console.log(this.store)
        console.log(this.state)
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


