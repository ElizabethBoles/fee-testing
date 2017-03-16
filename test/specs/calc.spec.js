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

      it('should return 1 if the number one is passed', function(){
        let result = window.calc.sum([1]);
         expect(result).to.be.a('number');
         expect(result).to.equal(1);
      });

      it('should return Nan', function(){
         let result = window.calc.sum(['e', 'b']);
         expect(result).to.be.NaN;
       });

      it('should return 0 when no number or an empty array is passed', function(){
        let result = window.calc.sum([]);
        expect(result).to.be.a('number');
        expect(result).to.be.equal(0);
      });

      //----------------2nd----------------

      it('should return 24 if the number 4 is passed', function(){
        let result = window.calc.factor(4);
        expect(result).to.be.a('number');
        expect(result).to.be.equal(24);
      });

      it('should return 0 if nothing is passed', function(){
        let result = window.calc.factor();
        expect(result).to.be.a('number');
        expect(result).to.be.equal(0);
      });

      it('should return the first arg if more than one is passed ', function(){
        let result = window.calc.factor(2, 3);
        expect(result).to.be.a('number');
        expect(result).to.be.equal(2);
      });

      it('should return string 3 as 6', function(){
        let result = window.calc.factor('3');
        expect(result).to.be.a('number');
        expect(result).to.be.equal(6);
      });








    });
  });

})();
