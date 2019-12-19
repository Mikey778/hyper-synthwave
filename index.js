"use strict";
// main text color 3q3 salmon #FD3777
const foregroundColor = "#FD3777";

// 1q4 background main blue color #261447, #240E37 (light)
const backgroundColor = "#240E37";

const black = backgroundColor;

// 2q2 #F6019D
const red = "#F6019D";
// 1q3 #2DE2E6
const green = "#2DE2E6";
// 1q1 #FF6C11
const yellow = "#f9c80e";
// 2q1 #023788 purple ex dir path
const blue = "#9f55ff";
// 2q5 #D40078
const magenta = "#ff009d";
// 1q3 #2DE2E6
const cyan = "#2DE2E6";
//2q5 #D40078
const gray = "#D40078";
//3q2 #241734
const brightBlack = "#241734";
const brightWhite = foregroundColor;
const borderColor = cyan;
const cursorColor = "#FD3777";

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors: [
      // regular
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      gray,

      // bright
      brightBlack,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      brightWhite
    ],
    css: `
			${config.css || ""}
      .tabs. .tabs_list .tabs_text {
        color: '#D40078';
      }
			.tab_tab:before {
				border-color: '#D40078';
        border-width: 2px;
      }
      .terms_terms {
        // background-image: linear-gradient(to right, red , blue);",
        // background: url(file://<path-to-image>) center;
        // background-size: cover;
      }
      .terms_termGroup {
        // background: transparent !important;
        // background: rgba(0,0,0,0.) !important
      }
      
      
      `
  });
};
