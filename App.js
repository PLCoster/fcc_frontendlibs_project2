const initialText = `### Welcome to my React Markdown Previewer!

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
      {/* NAVBAR / CONTROLS */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Markdown Previewer
          </a>
        </div>
      </nav>

      <div className="container m-3">
        <div className="row flex-nowrap">
          <div className="col-md-auto">
            <MarkDownEditor
              editorText={editorText}
              handleEditorChange={handleEditorChange}
            />
          </div>
          <div className="col-md-auto">
            <HTMLPreview previewHTML={previewHTML} />
          </div>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// Initial Text for Editor:
