interface colorObj {
  [index: string]: number;
}

export default function (imgSrc: string) {
  return new Promise((resolve) => {
    const canvasContent = document.createElement("canvas");
    const context = canvasContent.getContext("2d");
    if (!context) {
      throw new Error("创建canvasContext失败");
    }
    let img = new Image();
    img.src = imgSrc;
    img.onload = function () {
      canvasContent.width = img.width;
      canvasContent.height = img.height;
      context?.drawImage(img, img.width, img.height);
      var data = context.getImageData(0, 0, img.width, img.height).data;
      let colorObj: colorObj = {};
      let level = 1;
      if (data.length > 100000) {
        level = 10;
      } else if (data.length > 1000000) {
        level = 100;
      }
      for (let i = 0; i < data.length; i += 4 * level) {
        let arrRgb: number[] = [];
        // rgb三通道，a-alpha通道无用
        for (let j = 0; j < 3; j += 1) {
          arrRgb.push(data[i + j]);
        }
        if (colorObj[arrRgb.join(",")]) {
          if (
            arrRgb.join(",") !== "0,0,0" &&
            arrRgb.join(",") !== "255,255,255"
          ) {
            colorObj[arrRgb.join(",")] += 1;
          }
        } else {
          colorObj[arrRgb.join(",")] = 1;
        }
      }
      let maxColor = Object.entries(colorObj)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
      let mainColorArr = maxColor.map((colorItem) => colorItem[0]);
      resolve(mainColorArr)
    };
  });
}
