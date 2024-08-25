const core = require("@actions/core");
const axios = require("axios");
const cheerio = require("cheerio");

async function start() {
  const response = await axios.get(
    "https://beatstar.en.uptodown.com/android/download"
  );
  const $ = cheerio.load(response.data);
  const version = $(".version").text();

  core.setOutput("version", version);
}

start();
