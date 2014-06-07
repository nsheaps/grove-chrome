window.onload = function() {
    chrome.extension.onConnect.addListener(function(port) {
        console.assert(port.name == "grove-notification");
        port.onMessage.addListener(function(msg) {
            // Show desktop notification
            var notification = webkitNotifications.createNotification(
                msg.icon,
                msg.title,
                msg.body
            );
            notification.show();
            notification.ondisplay = function() {
                setTimeout(function(){notification.cancel()}, 4000);
            }
        });
    });

    var notification = webkitNotifications.createNotification(
                msg.icon,
                msg.title,
                msg.body
            );
    notification.show();
};


// chrome.app.runtime.onLaunched.addListener(function() {
//   // Center window on screen.
//   var screenWidth = screen.availWidth;
//   var screenHeight = screen.availHeight;
//   var width = 500;
//   var height = 300;

//   chrome.app.window.create('background.html', {
//     id: "helloWorldID",
//     bounds: {
//       width: width,
//       height: height,
//       left: Math.round((screenWidth-width)/2),
//       top: Math.round((screenHeight-height)/2)
//     }
//   });
// });