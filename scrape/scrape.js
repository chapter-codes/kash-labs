// npm install axios cheerio

import axios from "axios";
import * as cheerio from "cheerio";

const url = "https://www.behance.net/kashlabs";

async function scrape() {
  const { data } = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  });

  const $ = cheerio.load(data);

  const links = [];

  $('a[href*="/gallery/"]').each((_, el) => {
    const href = $(el).attr("href");
    const title = $(el).text().trim();

    if (href && !links.includes(href)) {
      links.push({
        title,
        url: href.startsWith("http") ? href : `https://www.behance.net${href}`
      });
    }
  });

  console.log(links);
}

scrape();