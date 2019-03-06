import React from "react";

module.export = props => {
  if (props.level == 1) {
    return React.createElement("img", {
      src: "https://media2.giphy.com/media/KdzF8XLE3FwXe/giphy.gif"
    });
  } else if (props.level == 2) {
    return React.createElement("img", {
      src: "https://thumbs.gfycat.com/BoldCostlyEasternnewt-size_restricted.gif"
    });
  } else if (props.level == 3) {
    return React.createElement("img", {
      src: "https://media1.tenor.com/images/ca7e2ccc2a1fe6ac0433a7bc77292327/tenor.gif?itemid=9285424"
    });
  } else if (props.level == 4) {
    return React.createElement("img", {
      src: "https://i.makeagif.com/media/8-19-2016/1ttjnJ.gif"
    });
  } else if (props.level == 5 || props.level == "god") {
    return React.createElement("img", {
      src: "https://i.pinimg.com/originals/49/53/f3/4953f3916f3bd069129fcfb6577de92c.gif"
    });
  } else if (props.level == 6 || props.level == "blue") {
    return React.createElement("img", {
      src: "https://i.pinimg.com/originals/3a/da/83/3ada83dfbec8e3b8a91d14798714299b.gif"
    });
  } else if (props.level > 6 || props.level == "ui") {
    return React.createElement("img", {
      src: "https://steamuserimages-a.akamaihd.net/ugc/940560952323651148/C6ED18952491C5B3CCF1581B0930FDC0FBAD2A7E/"
    });
  } else {
    return React.createElement("img", {
      src: "https://orig00.deviantart.net/1cb5/f/2015/170/d/e/goku_gif_by_manicsam-d8xylqa.gif"
    });
  }
}; // module.export = props => This is to go even further beyond... Super Saiyan ${props.level};
