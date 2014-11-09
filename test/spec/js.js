describe('angular-detector', function() {
  this.timeout(5000);

  beforeEach(module('angular-detector'));

  it('should detect right user-agent', inject(function(Detector) {
    Detector.setUA('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2');
    var result = Detector.getResult();

    expect(result.browser.name).to.be.equal('Chromium');
    expect(result.browser.major).to.be.equal('15');
    expect(result.browser.version).to.be.equal('15.0.874.106');
    expect(result.device.model).to.be.equal(undefined);
    expect(result.device.type).to.be.equal(undefined);
    expect(result.device.vendor).to.be.equal(undefined);
    expect(result.os.name).to.be.equal('Ubuntu');
    expect(result.os.version).to.be.equal('11.10');
    expect(result.engine.name).to.be.equal('WebKit');
    expect(result.cpu.architecture).to.be.equal('amd64');

  }));

  it('should init new instance', inject(function(Detector) {
    var detector = Detector.newInstance('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2');
    var result = detector.getResult();

    expect(result.browser.name).to.be.equal('Chromium');
    expect(result.browser.major).to.be.equal('15');
    expect(result.browser.version).to.be.equal('15.0.874.106');
    expect(result.device.model).to.be.equal(undefined);
    expect(result.device.type).to.be.equal(undefined);
    expect(result.device.vendor).to.be.equal(undefined);
    expect(result.os.name).to.be.equal('Ubuntu');
    expect(result.os.version).to.be.equal('11.10');
    expect(result.engine.name).to.be.equal('WebKit');
    expect(result.cpu.architecture).to.be.equal('amd64');

  }));

});