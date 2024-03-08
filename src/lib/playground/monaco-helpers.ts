// @ts-expect-error Module will be loaded into Global Namespace through CDN
const monaco = window.monaco;

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
