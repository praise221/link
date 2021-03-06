
describe('Test jsdom', function() {
  it('jsdom 1', function(){
    var jsdom = require("jsdom").jsdom;
    jsdom.env({
        url: "http://localhost:8080/",
        //html: body, //"<!doctype html><html></html>",
        scripts: ["http://code.jquery.com/jquery.js","http://localhost:8080/bundle.js"],
        // http://localhost:8080/bundle.js 偷懶的做法。
        // 正確做法：https://github.com/tmpvar/jsdom jsdom.jsdom 那段
        done: function (errors, window) {
            var $ = window.$;
               //console.log(window.document.documentElement.outerHTML); //印出完整的html
               //console.log($("#app").html()); //jquery 寫法 請查 jquery 或是 chrome 的copy 
               //console.log($("#app").text()); //jquery 寫法 請查 jquery 或是 chrome 的copy 
               //console.log($("#app").val()); //jquery 寫法 請查 jquery 或是 chrome 的copy 
               //https://www.w3schools.com/jquery/ 參考網頁
            }
    });
  });
  it('jsdom 2', function(){
    var jsdom = require("jsdom").jsdom;
    jsdom.env({
        url: "http://localhost:8080/",
        done: function (errors, window) {
               console.log(window.document.evaluate('//*[@id="app"]/div/table/tbody/tr[1]/td[1]', window.document,
          null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent);
          
        },features: {  
            // 正確做法：https://github.com/tmpvar/jsdom jsdom.jsdom 那段
            FetchExternalResources: ["script"],
            ProcessExternalResources: ["script"],  // 這三段的意思請去查上面給的網頁。
            SkipExternalResources: false
        }
    });
  });

});

