let history = []
let step

let canvas = new fabric.Canvas("canvas", {
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: "transparent",
    isDrawingMode: true
});

history.push(JSON.stringify(canvas));
step = 0

canvas.on("object:added", () => {
    if (step !== history.length-1) history = history.slice(0, step + 1);
    history.push(JSON.stringify(canvas));
    step++;
    console.log(step);
});

document.addEventListener("keypress", event => {
    console.log(event.key);
    if (event.ctrlKey) {
        if (`${event.key}` === "" && step) {
            const content = history[step];
            canvas.loadFromJSON(content, () => canvas.renderAll());
            step--;
            console.log(step);
        }
    }
});