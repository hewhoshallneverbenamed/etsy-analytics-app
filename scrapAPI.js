import mongoose from "mongoose";
import Product from "./src/models/Product.js";
import { load } from "cheerio";
import { gotScraping } from "got-scraping";
const storeUrl =
  "https://www.etsy.com/listing/717039802/personalized-leather-sleeve-bag-for?click_key=bd5828b746971240ca8e20a1591d7a509bed0ced%3A717039802&click_sum=2c541211&ref=shop_home_feat_1&pro=1&frs=1&sts=1";

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/interphase");
    console.log("Connected successfully to the server");
  } catch (error) {
    console.log(error);
  }
}

connect();

const response = await gotScraping(storeUrl);
const html = response.body;
const $ = load(html);

//price:
// document.querySelectorAll('div[data-buy-box-region="price"]').forEach(span =>{
//     console.log(span.querySelector('span.wt-screen-reader-only').parentElement.textContent.match(/((\d+,?)+.?(\d+)?)/)[0])
// })
const pricecontainer = $('div[data-buy-box-region="price"]');
for (const ele of pricecontainer) {
  const element = $(ele).find("p.wt-text-title-03");
  var price = element.text().match(/((\d+,?)+.?(\d+)?)/)[0];
}

//number of reviews:(shop and item)
// document.querySelectorAll(".wt-tab__item").forEach(ele => {
//     console.log(ele.querySelector('.wt-ml-xs-2'))
// })

const reviewscontainer = $(".wt-tab__item");
var itemreviews = reviewscontainer.text().match(/((\d+,?)+.?(\d+)?)/);
var itemreview = 0;
if (itemreviews) {
  itemreview = parseInt(itemreviews[0].replace(",", ""));
}
Product.create({
  price: price,
  number_reviews: itemreview,
});

const productsToScrape = [];
const links = $('a[href*="/listing/"]');
for (const link of links) {
  let url = $(link).attr("href");
  if (url[0] != "h") {
    // transforming relative urls (not needed)
    // if (url[0] == "/") {
    //   url = new URL(url,'https://www.etsy.com/').href
    // } else{
    //   url =null;
    // }
    url = null;
  }
  console.log(url);
  if (url) {
    productsToScrape.push(url);
  }
}
for (const link of productsToScrape) {
  try {
    // The try block attempts to execute our code
    const productResponse = await gotScraping(link);
    const productHTML = productResponse.body;
    const $$ = load(productHTML);
    const pricecontainer = $$('div[data-buy-box-region="price"]');
    for (const ele of pricecontainer) {
      const element = $$(ele).find("p.wt-text-title-03");
      var price2 = element.text().match(/((\d+,?)+.?(\d+)?)/)[0];
    }
    const reviewscontainer2 = $$(".wt-tab__item");
    let itemreviews2 = reviewscontainer2.text().match(/((\d+,?)+.?(\d+)?)/);
    let itemreview2 = 0;
    if (itemreviews2) {
      itemreview2 = parseInt(itemreviews2[0].replace(",", ""));
    }
    Product.create({
      price: price2,
      number_reviews: itemreview2,
    });
  } catch (error) {
    // This time, we will just print the error message and the url.
    console.error(error.message, link);
  }
}
