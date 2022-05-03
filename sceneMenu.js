class SceneMenu {
    constructor() {
        this.imageLoader = [];
        this.sprFond = null;
        this.decors = null;
    }

    load(pLoader) {
        this.imageLoader[0] = pLoader.getLoadImage("images/menu_web.png");
        this.imageLoader[1] = pLoader.getLoadImage("images/map.png");

        this.sprFond = new Sprite(this.imageLoader[0]);
        this.decors = new Sprite(this.imageLoader[1]); 
    }

    update(dt) {

    }

    draw(pCtx) {
        if (this.decors != null) {
            this.decors.draw(pCtx);  
        }
        if (this.sprFond != null) {
            this.sprFond.draw(pCtx);
        }
        DrawText(pCtx, "Click Here !", canvas.width/2, canvas.height/2);
    }
}