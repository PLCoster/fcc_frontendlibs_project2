const MarkDownEditor = ({
  editorText,
  previewVisible,
  panelColumnStyle,
  handleEditorChange,
  handleEditorVisibilityChange,
  handlePreviewVisibilityChange,
}) => {
  return (
    <div id="editor-wrapper" className={panelColumnStyle + ' mt-3 mb-3'}>
      <div className="d-flex justify-content-between">
        <h4>Markdown Editor:</h4>
        <button
          type="button"
          className="btn btn-sm btn-info m-2"
          onClick={
            previewVisible
              ? handleEditorVisibilityChange
              : handlePreviewVisibilityChange
          }
        >
          {previewVisible ? 'Hide Editor' : 'Show Preview'}
        </button>
      </div>
      <textarea
        id="editor"
        className="form-control"
        value={editorText}
        onChange={handleEditorChange}
      />
    </div>
  );
};
