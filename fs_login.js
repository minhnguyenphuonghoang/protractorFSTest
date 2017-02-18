describe('filestring login page', function() {
  describe('login with credentials', function() {
    var validUsername = 'mt1@yopmail.com';
    beforeEach(function() {
      browser.get('https://webstg.filestring.net/');
    });

    it('log in with username and invalid password', function() {
      var invalidPassword = '123456';
      var errorMessage = 'The email address or password you entered is incorrect. Please enter again.';

      element(by.model('user.identity')).sendKeys(validUsername);
      element(by.model('user.password')).sendKeys(invalidPassword);
      element(by.id('submit')).click();

      expect(element(by.css('[role="alert"]')).getText()).toContain(errorMessage);
    });

    it('log in with valid username and password', function() {
      var validPassword = '1234';
      var expectedUserName = 'Minh Test\nmt1@yopmail.com';
      
      element(by.model('user.identity')).sendKeys(validUsername);
      element(by.model('user.password')).sendKeys(validPassword);
      element(by.id('submit')).click();

      expect(element(by.css('[class="info ng-binding"]')).getText()).toEqual(expectedUserName);
    });

  });
});
