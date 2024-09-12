import fs from "fs";

const filesToCopy = ["package.json", "LICENSE", "README.md"];

// Copy files to the dist folder
filesToCopy.forEach((file) => {
  fs.copyFileSync(file, `dist/${file}`);
});
