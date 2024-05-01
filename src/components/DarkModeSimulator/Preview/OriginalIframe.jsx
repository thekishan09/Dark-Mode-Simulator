import Iframe from "./Iframe";
export default function OriginalIframe({ code }) {
  // useEffect(() => {
  //   const element = document.getElementById("original_iframe");
  //   const elem = element.querySelector(".gmail_quote");
  //   console.log(elem);
  // }, []);
  return <Iframe id="original_iframe" content={code} />;
}
