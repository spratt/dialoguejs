// console.renderer.js
// This module renders dialogue.js output to the browser console
// Not very useful for finished products, but useful for debugging
// This also serves as the example renderer for dialogue.js

import { Renderer } from "./dialogue.js";

export class ConsoleRenderer extends Renderer {
    constructor() {
        super();
    }

    renderLine(line) {
        console.log(line);
    }

    renderOptions(options) {
        console.log("You can respond with one of the following: ");
        options.forEach((option, i) => {
            console.log(i, option.line);
        });
    }
}
