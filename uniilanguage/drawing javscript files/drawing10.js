const canvas2 = document.getElementById("canvas")
const canvas = canvas2.getContext('2d');
var timer = 10

canvas2.style = "position: absolute; top: 25%; left: 24%; right: 0px; bottom: 0px; margin: 0px; border: 5px solid rgba(0, 0, 0, 0.2); border-radius: 30px;";

window.addEventListener("resize", resize)
resize()
let mousePos = {
    x:0,
    y:0
}

window.addEventListener("mousemove", draw)
window.addEventListener("mousedown", mousePosition)
window.addEventListener("mouseenter", mousePosition)

function mousePosition(e){
    mousePos.x = e.offsetX;
    mousePos.y = e.offsetY;
}

function resize(){
    canvas.canvas.width = 1000
    canvas.canvas.height = 500

}

function draw(e){
    if (e.buttons !=1){
        return;
    }
	canvas.beginPath();
	canvas.lineCap = "round"
	canvas.lineWidth = 5
	canvas.moveTo(mousePos.x, mousePos.y)
	mousePosition(e)
	canvas.lineTo(mousePos.x, mousePos.y)
	canvas.stroke()
}

var pen_color = randomColor();
canvas.strokeStyle = pen_color;

function randomColor(){
    var colors = ["#3B99F2", "#5EAE66", "#5F45C9"]
    var color = colors[Math.floor(Math.random()*colors.length)];
    localStorage.setItem('color', color)
    return color
}

function onSave(){
    canvas2.toBlob((blob) => {
        console.log(blob)
        const timestamp = Date.now().toString()
        const new_element = document.createElement('a')
        document.body.append(new_element)
        new_element.download = "UniiLang-" + timestamp + ".png"
        new_element.href = URL.createObjectURL(blob)
        new_element.click()
        new_element.remove()
    })
}

function timerFunction(){
    timer--;
    if (timer ==0){
		var blackbg = document.getElementById("myPopupBlackBg");
		blackbg.style.visibility = "Visible";
		var popupbg = document.getElementById("myPopupBg");
		popupbg.style.visibility = "Visible";
		var popup1 = document.getElementById("myPopup1");
		popup1.style.visibility = "Visible";
		var popup2 = document.getElementById("myPopup2");
		popup2.style.visibility = "Visible";
		window.removeEventListener("mousemove", draw)
        //if (window.confirm("Would you like to save the painting?")){
        //    onSave()
        //}
        //if (window.confirm("Ready to move onto the 30 second round?")){
        //    window.location.href = "../src/Drawing_30_sec.html?prompt=" + previous;
        //}
    }
}

document.querySelector("#save").addEventListener('click', onSave)

setInterval(timerFunction, 1000)
