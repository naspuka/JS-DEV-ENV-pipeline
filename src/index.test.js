import {expect} from 'chai';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
import fs from 'fs'

describe('My first ever test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});


describe('index.html', () => {
    it('should say hello', (done)=>{
        const index = { }
        JSDOM.fromFile('./src/index.html', index).then( dom => {
            const h1 = dom.window.document.querySelector("h1").textContent;
            expect(h1).to.equal("Hello World!!");
            done();
        }).catch(done)
    })
})
