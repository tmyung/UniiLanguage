const canvas2 = document.getElementById("canvas")
const canvas = canvas2.getContext('2d');
var timer = 10

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
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
}

function resize(){
    canvas.canvas.width = window.innerWidth
    canvas.canvas.height = window.innerHeight
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
        alert("COMPLETE")
    }
}

document.querySelector("#save").addEventListener('click', onSave)

setInterval(timerFunction, 1000)
