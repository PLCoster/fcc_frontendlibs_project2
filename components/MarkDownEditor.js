const MarkDownEditor = ({ editorText, handleEditorChange }) => {
  return (
    <>
      <h4>Markdown Editor:</h4>
      <textarea
        id="editor"
        className="form-control"
        value={editorText}
        onChange={handleEditorChange}
      />
    </>
  );
};
