const App = () => {
  return (
    <>
      <h1>Markdown Editor with HTML Preview</h1>
      <MarkDownEditor />
      <HTMLPreview />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
