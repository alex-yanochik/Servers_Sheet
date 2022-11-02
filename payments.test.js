describe("Payments test", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('should not add a new payment with empty input', function () {
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
      });


    it('should not create an empty payment', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let createdPayment = createCurPayment();
    
        expect(createdPayment).toEqual(undefined);
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
})
});


