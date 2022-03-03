const MarkDownEditor = ({ editorText, handleEditorChange }) => {
  return (
    <div id="editor-wrapper" className="m-3">
      <h4>Markdown Editor:</h4>
      <textarea
        id="editor"
        className="form-control"
        value={editorText}
        onChange={handleEditorChange}
      />
    </div>
  );
};
