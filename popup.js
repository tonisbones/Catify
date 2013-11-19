chrome.tabs.query({'active': true}, function(tabs) {
    $("img").each(function() {
        $(this).attributes('src', 'images/kitten01.png');
    });
});
