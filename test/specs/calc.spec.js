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
      // it('', function(){
      //   let result = window.calc.sum([]);
      //   expect(result).to.be.a('number');
      //   expect(result).to.be.equal();
      // });
      // it('', function(){
      //   let result = window.calc.sum([]);
      //   expect(result).to.be.a('number');
      //   expect(result).to.be.equal();
      // });
      // it('', function(){
      //   let result = window.calc.sum([]);
      //   expect(result).to.be.a('number');
      //   expect(result).to.be.equal();
      // });
      // it('', function(){
      //   let result = window.calc.sum([]);
      //   expect(result).to.be.a('number');
      //   expect(result).to.be.equal();
      // });








    });
  });

})();
