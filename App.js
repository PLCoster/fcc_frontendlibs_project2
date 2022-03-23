// Container component for entire application, renders Navbar and the Markdown Editor
const App = () => {
  return (
    <>
      <NavBar />
      <EditorContainer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
