const EditorControls = ({
  editorHistory,
  handlers: {
    handleEditorUndo,
    handleEditorRedo,
    handleEditorSave,
    handleEditorLoad,
    handleEditorClear,
  },
}) => {
  return (
    <div id="editor-controls">
      <div>
        <button
          type="button"
          className="btn btn-sm btn-info m-2"
          onClick={handleEditorUndo}
          disabled={editorHistory.prev ? false : true}
        >
          Undo
        </button>
        <button
          type="button"
          className="btn btn-sm btn-info m-2"
          onClick={handleEditorRedo}
          disabled={editorHistory.next ? false : true}
        >
          Redo
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-sm btn-primary m-2"
          onClick={handleEditorSave}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-sm btn-warning m-2"
          onClick={handleEditorLoad}
        >
          Load
        </button>
        <button
          type="button"
          className="btn btn-sm btn-danger m-2"
          onClick={handleEditorClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
