const initialText = `
# Welcome to my React Markdown Previewer!

<ins>**Headings** can be created by starting a line with '#' symbols:</ins>

# Heading 1 (#)
## Heading 2 (##)
### Heading 3 (###)
#### Heading 4 (####)
##### Heading 5 (#####)
###### Heading 6 (######)

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
