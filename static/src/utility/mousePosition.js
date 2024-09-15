/** @odoo-module **/
import { useState, onWillDestroy } from '@odoo/owl';

export function mousePosition() {
    const position = useState({ x: 0, y: 0 });

    function update(e) {
        position.x = e.clientX;
        position.y = e.clientY;
    }
    window.addEventListener("mousemove", update);
    onWillDestroy(() => {
        window.removeEventListener("mousemove", update);
    });

    return position;
}