const HTMLPreview = ({ previewHTML }) => {
  return (
    <>
      <h4>HTML Preview:</h4>
      <div
        id="preview"
        className="container p-3"
        dangerouslySetInnerHTML={{ __html: previewHTML }}
      ></div>
    </>
  );
};
