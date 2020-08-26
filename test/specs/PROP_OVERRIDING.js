
const heroL1Text = $('.hero-links > .animated > .links-container > .category-nav-section > .page-title');
const masonaryHeading = $('.masonry-grid:nth-child(3) > .animated > .wrapper > .row > .col-xs-12:nth-child(2) > .lapelfoocmask > .masonry-grid-tile__inner > .masonry-grid-tile__heading');
const globalBrand = $('.global-brand-statement > .wrapper > .content > .text-container > .text-wrapper')
const cdpHero = $('.cdp-hero__content > .cdp-hero__heading');
const promoTile = $('#product-list > .product-list > .row > .lapelfoocmask:nth-child(7) > .col-xs-6');

const propOverridingPreviewLink = "./?at_preview_token=-C1i4kzOXEasTBeLS-uz7ZEzrFXbAKJ8AE2J_XD-VYU&at_preview_index=1_2&at_preview_listed_activities_only=true&at_preview_evaluate_as_true_audience_ids=1119637";

describe("Check for cookie", function() {
    it('should return a cookie for me', () => {
       browser.url(propOverridingPreviewLink);
        let cookies = browser.getNamedCookie("at_qa_mode");
        console.log(cookies);
    })
    }); 

describe("Home Page", function() {
    it("Test Prop Overriding on Home Page", function() {
        browser.url(propOverridingPreviewLink);
        browser.refresh();
        //expect(browser).toHaveTitle("athletic apparel + technical clothing | lululemon"); 
        expect(heroL1Text).toHaveText('Have a good Summer!!');
        expect(masonaryHeading).toHaveText('Masonry-Title-1-1.');
        expect(globalBrand).toHaveTextContaining('PEPS wrote this');
    });
}); 

describe("CDP Page", function() {
    it("Test Prop Overriding on CDP Page", function() {
        browser.url("./c/womens-leggings/_/N-8s6?mnid=mn;en-US-JSON;women;leggings");
        expect(cdpHero).toHaveText("All forecasts call for rain.");
        expect(promoTile).toHaveTextContaining('QA PASS');
    });
}); 



