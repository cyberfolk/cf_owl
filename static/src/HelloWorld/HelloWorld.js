/** @odoo-module **/

import { Component, useState } from '@odoo/owl';

export class HelloWorld extends Component {
    setup() {
        super.setup();
        this.state = useState({
            name: "Mondo",
        });
    }
}

HelloWorld.template = 'HelloWorld';
HelloWorld.components = { HelloWorld };


