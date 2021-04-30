(function () {
var power = document.createElement("a");
power.href = "http://www.btoe.cn";
power.innerHTML = '动力无限'
power.target = '_blank'
var currentScript = document.currentScript || document.scripts[document.scripts.length - 1];
var para = (currentScript.src.match(/[?&]color=([^&]*)/i) || ["", ""])[1];
currentScript.parentNode.insertBefore(power, currentScript);
})();
