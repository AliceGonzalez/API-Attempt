"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import stylesheets
require("./style.css");
var form = document.querySelector('#defineform');
// https://www.sohamkamani.com/typescript/rest-http-api-call/
function getDefineWord(word) {
    // const headers: Headers = new Headers()
    // headers.set('Content-Type', 'application/json')
    // headers.set('Accept', 'application/json')
    // headers.set('X-Custom-Header', 'Test')
    // Create the request object, which will be a RequestInfo type. 
    // Here, we will pass in the URL as well as the options object as parameters.
    var request = new Request("https://api.dictionaryapi.dev/api/v2/entries/en/".concat(word), {
        method: 'GET',
        // headers: headers
    });
    return fetch(request)
        .then(function (res) { return res.json(); })
        .then(function (res) {
        return res;
    });
}
form.onsubmit = function () {
    var formData = new FormData(form);
    console.log(formData);
    var text = formData.get('defineword');
    console.log(text);
    var word = getDefineWord(text);
    // const test: HTMLFormElement = document.querySelector('#test') as HTMLFormElement;
    // test.innerText = word;
    return false; // prevent reload
};
