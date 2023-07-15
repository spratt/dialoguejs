# dialoguejs

A JavaScript dialogue engine with support for the following features:

- skills
- hidden skill checks whose success or failure can result in:
  - extra lines of dialogue, or
  - extra dialogue options
- dialogue options associated with skill checks
  - success or failure determines actual dialogue
- characters can keep speaking while the player decides
- eventually, dialogue options disappear as the other characters move on

## Running Locally

- python3 -m http.server

## TODO

- [X] Write dialogue
- [X] Write dialogue options
- [ ] State transitions
- [ ] Write timed dialogue
- [ ] Skills
- [ ] Skill-basaed dialogue options
- [ ] Hidden skill checks to reveal dialogue lines
- [ ] Pluggable interfaces
- [ ] Console interface for quick debugging
- [ ] React interface for making it pretty