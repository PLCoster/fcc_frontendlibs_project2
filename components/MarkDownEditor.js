const MarkDownEditor = ({ editorText, handleEditorChange }) => {
  console.log('MarkDownEditor Here!', editorText);
  return (
    <>
      <h1>This is the MarkDownEditor</h1>
      <textarea value={editorText} onChange={handleEditorChange} />
    </>
  );
};
