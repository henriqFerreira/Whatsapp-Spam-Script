const event = new InputEvent('input', {bubbles: true});
const textBox = document.querySelector("#main div._13NKt");

function generateString(length) {
    var string = "";
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()-=[];.,çÇ|/?'";
    var charsetLength = charset.length;
    
    for (var i = 0; i < length; i++) {
        string += charset.charAt(Math.floor(Math.random() * charsetLength));
    }
    return string;
}

function sendString() {
    var msg = 0;
    var msgCount = 10;
    
    var sendEachMessage = setInterval(() => {
        textBox.textContent = generateString(Math.floor(Math.random() * 100));
        textBox.dispatchEvent(event);
        document.querySelector("#main span[data-testid=send]").click();

        if (++msg === msgCount) {
            window.clearInterval(sendEachMessage);
        }
    }, 250);
}

sendString();