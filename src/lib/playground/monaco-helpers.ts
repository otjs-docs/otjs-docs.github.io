import * as monaco from "monaco-editor";

export const getEditor = () => {
  const editor = monaco.editor.create(document.getElementById("editor"), {
    fontSize: 18,
    language: "javascript",
    minimap: {
      enabled: false,
    },
    readOnly: true,
    theme: "vs",
    trimAutoWhitespace: false,
  });

  window.addEventListener("resize", () => {
    editor.layout();
  });

  return editor;
};
