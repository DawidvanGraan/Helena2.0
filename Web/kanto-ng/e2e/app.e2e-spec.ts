import { KantoNgPage } from './app.po';

describe('kanto-ng App', function() {
  let page: KantoNgPage;

  beforeEach(() => {
    page = new KantoNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
