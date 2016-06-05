export class JsQuestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('js-quest-app h1')).getText();
  }
}
