import * as webdriver from 'selenium-webdriver';
import * as fs from 'fs';
import { should } from 'chai';
import DoesFileExistOnEnvironmentPath from '../src/EnvPathSearcher';

should();

describe('Selenium Demo Test Suite', () =>
{
    before(function() /* Use of function (vs arrow () =>) is necessary to preserve 'this' context */
    {
        // Confirm geckodriver
        if (!(DoesFileExistOnEnvironmentPath('geckodriver.exe')))
        {
            console.log("Skipping based on absense of geckodriver.exe");
            this.skip();
        }
    });

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