const MarkDownEditor = ({ editorText, handleEditorChange }) => {
  return (
    <div id="editor-wrapper" className="col-6 mt-3 mb-3">
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
