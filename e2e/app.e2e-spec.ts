import { PlexPage } from './app.po';

describe('plex App', function() {
  let page: PlexPage;

  beforeEach(() => {
    page = new PlexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('app works!');
  });
});
