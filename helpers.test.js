describe("Helper tools tests", function() {
    beforeEach(function () {
        billAmtInput.value = 0;
        tipAmtInput.value = 0;
        submitPaymentInfo();
      });

    it('should add bills with sumPaymentTotal()', function () {
        // expect(sumPaymentTotal('tipAmt')).toEqual(33);
        billAmtInput.value = '1200';
        tipAmtInput.value = '200';
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(17);

      });

    it('should sum the tip percent correctly', function () {
        expect(calculateTipPercent(120, 20)).toEqual(17);
        expect(calculateTipPercent(86, 9)).toEqual(10);
        expect(calculateTipPercent(240, 17)).toEqual(7);
    });


    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
    });
});