const canvas2 = document.getElementById("canvas")
const canvas = canvas2.getContext('2d');
var timer = 60

canvas2.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid black";

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
    canvas.strokeStyle = "#111"
    canvas.lineWidth = 5
    canvas.moveTo(mousePos.x, mousePos.y)
    mousePosition(e)
    canvas.lineTo(mousePos.x, mousePos.y)
    canvas.stroke()
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
        if (window.confirm("Would you like to save the painting?")){
            onSave()
            window.location.href = "final.html";
        }
        else{
            window.location.href = "final.html";
        }
        
    }
}

document.querySelector("#save").addEventListener('click', onSave)

setInterval(timerFunction, 1000)
