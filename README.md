# Free Code Camp: Front End Libs Project 2 - Markdown Previewer

## React Markdown Previewer

### Project Aims:

The aim of this project was to build a markdown previewer with funcionality similar to https://codepen.io/freeCodeCamp/full/GrZVVO

The project was built using the following technologies:

- **HTML**
- **[React](https://reactjs.org/) / JavaScript**
- **[Bootstrap](https://getbootstrap.com/)** with some custom **CSS**
- **[Marked](https://github.com/markedjs)** to parse markdown and transform to **HTML**
- **[DOMPurify](https://github.com/cure53/DOMPurify)** to sanitize HTML generated from the markdown

### Project Requirements:

- User Story #1: I can see a textarea element with a corresponding id="editor".

- User Story #2: I can see an element with a corresponding id="preview".

- User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

- User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type.

- User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

- User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

- Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements.

### Project Writeup:

For the second Free Code Camp: Front End Libraries Projects, I decided to build the project using the React Library. The front end is written using JSX (transpiled using Babel) and the application state is controlled using React Hooks.

Beyond the required User Stories outlined above, this React Markdown Previewer also allows users to Undo / Redo changes they make in the editor, as well as Save / Load and Clear the contents of the editor as required. The editor history and undo / redo functionality utilise a doubly-linked list in order to store the state of the editor, and allow traversal between previous and future states of the editor.

- index.html - this is the sole HTML page for the application, it is primarily used as a mounting point for the React component tree, as well as to import the required JavaScript and CSS libraries for the project.

- styles.css - a small stylesheet to customise styling of the project beyond the default styles in Bootstrap.

- App.js - this is the root component of the React application, it holds at updates the state of the editor and preview via React Hooks, as well as the history of the editor. It renders the other React components, (NavBar.js, MarkDownEditor.js and HTMLPreview.js) and passes to them required functions and props.

#### Components:

- HTMLPreview.js and MarkDownEditor.js are both presentational components (hold no state). MarkDownEditor is a controlled form component, as its contents are set via props passed down to it from the App component.

- Navbar.js is another presentational component, which displays the buttons allowing the user to undo/redo and save/reload/clear the editor. These buttons all trigger onClick functions that update state held in the App component.

#### Assets:

- initialText.js contains the initial markdown text to display in the editor when the application is first loaded.
