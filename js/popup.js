// chrome.tabs.getSelected(null, function (tab) {
//     chrome.tabs.sendMessage(tab.id, {
//         greeting: "hello"
//     }, function (response) {
//         console.log(response);
//     });
// });

// Regex-pattern to check URLs against. 
// It matches URLs like: http[s]://[...]stackoverflow.com[...]
var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;

// A function to use as callback
function doStuffWithDom(domContent) {
    console.log(domContent);
    var dom = '';
    $.each(domContent, function (index, ele) {
        dom += '<h3><a href="' + ele.link + '" target="_blank">' + ele.title + '</a></h3>';
    });
    $('#info').append(dom);
}

// When the browser-action button is clicked...
chrome.tabs.getSelected(null, function (tab) {
    // ...check the URL of the active tab against our pattern and...
    // ...if it matches, send a message specifying a callback too
    chrome.tabs.sendMessage(tab.id, {
        text: 'report_back'
    }, doStuffWithDom);
});