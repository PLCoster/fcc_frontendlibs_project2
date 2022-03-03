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
    // Parse editor markdown to HTML for Preview, sanitize with DOMPurify
    setPreviewHTML(DOMPurify.sanitize(marked.parse(editorText)));
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
        <div className="row">
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

ReactDOM.render(<App />, document.getElementById('root'));
