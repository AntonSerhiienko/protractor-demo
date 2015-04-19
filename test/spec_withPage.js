
var CalculatorPage = require('./views/calculator.page.js');
describe('slow calculator', function() {

  var page;

  beforeEach(function() {
    browser.get('http://localhost:3456');
    page = new CalculatorPage();
  });
 
  it('should add numbers', function() {
    page.setFirstValue(4);
    page.setSecondValue(5);
    page.calculate();
    expect(page.getLatestResult()).toEqual('9');
  });

  describe('memory', function() {

    it('should start out with an empty memory', function () {
      expect(page.getMemorySize()).toEqual(0);
    });

    it('should fill the memory with past results', function() {
      page.setFirstValue(1)
          .setSecondValue(1)
          .calculate()

          .setFirstValue(10)
          .setSecondValue(20)
          .calculate()

          .setFirstValue(1)
          .setSecondValue(20)
          .selectOperator("-")
          .calculate()

          expect(page.getMemorySize()).toEqual(3);

          expect(page.getResultInMemoryRow(0)).toEqual('-19');
          expect(page.getResultInMemoryRow(1)).toEqual('30');
          expect(page.getResultInMemoryRow(2)).toEqual('2');

    });
  });  
});
