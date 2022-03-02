const HTMLPreview = ({ previewHTML }) => {
  return (
    <>
      <h1>This is the HTMLPreview</h1>
      <div dangerouslySetInnerHTML={{ __html: previewHTML }}></div>
    </>
  );
};
