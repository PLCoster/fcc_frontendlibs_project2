// DLL is used to hold editor history
class DLLNode {
  constructor(editorText) {
    this.editorText = editorText;
    this.next = null;
    this.prev = null;
  }
}

const EditorContainer = () => {
  const [editorText, setEditorText] = React.useState(initialText);
  const [previewHTML, setPreviewHTML] = React.useState(initialText);

  const [editorVisible, setEditorVisible] = React.useState(true);
  const [previewVisible, setPreviewVisible] = React.useState(true);
  const [panelColumnStyle, setPanelColumnStyle] = React.useState('col-6');

  const [savedText, setSavedText] = React.useState(initialText);
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

  const handleEditorVisibilityChange = () => {
    setEditorVisible(!editorVisible);
  };

  const handlePreviewVisibilityChange = () => {
    setPreviewVisible(!previewVisible);
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

  // Update the width of the editor / preview layout depending on visibility:
  React.useEffect(() => {
    if (editorVisible && previewVisible) {
      setPanelColumnStyle('col-6');
    } else {
      setPanelColumnStyle('col-12');
    }
  }, [editorVisible, previewVisible]);

  return (
    <>
      <div className="editor-container container">
        <EditorControls
          handlers={{
            handleEditorUndo,
            handleEditorRedo,
            handleEditorSave,
            handleEditorLoad,
            handleEditorClear,
          }}
          editorHistory={editorHistory}
        />
        <div className="row">
          {editorVisible ? (
            <MarkDownEditor
              editorText={editorText}
              previewVisible={previewVisible}
              panelColumnStyle={panelColumnStyle}
              handleEditorChange={handleEditorChange}
              handleEditorVisibilityChange={handleEditorVisibilityChange}
              handlePreviewVisibilityChange={handlePreviewVisibilityChange}
            />
          ) : null}
          {previewVisible ? (
            <HTMLPreview
              previewHTML={previewHTML}
              editorVisible={editorVisible}
              panelColumnStyle={panelColumnStyle}
              handleEditorVisibilityChange={handleEditorVisibilityChange}
              handlePreviewVisibilityChange={handlePreviewVisibilityChange}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};
