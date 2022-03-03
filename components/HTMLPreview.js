const HTMLPreview = ({ previewHTML }) => {
  return (
    <div id="preview-wrapper" className="m-3">
      <h4>HTML Preview:</h4>
      <div
        id="preview"
        className="container p-3"
        dangerouslySetInnerHTML={{ __html: previewHTML }}
      ></div>
    </div>
  );
};
