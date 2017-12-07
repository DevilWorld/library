import { LMSPage } from './app.po';

describe('lms App', () => {
  let page: LMSPage;

  beforeEach(() => {
    page = new LMSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
