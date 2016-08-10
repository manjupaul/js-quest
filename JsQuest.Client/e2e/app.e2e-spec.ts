import { JsQuestPage } from './app.po';

describe('js-quest App', function() {
  let page: JsQuestPage;

  beforeEach(() => {
    page = new JsQuestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
