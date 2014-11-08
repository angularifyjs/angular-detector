describe('angular-cookies', function() {
  this.timeout(5000);

  beforeEach(module('angular-cookies'));

  it('should set cookies', inject(function(Cookies) {
    Cookies.set('hello', 'moto');
    expect(Cookies.get('hello')).to.be.equal('moto');
  }));

});
