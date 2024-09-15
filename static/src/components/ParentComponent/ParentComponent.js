/** @odoo-module **/

import { Component, useState, onWillDestroy } from '@odoo/owl';
import { store, useStore } from "../../store";
import { mousePosition } from "../../utility/mousePosition";

let cognome = {cognome: 'Rosssi'};
let giovanni = {giovanni: {nome: 'Giovanni', cognome: 'Neri', eta: 30}}

export class ParentComponent extends Component {
    static template = 'ParentComponent';
    setup() {
        super.setup();
        this.mouse = mousePosition();
        this.store = useStore()
        this.state = useState({
            name: "Mondo",
            value: 0,
            is_primary: true
        });
        store.add(cognome);
        store.add(giovanni);
        this.jsonStore = JSON.stringify(this.store);
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

ParentComponent.components = { ParentComponent };