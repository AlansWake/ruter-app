import { RuterAppPage } from './app.po';

describe('ruter-app App', () => {
  let page: RuterAppPage;

  beforeEach(() => {
    page = new RuterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
