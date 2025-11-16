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
            this.elevator = p.loadImage("/Project1_Game01/Images/Elevator_Still.png");
        },
        button(currentScene, setScene) {
            const div = document.createElement("div");
            div.id = "ElevatorButtons";
            div.addEventListener("click", () => {
                if (currentScene !== "elevator") return;
                setScene("buttons");
            });
            document.body.appendChild(div);
        },
        draw(item) {
            p.clear();
            p.image(this.doorAnimFrames[Math.floor(this.doorAnimIndex)], -0.04*p.mouseX, -0.04*p.mouseY, 1920*1.04, 1080*1.04);
            // X: 0=0, 960=-96, 1920=-192
            if (this.doorAnimIndex<this.doorAnimFrames.length - 1){
                this.doorAnimIndex+=0.35;
            }
            this.player.draw(item);
        },

    };
}