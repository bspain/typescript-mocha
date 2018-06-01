import * as webdriver from 'selenium-webdriver';
import * as fs from 'fs';
import { should } from 'chai';

should();

describe('Selenium Demo Test Suite', () =>
{
    it('should automate Firefox browser', (done) => 
    {
        let driver = new webdriver.Builder().forBrowser('firefox')
            .build();
        driver.get('https://www.bing.com')
        .then(() =>
        {
            return driver.getCurrentUrl();
        })
        .then((currentUrl: string) => 
        {
            currentUrl.should.contain(`www.bing.com`, `Expected current URL to contain www.bing.com, Results: ${currentUrl}`);
            done();
        })
    })
});