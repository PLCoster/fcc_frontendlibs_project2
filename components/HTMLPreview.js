const HTMLPreview = ({
  previewHTML,
  editorVisible,
  panelColumnStyle,
  handleEditorVisibilityChange,
  handlePreviewVisibilityChange,
}) => {
  return (
    <div id="preview-wrapper" className={panelColumnStyle + ' mt-3 mb-3'}>
      <div className="d-flex justify-content-between align-items-center">
        <h4>HTML Preview:</h4>
        <button
          type="button"
          className="btn btn-sm btn-info m-2"
          onClick={
            editorVisible
              ? handlePreviewVisibilityChange
              : handleEditorVisibilityChange
          }
        >
          {editorVisible ? 'Hide Preview' : 'Show Editor'}
        </button>
      </div>
      <div
        id="preview"
        className="container p-3"
        dangerouslySetInnerHTML={{ __html: previewHTML }}
      ></div>
    </div>
  );
};
