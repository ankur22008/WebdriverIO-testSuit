
const { Given, When, Then ,setWorldConstructor} = require('cucumber');

var {defineSupportCode} = require('cucumber');

const { expect } = require('chai');
//let link = $('#Careers');
//import { multiremote } from 'webdriverio';



//const {browser} = require('webdriverio');



browser.element();


// class CustomWorld {
//     constructor() {
//         this.variable = 0
//     }
//
//     setTo(number) {

//         this.variable = number
//     }
//
//     incrementBy(number) {
//         this.variable += number
//     }
// }
//
// setWorldConstructor(CustomWorld)

// features/support/steps.js


// Given('a variable set to {int}', function(number) {
// // // //    // this.setTo(number)
// // // //     console.log('gg');
// // // // })
// // // //
// // // // When('I increment the variable by {int}', function(number) {
// // // //    // this.incrementBy(number)
// // // //     console.log('gg1');
// // // // })
// // // //
// // // // Then('the variable should contain {int}', function(number) {
// // // //    // expect(this.variable).to.eql(number)
// // // //
// // // //     console.log('gg2');
// // // // })


///// Step definitions /////
//
// use 'Given', 'When' and 'Then' to declare step definitions
//

Given('a variable set to {int}',  { wrapperOptions: { retry: 2 } }, (async (number) => {


        await browser.url("https://www.makemytrip.com");
   //
 //   await  browser.setValue('//input[@id="hp-widget__sfrom"]','Melbourne');
    await browser.element('//input[@id="hp-widget__sfrom"]').click();
    await browser.element('//input[@id="hp-widget__sfrom"]').addValue('Melbourne');
  //  await browser.pause(10000);
    await browser.pause(1000);
   await browser.element('//*[@id="js-filterOptins"]/div/div[1]/ul[1]/li[5]').click();




     //
  //  await browser.pause(2000);
   // await    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        //   })
        //  await
       //

    await browser.element('//input[@id="hp-widget__sTo"]').click();
        //
        // // this.setTo(number);
        //

    await  browser.setValue('//input[@id="hp-widget__sTo"]','New Delhi');
   //     await browser.element('//input[@id="hp-widget__sTo"]').addValue('New Delhi');

    await browser.element('//*[@id="js-switch__option"]/div[1]/label').click();
    })





// }).then(() => {
//
//     browser.url("https://www.makemytrip.com");
// }
//
//     ).then(() => {
//         browser.element('//input[@id="hp-widget__sfrom"]').click();
//
//     }).then(() => {
//         browser.element('//input[@id="hp-widget__sfrom"]').addValue('Melbourne');
//
//     })




);

When('I increment the variable by {int}',(async (number) => {


  //  browser.pause(1000);

   await browser.element('//*[@id="searchBtn"]').click();
//browser.waitUntil.isVisible('//*[@id="searchBtn"]');
    //browser.waitUntil.page
   // await browser.element('/html/body/page-view/div/div/div/div[5]/div/div/div[6]/span[2]').click();
  //  browser.pause(20000);


}));

///html/body/page-view/div/div/div/div[5]/div/div/div[6]/span[2]

When('I increment1 the variable by {int}',(async (number) => {

  //  $().waitForExist(ms, reverse, error);
   await  browser.pause(10000);

//    browser.element('*=SIGN').waitForExist(10000,false,'');
   //await browser.element("=*SIGN").waitForExist(10000,false,'')
   //await browser.element('/html/body/page-view/div/div/div/div[5]/div/div/div[6]/span[2]').waitForExist(50000,false,'');
  await  console.log('ankur hjhruhgreughreuhgeriuhgreiuhgruiehreigeriuhgiuehgruihgreiuheruiheriuhgeriuhgruirehugheiruhgeruihguhrgeuihgreuhreuiherguihgreuihgruihreuiherguihguirehgiureh');
  //  await browser.element('/html/body/page-view/div/div/div/div[5]/div/div/div[6]/span[2]').click();
    //  browser.pause(20000);
    await browser.element('/html/body/page-view/div/div/div/div[5]/div/div/div[6]/span[2]').click();
    await  browser.pause(10000);
}));
//
// When(/^I increment the abc$/, function() {
//     //this.incrementBy(number);
// });
// Then(/^the variable should contain (\d+)$/, function(number) {
//     expect(this.variable).to.eql(number)
// });
//
//     var CustomWorld = function() {
//         this.variable = 0;
//     };
//
//     // CustomWorld.prototype.setTo = function(number) {
//     //     this.variable = parseInt(number);
//     // };
//
//
//     CustomWorld.prototype.incrementBy = function(number) {
//         this.variable += parseInt(number);
//     };
//
//     setWorldConstructor(CustomWorld);


