import { Buffer } from "buffer";
import React, { useEffect } from "react";
import FullIframe from "./FullIframe";
import OriginalIframe from "./OriginalIframe";
import PartialIframe from "./PartialIframe";

export const Preview = ({ codeData, value }) => {
  let renderCode = Buffer.from(codeData, "base64").toString("ascii");
  const handleCode = () => {
    const from = renderCode.indexOf(`----------`);
    const to = renderCode.indexOf(`</a>&gt;<br></div>`);
    // console.log(from, to);
    if (from !== -1 && to !== -1) {
      renderCode = renderCode.replace(renderCode.substring(from, to + 18), "");
      // console.log(renderCode.replace(renderCode.substring(from, to + 18), ""));
    }
  };

  handleCode();
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
      {value === 0 && <OriginalIframe code={renderCode} />}
      {value === 1 && <PartialIframe code={renderCode} />}
      {value === 2 && <FullIframe code={renderCode} />}
    </>
  );
};
