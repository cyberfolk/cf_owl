/** @odoo-module **/
import { reactive, useState } from  "@odoo/owl";

export const store = reactive({
    name: 'marco',
    list: [],
    add(item) {
        this.list.push(item);
    },
});

export function useStore() {
    return useState(store);
}

// Essentially equivalent to the previous code
// Which can be useful to unit test the class separately.
// export const store = reactive(new Store());
