const headerBanner = $('.header-banner > .wrapper > .promo-banner > .promo-wrapper > .headline-text');

const componentPreviewLink = "./?at_preview_token=-C1i4kzOXEasTBeLS-uz7ZEzrFXbAKJ8AE2J_XD-VYU&at_preview_index=1_2&at_preview_listed_activities_only=true&at_preview_evaluate_as_true_audience_ids=1119637";

describe("Home Page", function() {
    it("Test component Overriding", function() {
        browser.url(componentPreviewLink);
        browser.refresh();
        expect(browser).toHaveTitle("athletic apparel + technical clothing | lululemon"); 
        expect(headerBanner).toHaveText('This is interleaved from another repo');
        
    });
}); 

describe("Home Page", function() {
it('should listen on network events', () => {
    browser.url('https://www.google.com')
    browser.cdp('Network', 'enable')
    browser.on('Network.responseReceived', (params) => {
        console.log(`Loaded ${params.response.url}`)
    })
});
});