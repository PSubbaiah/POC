const countryField = $('div > .fieldGrid___1NV6V > .lapel-pass-through > label > .displayLabel-2qFt2');
const checkoutFormfieldReoderURL = "&at_preview_token=-C1i4kzOXEasTBeLS-uz7ZEzrFXbAKJ8AE2J_XD-VYU&at_preview_index=1_8&at_preview_listed_activities_only=true&at_preview_evaluate_as_true_audience_ids=1119637";
const addItemToCart = "https://shop.lululemon.com/p/women-pants/Align-Pant-2/_/prod2020012?color=43909&sz=6";

//Add an item to cart and checkout
describe("Checkout Form Fields Test", function(){
    it("Add Item to Cart and Checkout", function(){
        browser.url(addItemToCart + checkoutFormfieldReoderURL);
        $('.col-md-6 > #pdp-summary-wrapper > .purchase-attributes > .purchase-method > .button-1xp0M').click();
        $('.col-xs-12 > .cta-container > .button-1xp0M > .iconButtonContent-2Y823 > span').click();
        expect(countryField).toHaveText("Country");
    });
});
  