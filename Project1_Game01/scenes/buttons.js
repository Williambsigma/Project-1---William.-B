export function makeButtons(p) {
    return {
        toButtons_openAnimFrames: null,
        toButtons_openAnimIndex: 0,
        load() {
            this.toButtons_openAnimFrames = [];
            for (let i=1; i<=24; i++) {
                let frame = i.toString().padStart(4, "0");
                this.toButtons_openAnimFrames.push(p.loadImage(`/Project1_Game01/Images/ToDoor_Open/${frame}.png`));
            }
        },
        setup(){

        },
        draw() {
            p.clear();
            p.image(this.toButtons_openAnimFrames[Math.floor(this.toButtons_openAnimIndex)], -0.04*p.mouseX, -0.04*p.mouseY, 1920*1.04, 1080*1.04);
            if (this.toButtons_openAnimIndex<this.toButtons_openAnimFrames.length - 1){
                this.toButtons_openAnimIndex+=0.35;
            }
        }
    }
}