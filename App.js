const initialText = `
### Welcome to my React Markdown Previewer!

---

#### <ins>**Headings** can be created by starting a line with '#' symbols:</ins>

# Heading 1 (#)
## Heading 2 (##)
### Heading 3 (###)
#### Heading 4 (####)
##### Heading 5 (#####)
###### Heading 6 (######)

---

<ins>**Emphasis** can be added as follows:</ins>

*Italic Text* by surrounding the text with single asterisks like **\\*this\\***

**Bold Text** by surrounding the text with double asterisks like **\\*\\*this\\*\\***

***Bold and Italic Text*** by surrounding the text with triple asterisks like **\\*\\*\\*this\\*\\*\\***

~Strikethrough Text~ by surrounding the text with single tildes  like **\\~this\\~**

> blockquote text can be added by starting the line like **> this**

---

<ins>**Code** text can be styled as follows:</ins>

${'`'}Inline Code${'`'} can be created by surrounding the text with single backticks like ${'\\`'}this${'\\`'}

${'```'}

Multiline
Code
Blocks

${'```'}

can be created by surrounding the text with triple backticks like

${'\\`\\`\\`'}

this

${'\\`\\`\\`'}

---

<ins>**Lists** can be created as follows:</ins>

1. Ordered
2. Lists
3. can be created by numbering elements like **1. this**

- Unordered
- Lists
- can be created by starting each list item with a dash like **- this**

---

<ins>**Horizontal Rules** can be created using three dashes (---)</ins>

---

<ins>**Images** can be added using this syntax:</ins>

**\!\\[alt text\\]\\(link_to_image.jpg\\)**

![Free Code Camp Logo Green](https://plcoster.github.io/homepage/assets/Projects/FCC.png)

---

<ins>**Links** can be added using this syntax:</ins>

**\\[title\\]\\(link_to_resource\\)**

For more Markdown Syntax, see this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

`;

// const test = ```# Welcome to my React Markdown Previewer!

// ## This is a sub-heading...
// ### And here's some other cool stuff:

// Heres some code, \`<div></div>\`, between 2 backticks.

// \```
// // this is multi-line code:

// function anotherExample(firstLine, lastLine) {
//   if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
//     return multiLineCode;
//   }
// }
// \```

// You can also make text **bold**... whoa!
// Or _italic_.
// Or... wait for it... **_both!_**
// And feel free to go crazy ~~crossing stuff out~~.

// There's also [links](https://www.freecodecamp.org), and
// > Block Quotes!

// And if you want to get really crazy, even tables:

// Wild Header | Crazy Header | Another Header?
// ------------ | ------------- | -------------
// Your content can | be here, and it | can be here....
// And here. | Okay. | I think we get it.

// - And of course there are lists.
//   - Some are bulleted.
//      - With different indentation levels.
//         - That look like this.

// 1. And there are numbered lists too.
// 1. Use just 1s if you want!
// 1. And last but not least, let's not forget embedded images:

// ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)```;

const App = () => {
  const [editorText, setEditorText] = React.useState(initialText);
  const [previewHTML, setPreviewHTML] = React.useState(initialText);

  const handleEditorChange = (event) => {
    setEditorText(event.target.value);
  };

  // Update the preview view whenever the editorText changes
  React.useEffect(() => {
    // Custom marked options to give <br> on single return
    // See https://marked.js.org/using_advanced
    marked.setOptions({
      gfm: true,
      breaks: true,
    });
    // Parse editor markdown to HTML for Preview
    setPreviewHTML(marked.parse(editorText));
  }, [editorText]);

  return (
    <>
      <h1>Markdown Editor with HTML Preview</h1>
      <MarkDownEditor
        editorText={editorText}
        handleEditorChange={handleEditorChange}
      />
      <HTMLPreview previewHTML={previewHTML} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// Initial Text for Editor:
