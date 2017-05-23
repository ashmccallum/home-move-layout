import { HomeMoveLayoutPage } from './app.po';

describe('home-move-layout App', () => {
  let page: HomeMoveLayoutPage;

  beforeEach(() => {
    page = new HomeMoveLayoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
