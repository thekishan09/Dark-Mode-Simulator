import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import tinycolor from "tinycolor2";
import Iframe from "./Iframe";

export default function PartialIframe({ code, setLoading }) {
  console.clear();
  function isDark(color) {
    // Check the format of the color, HEX or RGB?
    var r = "";
    var g = "";
    var b = "";
    if (color.match(/^rgb/)) {
      // If HEX --> store the red, green, blue values in separate variables
      color = color.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );

      r = color[1];
      g = color[2];
      b = color[3];
    } else {
      // If RGB --> Convert it to HEX: http://gist.github.com/983661
      color = +(
        "0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")
      );

      r = color >> 16;
      g = (color >> 8) & 255;
      b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    let hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
      return false;
    } else {
      return true;
    }
  }

  function containsDirectText(el) {
    return [...el.childNodes].some(
      (n) => n.nodeType === Node.TEXT_NODE && n.nodeValue.trim() !== ""
    );
  }

  function toDark(value) {
    if (value <= 135) return 10;
    else if (value <= 140) return 15;
    else if (value <= 145) return 15;
    else if (value <= 150) return 15;
    else if (value <= 155) return 25;
    else if (value <= 162) return 10;
    else if (value <= 165) return 15;
    else if (value <= 170) return 30;
    else if (value <= 175) return 30;
    else if (value <= 180) return 25;
    else if (value <= 185) return 30;
    else if (value <= 190) return 50;
    else if (value <= 193) return 30;
    else if (value <= 195) return 20;
    else if (value <= 197) return 34;
    else if (value <= 200) return 45;
    else if (value <= 205) return 50;
    else if (value <= 210) return 50;
    else if (value <= 215) return 52;
    else if (value <= 220) return 68;
    else if (value <= 225) return 65;
    else if (value <= 230) return 65;
    else if (value <= 235) return 65;
    else if (value <= 240) return 78;
    else if (value <= 245) return 78;
    else if (value < 250) return 85;
    else return 90;
  }
  function toDeSaturate(value) {
    if (value <= 140) return 10;
    else if (value <= 145) return 15;
    else if (value <= 150) return 15;
    else if (value <= 155) return 45;
    else if (value <= 160) return 0;
    else if (value <= 163) return 20;
    else if (value <= 165) return 10;
    else if (value <= 170) return 25;
    else if (value <= 175) return 38;
    else if (value <= 180) return 5;
    else if (value <= 185) return 10;
    else if (value <= 190) return 10;
    else if (value <= 193) return 10;
    else if (value <= 195) return 30;
    else if (value <= 197) return 0;
    else if (value <= 200) return 0;
    else if (value <= 205) return 25;
    else if (value <= 210) return 25;
    else if (value <= 215) return 5;
    else if (value <= 220) return -30;
    else if (value <= 225) return 25;
    else if (value <= 230) return 25;
    else if (value <= 235) return 20;
    else if (value <= 240) return 20;
    else if (value <= 245) return 20;
    else if (value < 250) return 50;
    else return 0;
  }

  function toLight(value) {
    if (value <= 0) return 100;
    else if (value <= 5) return 88;
    else if (value <= 10) return 88;
    else if (value <= 15) return 90;
    else if (value <= 20) return 90;
    else if (value <= 25) return 70;
    else if (value <= 30) return 80;
    else if (value <= 35) return 70;
    else if (value <= 37) return 55;
    else if (value <= 40) return 65;
    else if (value <= 45) return 60;
    else if (value <= 50) return 60;
    else if (value <= 55) return 60;
    else if (value <= 60) return 30;
    else if (value <= 65) return 40;
    else if (value <= 70) return 40;
    else if (value <= 75) return 40;
    else if (value <= 80) return 40;
    else if (value <= 85) return 32;
    else if (value <= 87) return 30;
    else if (value <= 90) return 10;
    else if (value <= 95) return 10;
    else if (value <= 100) return 7;
    else if (value <= 103) return 0;
    else if (value <= 105) return 10;
    else if (value <= 110) return 7;
    else if (value <= 115) return 10;
    else if (value <= 120) return 2;
    else return 0;
  }
  // function toSaturate(value) {
  //   if (value <= 0) return 0;
  //   else if (value <= 5) return 0;
  //   else if (value <= 10) return 0;
  //   else if (value <= 15) return 0;
  //   else if (value <= 20) return 0;
  //   else if (value <= 25) return 10;
  //   else if (value <= 30) return 0;
  //   else if (value <= 35) return 10;
  //   else if (value <= 40) return 0;
  //   else if (value <= 45) return 5;
  //   else if (value <= 50) return 5;
  //   else if (value <= 55) return 5;
  //   else if (value <= 60) return 5;
  //   else if (value <= 65) return 15;
  //   else if (value <= 70) return 0;
  //   else if (value <= 75) return 0;
  //   else if (value <= 80) return 0;
  //   else if (value <= 85) return 30;
  //   else if (value <= 90) return 30;
  //   else if (value <= 95) return 0;
  //   else if (value <= 100) return 0;
  //   else if (value <= 103) return 20;
  //   else if (value <= 105) return 10;
  //   else if (value <= 110) return 0;
  //   else if (value <= 115) return 0;
  //   else if (value <= 120) return 0;
  //   else return 0;
  // }

  const changeBackgroundColor = (element, elemStyle) => {
    const hexBGColor = `#${tinycolor(elemStyle.backgroundColor).toHex()}`;
    if (!isDark(hexBGColor)) {
      if (!tinycolor(hexBGColor).isDark()) {
        console.log(
          element,
          "Light",
          tinycolor(hexBGColor).getBrightness(),
          tinycolor(hexBGColor).getLuminance(),
          tinycolor(hexBGColor).toHex()
        );
        const brightness = Math.round(tinycolor(hexBGColor).getBrightness());
        element.style.backgroundColor = tinycolor(hexBGColor)
          .darken(toDark(brightness))
          .desaturate(toDeSaturate(brightness))
          .setAlpha(
            brightness >= 191 ? tinycolor(hexBGColor).getLuminance() : 1
          )
          .toString();
      }
    }
  };

  const changeTextColor = (element, elemStyle) => {
    const textHexColor = `#${tinycolor(elemStyle.color).toHex()}`;
    if (isDark(textHexColor)) {
      if (element.tagName === "A") {
        if (textHexColor !== "#1155cc") {
          element.style.color = tinycolor(textHexColor)
            .lighten(toLight(tinycolor(textHexColor).getBrightness()))
            .desaturate(toDeSaturate(tinycolor(textHexColor).getBrightness()))
            .toString();
        }
      } else {
        element.style.color = tinycolor(textHexColor)
          .lighten(toLight(tinycolor(textHexColor).getBrightness()))
          .desaturate(toDeSaturate(tinycolor(textHexColor).getBrightness()))
          .toString();
      }
    }
  };

  const changeBorderColor = (element, elemStyle) => {
    const position = ["Top", "Bottom", "Left", "Right"];
    position.forEach((pos) => {
      const isBorder =
        parseInt(elemStyle[`border${pos}Width`].match(/\d+/)[0]) > 0;
      const isBorderColorGiven =
        elemStyle[`border${pos}Color`] !== "rgba(0, 0, 0, 0)";

      if (isBorder && isBorderColorGiven) {
        const borderColorHex = `#${tinycolor(
          elemStyle[`border${pos}Color`]
        ).toHex()}`;

        if (isDark(borderColorHex)) {
          element.style.color = tinycolor(borderColorHex)
            .lighten(toLight(tinycolor(borderColorHex).getBrightness()))
            .desaturate(toDeSaturate(tinycolor(borderColorHex).getBrightness()))
            .toString();
        } else {
          if (!isDark(borderColorHex)) {
            element.style.color = tinycolor(borderColorHex)
              .lighten(toLight(tinycolor(borderColorHex).getBrightness()))
              .desaturate(
                toDeSaturate(tinycolor(borderColorHex).getBrightness())
              )
              .toString();
          }
        }
      }
    });
  };

  useEffect(() => {
    const iframe = document.getElementById("partial_iframe");
    const elmnt = iframe.contentWindow.document.querySelectorAll("body,body *");
    elmnt.forEach((element) => {
      if (
        element.tagName !== "IMG" &&
        element.tagName !== "INPUT" &&
        element.tagName !== "SELECT"
      ) {
        if (!containsDirectText(element)) {
          const elemStyle = window.getComputedStyle(element);

          // for background change
          changeBackgroundColor(element, elemStyle);

          // for checking border color
          changeBorderColor(element, elemStyle);
        } else if (containsDirectText(element)) {
          const elemStyle = window.getComputedStyle(element);
          // if any text element designed like a button then we have to also change its background
          changeBackgroundColor(element, elemStyle);

          // for foreground
          changeTextColor(element, elemStyle);

          // for checking border color
          changeBorderColor(element, elemStyle);
        }
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Stack alignItems="center" justifyContent="center" id="scroll_event">
      <Stack width="70%">
        <Typography>
          This is a tentative preview. The actual email may look a bit different
          depending on the email client and the browser.
        </Typography>
      </Stack>
      <Iframe id="partial_iframe" content={code} />
    </Stack>
  );
}
