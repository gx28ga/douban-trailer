const puppeteer = require('puppeteer');

const url = `https://movie.douban.com/tag/#/?sort=R&range=6,10&tags=`;
const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time);
  
});

(async () => {
  console.log("start visit the target page");

  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    dumpio: false
  })
  
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil:"networkidle2"
  })

  await sleep(3000);

  await page.waitForSelector(".more");

  for (let i = 0; i < 1; i++) {
    
    await sleep(3000);
    await page.click(".more");
  }
  
  
  const result = await page.evaluate(() => {
    let $ = window.$;
    let items = $(".list-wp").find("a");
    let links = [];
    
    if (items.length >= 1) {
      
      items.each((index, item) => {
        let it = $(item);
        let doubanId = it.find("div").data("id");
        let title = it.find(".title").text();
        let rate = Number(it.find(".rate").text());
        let poster = it.find("img").attr("src").replace("s_ratio", "m_ratio");

        links.push({
          doubanId, title, rate, poster
        })
      })
    }

    return links
  })

  browser.close();
  console.log(result);

})();