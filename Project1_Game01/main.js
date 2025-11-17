import { makeButtons } from "./scenes/buttons.js";
import { makeElevator } from "./scenes/elevator.js";
import { makeMenu } from "./scenes/menu.js";

new p5((p) => {
    const scenes = ["menu", "elevator", "buttons"];
    const items = ["pointer", "gun", "camera"];
    let currentScene = "menu";
    let currentItem = "pointer";
    function setScene(name){
        if (!scenes.includes(name)) {return};
        currentScene = name;

        if (currentScene != "menu"){
            // document.body.classList.add("hide-cursor");
        } else {
            document.body.classList.remove("hide-cursor");
        }
    }
    function setItem(item){
        if(!items.includes(item)) {return};
        currentItem = item;
    }
    const menu = makeMenu(p);
    const elevator = makeElevator(p);
    const buttons = makeButtons(p);
    
    p.preload = () => {
        menu.load();
        elevator.load();
        buttons.load();
    };
    p.frameRate(24);
    p.setup = () => {
        const canvasEl = p.createCanvas(1920, 1080, document.getElementById("game"));
        p.pixelDensity(3);
        canvasEl.canvas.style = "";
        p.noSmooth();
        menu.button(() => currentScene, setScene);
        elevator.button(() => currentScene, setScene);
    };

    p.draw = () => {
        switch (currentScene) {
            case "menu":
                menu.draw();
                break;
            case "elevator" :
                elevator.draw(currentItem);
                break;
            case "buttons" :
                buttons.draw(currentItem);
                break;
            default:
        }
    };

    p.keyPressed = (keyEvent) => {
        if (keyEvent.key === "Enter" && currentScene === "menu") {
            setScene("elevator");
        } else if (keyEvent.key === "g" && currentScene === "elevator") {
            setItem("gun");
        } else if (keyEvent.key === "c" && currentScene === "elevator") {
            setItem("camera");
        } else if (keyEvent.key === "p" && currentScene === "elevator") {
            setItem("pointer");
        }
    };
    
    p.keyReleased = () => {

    };
});
