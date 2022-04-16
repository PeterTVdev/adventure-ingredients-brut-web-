class SceneMenu {
    constructor() {
        this.imageLoader = null;
        this.sprFond = null;
        this.decors = [];
    }

    load(pLoader) {
        this.imageLoader = pLoader.getLoadImage("images/menu_web.png");
        this.sprFond = new Sprite(this.imageLoader);

        this.decors[0] = pLoader.getLoadImage("images/map.png");
        this.decors[1] = new Sprite(this.decors[0]); 
    }

    update(dt) {

    }

    draw(pCtx) {
        this.decors[1].draw(pCtx);
        this.sprFond.draw(pCtx);
        DrawText(pCtx, "Click Here !", canvas.width/2, canvas.height/2);
    }
}