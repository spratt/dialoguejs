// dialogue.js
// A dialogue engine in JavaScript

export class Renderer {
    constructor(engine) {}

    renderLine(line) {}

    renderOptions(options) {}
}

export class DialogueOption {
    constructor(line, nextStateID) {
        this.line = line;
        this.nextStateID = nextStateID;
    }
}

export class State {
    constructor(lines, options) {
        this.lines = lines;
        this.options = options;
    }
}

export class Engine {
    constructor(renderer, initialStateID, getState) {
        this.renderer = renderer;
        this.initialStateID = initialStateID;
        this.getState = getState;
    }

    start() {
        this.gotoState(this.initialStateID);
    }

    gotoState(state) {
        this.state = this.getState(state);
        for (const line of this.state.lines) {
            this.renderer.renderLine(line);
        }
        this.renderer.renderOptions(this.state.options);
    }
}
