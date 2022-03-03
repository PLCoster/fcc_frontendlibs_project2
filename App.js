const initialText = `### Welcome to my React Markdown Previewer!

---

<ins>**Headings** can be created by starting a line with '#' symbols:</ins>

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

// DLL is used to hold editor history
class DLLNode {
  constructor(editorText) {
    this.editorText = editorText;
    this.next = null;
    this.prev = null;
  }
}

const App = () => {
  const [editorText, setEditorText] = React.useState(initialText);
  const [savedText, setSavedText] = React.useState(initialText);
  const [previewHTML, setPreviewHTML] = React.useState(initialText);
  const [editorHistory, setEditorHistory] = React.useState(
    new DLLNode(initialText)
  );

  // Update EditorText and History on change
  const handleEditorChange = (event) => {
    setEditorText(event.target.value);
    editorHistory.next = new DLLNode(event.target.value);
    editorHistory.next.prev = editorHistory;
    setEditorHistory(editorHistory.next);
  };

  const handleEditorUndo = () => {
    if (editorHistory.prev) {
      const prevHistory = editorHistory.prev;
      setEditorText(prevHistory.editorText);
      setEditorHistory(prevHistory);
    }
  };

  const handleEditorRedo = () => {
    if (editorHistory.next) {
      const nextHistory = editorHistory.next;
      setEditorText(nextHistory.editorText);
      setEditorHistory(nextHistory);
    }
  };

  const handleEditorSave = () => {
    setSavedText(editorText);
  };

  const handleEditorLoad = () => {
    setEditorText(savedText);
  };

  const handleEditorClear = () => {
    setEditorText('');
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
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Markdown Previewer
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-sm btn-info m-2"
                  onClick={handleEditorUndo}
                  disabled={editorHistory.prev ? false : true}
                >
                  Undo
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-sm btn-info m-2"
                  onClick={handleEditorRedo}
                  disabled={editorHistory.next ? false : true}
                >
                  Redo
                </button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-sm btn-primary m-2"
                  onClick={handleEditorSave}
                >
                  Save Editor
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-sm btn-warning m-2"
                  onClick={handleEditorLoad}
                >
                  Load Editor
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-sm btn-danger m-2"
                  onClick={handleEditorClear}
                >
                  Clear Editor
                </button>
              </li>
            </ul>
          </div>
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
