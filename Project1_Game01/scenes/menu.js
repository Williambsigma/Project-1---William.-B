export function makeMenu(p){
    return {
        startScreenImgRef: null,
        startTextImgRef: null,
        load() {
            this.startScreenImgRef = p.loadImage("/Project1_Game01/Images/MainMenu_Test.png");
            this.startTextImgRef = p.loadImage("/Project1_Game01/Images/PlayButton_Test.png");
        },
        button(getScene, setScene) {
            const div = document.createElement("div");
            div.id = "PlayButton";
            div.addEventListener("click", () => {
                console.log("Play Button Pressed!");
                if (getScene() !== "menu") {return};
                console.log("Scene = Elevator");
                setScene("elevator");
            });
            document.body.appendChild(div);
        },
        draw() {
            p.clear();
            p.image(this.startScreenImgRef, 0, 0);
            p.image(this.startTextImgRef, 960 - 473, 560);
        }
    }
}