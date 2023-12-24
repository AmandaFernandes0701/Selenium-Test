const { By, Builder } = require("selenium-webdriver");
const dotenv = require("dotenv");
dotenv.config();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function clickButton(driver, xpath) {
  const button = await driver.findElement(By.xpath(xpath));
  await button.click();
}

async function enterInput(driver, inputName, value) {
  const inputField = await driver.findElement(By.name(inputName));
  await inputField.sendKeys(value);
}

async function login(driver) {
  await clickButton(
    driver,
    "/html/body/div[2]/div[1]/div[2]/ul[2]/li[2]/button"
  );

  await enterInput(driver, "user", process.env.LOGIN);
  await enterInput(driver, "pass", process.env.PASSWORD);

  await enterInput(driver, "pass", "\n");
  await sleep(1000);
}

async function navigateToDesignPage(driver) {
  await clickButton(
    driver,
    "/html/body/div[6]/div[1]/div[2]/div[2]/div/ul[1]/li[5]"
  );
}

async function scrollToBottom(driver) {
  await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
}

async function navigateToFavorites(driver) {
  await sleep(1000);
  await clickButton(
    driver,
    "/html/body/div[6]/div[1]/div[3]/div/div[2]/div[1]/div/a"
  );
  await sleep(1000);
}

async function vote(driver) {
  for (let i = 0; i < 5000; i++) {
    await clickButton(
      driver,
      "/html/body/div[6]/div[1]/div[3]/div/div[1]/div[1]/div[1]/ul/li[3]/form/div[2]/button"
    );
    await sleep(800);
  }
}

(async function StardollVote() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://www.stardoll.com/br/");

  await login(driver);
  await navigateToDesignPage(driver);
  await scrollToBottom(driver);
  await navigateToFavorites(driver);
  await vote(driver);

  await driver.quit();
})();
