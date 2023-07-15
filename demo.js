// demo.js
// A small demo conversation using dialogue.js and its console renderer.

import { DialogueOption, State, Engine } from "./dialogue.js";
import { ConsoleRenderer } from "./console.renderer.js";

const demoConversation = new Map();
const initialStateID = "start";
demoConversation.set(initialStateID, new State([
    "Welcome.",
    "To the real world.",
    "I am Morpheus.",
    "King of dreams."
],[
    new DialogueOption("Hi Morpheus, I'm Alice.", "alice"),
    new DialogueOption("Hi Morpheus, I'm Bob.", "bob"),
    new DialogueOption("Hi Morpheus, I'm not interested.", "exit")
]));

demoConversation.set("alice", new State([
    "You've been living in a dream world, Alice.",
    "Everything you know is a fabrication.",
    "It was designed to make you complacent.",
    "Now I present to you a choice.",
    "If you take the blue pill, you wake up in your bed and believe whatever you want to believe.",
    "If you take the red pill, you can see how deep this rabbit hole goes."
],[
    new DialogueOption("I'll take the blue pill.", "exit"),
    new DialogueOption("I'll take the red pill.", "redPill"),
    new DialogueOption("Didn't I see this in a movie?", "exit")
]));

// TODO: create a state that automatically transitions to a new state
// to avoid duplication
demoConversation.set("bob", new State([
    "You've been living in a dream world, Bob.",
    "Everything you know is a fabrication.",
    "It was designed to make you complacent.",
    "Now I present to you a choice.",
    "If you take the blue pill, you wake up in your bed and believe whatever you want to believe.",
    "If you take the red pill, you can see how deep this rabbit hole goes."
],[
    new DialogueOption("I'll take the blue pill.", "exit"),
    new DialogueOption("I'll take the red pill.", "redPill"),
    new DialogueOption("Didn't I see this in a movie?", "exit")
]));

demoConversation.set("redPill", new State([
    "You take the red pill."
],[
    new DialogueOption("What now?", "exit"),
    new DialogueOption("How long until it takes effect?", "exit"),
    new DialogueOption("I don't feel anything.", "exit")
]));

const demoRenderer = new ConsoleRenderer();
const demoEngine = new Engine(demoRenderer, initialStateID, function(stateID) {
    return demoConversation.get(stateID);
});

export function startDemo() {
    demoEngine.start();
}
globalThis.startDemo = startDemo;
