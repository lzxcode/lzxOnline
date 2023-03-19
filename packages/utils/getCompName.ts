import fs from "fs";
const componentsName: string[] = [];
export const getCompName = function (path: string) {
  const file: string[] = fs.readdirSync(path);
  file.forEach((item) => {
    let isFile = fs.statSync(path + "/" + item);
    if (isFile.isDirectory() === true) {
      componentsName.push((path + "/" + item));
    }
  });
  return componentsName;
};
