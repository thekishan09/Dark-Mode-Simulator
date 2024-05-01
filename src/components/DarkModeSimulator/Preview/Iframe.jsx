import React from "react";
const Iframe = (props) => {
  const writeHTML = (frame) => {
    if (!frame) {
      return;
    }
    let doc = frame.contentDocument;
    doc.open();
    doc.write(props.content);
    doc.close();
    frame.style.width = "100%";
    frame.style.height = `80vh`;
  };
  return (
    <>
      <iframe
        id={props.id}
        src="about:blank"
        frameBorder="0"
        ref={writeHTML}
        title="darkMode"
      />
    </>
  );
};
export default Iframe;
