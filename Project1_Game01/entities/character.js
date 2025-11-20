export function makeCharacter(p) {
    return {
        pointerHand: null,
        gunHand: null,
        cameraHand: null,
        cursorX: 0,
        cursorY: 0,
        cursorLoc: null,
        newCursor: null,
        load() {
            this.pointerHand = p.loadImage("/Project1_Game01/Images/Hands/Pointer_Hands.png");
            this.gunHand = p.loadImage("/Project1_Game01/Images/Hands/Gun_Hands.png");
            this.cameraHand = p.loadImage("/Project1_Game01/Images/Hands/Camera_Hands.png");
        },
        click() {
            return document.elementsFromPoint(p.lerp(this.cursorX, targetX, 0.15), p.lerp(this.cursorY, targetY, 0.15));
        },
        draw(item) {
            let targetX, targetY;
            if (item === "pointer"){
                targetX = p.constrain(p.mouseX, 1050, 1650);
                targetY = p.constrain(p.mouseY, 460, 960);
                p.image(this.pointerHand, this.cursorX-1050, this.cursorY - 460);
                this.newCursor = p.circle(this.cursorX, this.cursorY, 50);
            } else if (item === "gun"){
                targetX = p.constrain(p.mouseX, 800, 1080);
                targetY = p.constrain(p.mouseY, 360, 960);
                p.image(this.gunHand, this.cursorX-800, this.cursorY - 510);
            } else if (item === "camera"){
                targetX = p.constrain(p.mouseX, 800, 1120);
                targetY = p.constrain(p.mouseY, 540, 880);
                p.image(this.cameraHand, this.cursorX-960, this.cursorY - 540);
            }

            this.cursorX = p.lerp(this.cursorX, targetX, 0.15);
            this.cursorY = p.lerp(this.cursorY, targetY, 0.15);
        }
    }
}