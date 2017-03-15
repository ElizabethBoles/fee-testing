(function() {
  'use strict';
  let expect = window.chai.expect;
  describe('math test', function(){
    describe('sum function', function(){


      it('should return sum 1 + 1', function(){
        let result = window.calc.sum([1, 1]);
        expect(result).to.be.a('number');
        expect(result).to.equal(2);
      });
      it('should return a number when only one number is passed', function(){
        let result = window.calc.sum([1]);
         expect(result).to.be.a('number');
         expect(results).to.equal(1);
      });


      





    });
  });

})();
