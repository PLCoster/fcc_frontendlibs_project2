const MarkDownEditor = ({ editorText, handleEditorChange }) => {
  console.log('MarkDownEditor Here!', editorText);
  return (
    <>
      <h1>This is the MarkDownEditor</h1>
      <textarea id="editor" value={editorText} onChange={handleEditorChange} />
    </>
  );
};
