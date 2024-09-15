/** @odoo-module **/

import { UpdateName } from '@cf_owl/components/UpdateName/UpdateName';
import { ToggleButton } from '@cf_owl/components/ToggleButton/ToggleButton';
import { CounterClick } from '@cf_owl/components/CounterClick/CounterClick';
import { MousePosition } from '@cf_owl/components/MousePosition/MousePosition';
import { Component, useState, onWillDestroy } from '@odoo/owl';
import { store, useStore } from "../../store";

let cognome = {cognome: 'Rosssi'};
let giovanni = {giovanni: {nome: 'Giovanni', cognome: 'Neri', eta: 30}}

export class ParentComponent extends Component {
    static template = 'ParentComponent';
    static components = { CounterClick, MousePosition, ToggleButton, UpdateName };

    setup() {
        super.setup();
        this.store = useStore()
        store.add(cognome);
        store.add(giovanni);
        this.jsonStore = JSON.stringify(this.store, null, 4);
    }
}