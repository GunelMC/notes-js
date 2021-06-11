# notes-js

Try at https://rdupplaw.github.io/notes-js/

## About

notes-js is a front-end web app built using pure JavaScript, HTML and CSS with no external libraries (not even testing libraries; see [Homemade Testing Library](#homemade-testing-library) below). This project was developed over a week of afternoons

We communicate with an external API using `fetch` to support emoji short codes (e.g. `:fire:` -> 🔥). 

This app follows the Model-View-Controller pattern.

### Homemade Testing Library

We built our own basic testing library based on Jest. This includes `describe`, `it`, and `expect` functions along with `toBe`, `toBeInstanceOf` and `toThrowError` matchers. We also created a rudimentary `spyOn` function which overwrites a given method with a spy method, allowing use of the `toHaveBeenCalledWithArguments` matcher.

The `describe` and `it` functions log their text to the console, and the `expect` matchers log `Pass` or `Fail`.

See the files in `/spec/helpers` for the implementation of these functions, and see the spec files in `/spec` for our usage. `SpecRunner.html` runs all tests.

### Built With

* JavaScript
* HTML
* CSS

## Getting Started

```
open index.html
```

### Prerequisites

* A web browser

### Installation

```
git clone https://github.com/rdupplaw/notes-js.git
```
