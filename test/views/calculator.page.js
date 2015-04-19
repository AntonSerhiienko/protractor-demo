/**
 * Created by a.sergienko on 9/1/2014.
 */
function CalculatorPage() {

    var firstValue = element(by.model('first')),
        secondValue = element(by.model('second')),
        latestResult = element(by.binding('latest')),
        calculateBtn = element(by.id('gobutton')),
        operator = element(by.model('operator')),
        memoryTable = element.all(by.repeater('result in memory')),
        memoryResults = element.all(by.repeater('result in memory').column('result.value'));

    this.setFirstValue = function(value) {
        firstValue.sendKeys(value);
        return this;
    };

    this.setSecondValue = function(value) {
        secondValue.sendKeys(value);
        return this;
    };

    this.calculate = function(){
        calculateBtn.click();
        return this;
    };

    this.selectOperator = function(operation){
        operator.click();
        operator.element(by.cssContainingText("option",operation)).click();
        return this;
    };

    this.getLatestResult = function() {
        return latestResult.getText();
    };

    this.getMemorySize = function(){
        return memoryTable.count();
    };

    this.getResultInMemoryRow = function(rowIndex){
       return memoryResults.then(
           function(array){
               return array[rowIndex].getText();
           })
    }
}

module.exports = CalculatorPage;