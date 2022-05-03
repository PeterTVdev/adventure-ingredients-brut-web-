class Robes {
    constructor() {
        this.imgLoader = [];
        this.sprRobe = [];

        this.equipedCurrent = null;

        this.isStart = false;
    }

    load(pLoader) {
        this.imgLoader["ROBE_1"] = pLoader.getLoadImage("images/robe_1.png");
        this.imgLoader["ROBE_2"] = pLoader.getLoadImage("images/robe_2.png");
        this.imgLoader["ROBE_3"] = pLoader.getLoadImage("images/robe_3.png");
        this.imgLoader["ROBE_4"] = pLoader.getLoadImage("images/robe_4.png");
        this.imgLoader["ROBE_5"] = pLoader.getLoadImage("images/robe_5.png");
        this.imgLoader["ROBE_6"] = pLoader.getLoadImage("images/robe_6.png");
        this.imgLoader["ROBE_7"] = pLoader.getLoadImage("images/robe_7.png");
        this.imgLoader["ROBE_8"] = pLoader.getLoadImage("images/robe_8.png");

        //Dessine les robes du hero
        this.sprRobe[0] = new Sprite(this.imgLoader["ROBE_1"]);
        this.sprRobe[0].setTileSheet(46, 50);
        this.sprRobe[0].addAnimation("IDLE", [24, 25, 26, 27, 28, 29, 30, 31], 0.1);
        this.sprRobe[0].addAnimation("FIGHT", [10, 11, 12, 13], 0.1, false);
        this.sprRobe[0].startAnimation("IDLE");

        this.sprRobe[1] = new Sprite(this.imgLoader["ROBE_2"]);
        this.sprRobe[1].setTileSheet(46, 50);
        this.sprRobe[1].addAnimation("IDLE", [24, 25, 26, 27, 28, 29, 30, 31], 0.1);
        this.sprRobe[1].addAnimation("FIGHT", [10, 11, 12, 13], 0.1, false);
        this.sprRobe[1].startAnimation("IDLE");

        this.sprRobe[2] = new Sprite(this.imgLoader["ROBE_3"]);
        this.sprRobe[2].setTileSheet(46, 50);
        this.sprRobe[2].addAnimation("IDLE", [24, 25, 26, 27, 28, 29, 30, 31], 0.1);
        this.sprRobe[2].addAnimation("FIGHT", [10, 11, 12, 13], 0.1, false);
        this.sprRobe[2].startAnimation("IDLE");

        this.sprRobe[3] = new Sprite(this.imgLoader["ROBE_4"]);
        this.sprRobe[3].setTileSheet(46, 50);
        this.sprRobe[3].addAnimation("IDLE", [24, 25, 26, 27, 28, 29, 30, 31], 0.1);
        this.sprRobe[3].addAnimation("FIGHT", [10, 11, 12, 13], 0.1, false);
        this.sprRobe[3].startAnimation("IDLE");

        this.sprRobe[4] = new Sprite(this.imgLoader["ROBE_5"]);
        this.sprRobe[4].setTileSheet(46, 50);
        this.sprRobe[4].addAnimation("IDLE", [24, 25, 26, 27, 28, 29, 30, 31], 0.1);
        this.sprRobe[4].addAnimation("FIGHT", [10, 11, 12, 13], 0.1, false);
        this.sprRobe[4].startAnimation("IDLE");

        this.sprRobe[5] = new Sprite(this.imgLoader["ROBE_6"]);
        this.sprRobe[5].setTileSheet(46, 50);
        this.sprRobe[5].addAnimation("IDLE", [24, 25, 26, 27, 28, 29, 30, 31], 0.1);
        this.sprRobe[5].addAnimation("FIGHT", [10, 11, 12, 13], 0.1, false);
        this.sprRobe[5].startAnimation("IDLE");

        this.sprRobe[6] = new Sprite(this.imgLoader["ROBE_7"]);
        this.sprRobe[6].setTileSheet(46, 50);
        this.sprRobe[6].addAnimation("IDLE", [24, 25, 26, 27, 28, 29, 30, 31], 0.1);
        this.sprRobe[6].addAnimation("FIGHT", [10, 11, 12, 13], 0.1, false);
        this.sprRobe[6].startAnimation("IDLE");

        this.sprRobe[7] = new Sprite(this.imgLoader["ROBE_8"]);
        this.sprRobe[7].setTileSheet(46, 50);
        this.sprRobe[7].addAnimation("IDLE", [24, 25, 26, 27, 28, 29, 30, 31], 0.1);
        this.sprRobe[7].addAnimation("FIGHT", [10, 11, 12, 13], 0.1, false);
        this.sprRobe[7].startAnimation("IDLE");
    }

    start_Pos(pLevel) {
        if (pLevel == 1) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].x = 1*TUILE_WIDTH;
                this.sprRobe[i].y = 3*TUILE_HEIGHT;   
            }
        }
        else if (pLevel == 2) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].x = 1*TUILE_WIDTH;
                this.sprRobe[i].y = 1*TUILE_HEIGHT;   
            }
        }
        else if (pLevel == 3) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].x = 1*TUILE_WIDTH;
                this.sprRobe[i].y = 1*TUILE_HEIGHT;   
            }
        }
        else if (pLevel == 4) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].x = 5*TUILE_WIDTH;
                this.sprRobe[i].y = 1*TUILE_HEIGHT;   
            }
        }
        else if (pLevel == 5) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].x = 5*TUILE_WIDTH;
                this.sprRobe[i].y = 1*TUILE_HEIGHT;   
            }
        }
        else if (pLevel == 6) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].x = 5*TUILE_WIDTH;
                this.sprRobe[i].y = 1*TUILE_HEIGHT;   
            }
        }
        else if (pLevel == 7) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].x = 1*TUILE_WIDTH;
                this.sprRobe[i].y = 3*TUILE_HEIGHT;   
            }
        }
        else if (pLevel == 8) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].x = 1*TUILE_WIDTH;
                this.sprRobe[i].y = 3*TUILE_HEIGHT;   
            }
        }
        else if (pLevel == 9) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].x = 1*TUILE_WIDTH;
                this.sprRobe[i].y = 3*TUILE_HEIGHT;   
            }
        }
        else if (pLevel == 10) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].x = 1*TUILE_WIDTH;
                this.sprRobe[i].y = 3*TUILE_HEIGHT;   
            }
        }

        this.isStart = true;
    }

    move_robes() {
        if (robe_right) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].x += TUILE_WIDTH;
            }
            robe_right = false;
        } 

        if (robe_down) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].y += TUILE_HEIGHT;
            }
            robe_down = false;
        } 

        if (robe_left) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].x -= TUILE_WIDTH;
            }
            robe_left = false;
        } 

        if (robe_up) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].y -= TUILE_HEIGHT;
            }
            robe_up = false;
        } 
    }

    update(dt, pLevel) {
        if (robe_fight) {
            for (let i = 0; i < this.sprRobe.length; i++) {
                this.sprRobe[i].startAnimation("FIGHT");
            }
        }
        //Si l'animation de fight s'arrete 
        for (let i = 0; i < this.sprRobe.length; i++) {
            if (this.sprRobe[i].currentAnimation.end) {
                this.sprRobe[i].startAnimation("IDLE");
                robe_fight = false;
            }
        }
        
        this.move_robes();
        if (!this.isStart) {
            this.start_Pos(pLevel);
        }
        for (let i = 0; i < this.sprRobe.length; i++) {
            this.sprRobe[i].update(dt);
        }
    }

    draw(pCtx) {
        if (this.equipedCurrent != null) {
             this.sprRobe[this.equipedCurrent].draw(pCtx);
        }
    }
}