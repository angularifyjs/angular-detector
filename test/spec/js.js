describe('angular-closure', function() {
  this.timeout(5000);

  beforeEach(module('angular-closure'));

  var A = null;

  it('should init object A', inject(function(Closure) {
    A = Closure.extend({
      value: null,

      init: function() {
        this.value = 0;
      },

      get: function() {
        return this.value;
      },

      set: function(value) {
        this.value = value;
      }

    });

    expect(A).to.have.property('value', 0);

    A.set(100);
    expect(A).to.have.property('value', 100);

    expect(A.get()).to.be.equal(100);
  }));

  it('should extend object A', inject(function(Closure) {
    A.extend({
      init: function() {
        this.value = 200;
      },

      get: function() {
        return 'value=' + this._super();
      },

      test: function(){
        return 'hello moto';
      }
    });

    expect(A).to.have.property('value', 200);

    expect(A.get()).to.be.equal('value=200');

    expect(A.test()).to.be.equal('hello moto');
  }));

  it('should bind function', inject(function(Closure) {
    var func = Closure.bind(function() {
      return this.hello;
    }, {
      hello: 'moto'
    });

    expect(func()).to.be.equal('moto');
  }));

});
