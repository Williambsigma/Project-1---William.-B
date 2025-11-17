import { makeCharacter } from "../entities/character.js";

export function makeElevator(p) {
    return {
        player: makeCharacter(p, 0, 0),
        elevator: null,
        doorAnimFrames: null,
        doorAnimIndex: 0,
        load() {
            this.player.load();
            this.doorAnimFrames = [];
            for (let i=1; i<=12; i++) {
                let frame = i.toString().padStart(4, "0");
                this.doorAnimFrames.push(p.loadImage(`/Project1_Game01/Images/Door_Anim/Elevator_Door_Anim${frame}.png`));
            }
        },
        button(getScene, setScene) {
            const div = document.createElement("div");
            div.id = "ElevatorButtons";
            console.log("CursorX: "+this.player.cursorX);
            document.addEventListener("click", () => {
                console.log("CursorX: "+this.player.cursorX);
                console.log("Elements from point: "+this.player.click());
                if (this.player.click().includes("object HTMLDivElement")) {
                    console.log("CursorX: "+this.player.cursorX);
                    // console.log("Buttons Button pressed!");
                    // if (getScene() !== "elevator") {return};
                    // console.log("Buttons");
                    // setScene("buttons");
                }
            });
            document.body.appendChild(div);
        },
        draw(item) {
            p.clear();
            p.image(this.doorAnimFrames[Math.floor(this.doorAnimIndex)], -0.04*p.mouseX, -0.04*p.mouseY, 1920*1.04, 1080*1.04);
            if (this.doorAnimIndex<this.doorAnimFrames.length - 1){
                this.doorAnimIndex+=0.35;
            }
            this.player.draw(item);
        },

    };
}