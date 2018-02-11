// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'report_back') {
        var data = [];

        $.each($('.post_item'), function (index, element) {
            var temp = $(element).find('a.titlelnk');
            data.push({
                link: $(element).find('a.titlelnk').attr('href'),
                title: $(element).find('a.titlelnk').text()
            });
        });

        sendResponse(data);
    }
});