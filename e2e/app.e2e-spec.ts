import { AotPrivatePage } from './app.po';

describe('aot-private App', () => {
  let page: AotPrivatePage;

  beforeEach(() => {
    page = new AotPrivatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
