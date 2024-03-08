// @ts-expect-error Module will be loaded into Global Namespace through CDN
const ace = window.ace;

export const getEditor = () => {
  const editor = ace.edit("editor");
  editor.setReadOnly(true);
  editor.setTheme("ace/theme/textmate");

  const session = editor.getSession();
  session.setUseWrapMode(true);
  session.setUseWorker(false);
  session.setMode("ace/mode/javascript");

  window.addEventListener("resize", () => {
    editor.resize(true);
  });

  return editor;
};
