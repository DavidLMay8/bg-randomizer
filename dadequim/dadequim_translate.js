function translate() {
    var textAreaString = document.getElementById("english_text").value
    textAreaString = textAreaString.replace(/\n\r/g,"<br />");
    textAreaString = textAreaString.replace(/\n/g,"<br />");
    document.getElementById("dadequim_display").innerHTML = textAreaString
    // document.getElementById("dadequim_display").innerHTML = document.getElementById("english_text").value
}