const core = require("@actions/core");
const axios = require("axios");
const cheerio = require("cheerio");

async function start() {
  const response = await axios.get(
    "https://beatstar.en.uptodown.com/android/download"
  );
  const $ = cheerio.load(response.data);
  const version = $(".version").text();
  const button = $("#detail-download-button");

  core.setOutput("version", version);
  core.setOutput("data-url", button.attr("data-url"));
}

start();
