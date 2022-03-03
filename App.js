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
    updateHistory(event.target.value);
  };

  const updateHistory = (newHistory) => {
    editorHistory.next = new DLLNode(newHistory);
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
    updateHistory(savedText);
  };

  const handleEditorClear = () => {
    setEditorText('');
    updateHistory('');
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
      <NavBar
        handlers={{
          handleEditorUndo,
          handleEditorRedo,
          handleEditorSave,
          handleEditorLoad,
          handleEditorClear,
        }}
        editorHistory={editorHistory}
      />
      <div className="container">
        <div className="d-flex flex-nowrap">
          <MarkDownEditor
            editorText={editorText}
            handleEditorChange={handleEditorChange}
          />
          <HTMLPreview previewHTML={previewHTML} />
        </div>
      </div>
    </>
  );
};

// Initial Text for Editor:
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

ReactDOM.render(<App />, document.getElementById('root'));
