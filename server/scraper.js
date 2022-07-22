const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");


async function scrape(url) {
  try {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  
  const sources = await page.evaluate(() =>{
    srcs = Array.from(document.querySelectorAll("img"))
    .map((image)=>(
      image.getAttribute("src")
    ))
     return srcs;
  })

  
  //fs.writeFileSync("./data.json", JSON.stringify(sources))

  await browser.close();
  return{sources}
}catch(error){
  console.log(error)
}
};

module.exports = {scrape}