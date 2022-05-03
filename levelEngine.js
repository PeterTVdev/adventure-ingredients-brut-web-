const TUILE_WIDTH = 75;
const TUILE_HEIGHT = 75;
const MAP_WIDTH = 14;
const MAP_HEIGHT = 8;

let stop_right = false;
let stop_down = false;
let stop_left = false;
let stop_up = false;

let robe_left = false;
let robe_up = false;
let robe_right = false;
let robe_down = false;
let robe_fight = false;

let Map = [];

//Charge le niveau 1
let niveau1 = new Level_1();
//Charge le niveau 2
let niveau2 = new Level_2();
//Charge le niveau 3
let niveau3 = new Level_3();
//Charge le niveau 4
let niveau4 = new Level_4();
//Charge le niveau 5
let niveau5 = new Level_5();
//Charge le niveau 6
let niveau6 = new Level_6();
//Charge le niveau 7
let niveau7 = new Level_7();
//Charge le niveau 8
let niveau8 = new Level_8();
//Charge le niveau 9
let niveau9 = new Level_9();
//Charge le niveau 10
let niveau10 = new Level_10();

class LevelManager {
    constructor() {
        this.imgLoader = [];
        this.Tuiles = [];

       // this.Map = [];

        this.Level = 0;
    }

    load(pLoader) {
        niveau1.load(pLoader);
        niveau2.load(pLoader);
        niveau3.load(pLoader);
        niveau4.load(pLoader);
        niveau5.load(pLoader);
        niveau6.load(pLoader);
        niveau7.load(pLoader);
        niveau8.load(pLoader);
        niveau9.load(pLoader);
        niveau10.load(pLoader);

        this.imgLoader[0] = pLoader.getLoadImage("images/tuile_brique.png");
        this.imgLoader[1] = pLoader.getLoadImage("images/tuile_terre.png");

        this.Tuiles[0] = new Sprite(this.imgLoader[0]);
        this.Tuiles[1] = new Sprite(this.imgLoader[1]);

        //Chargement de la map
        //level 1
        Map[0] = [];
        Map[0][0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[0][1] = [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0];
        Map[0][2] = [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0];
        Map[0][3] = [0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0];
        Map[0][4] = [0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0];
        Map[0][5] = [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0];
        Map[0][6] = [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0];
        Map[0][7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        //level 2
        Map[1] = [];
        Map[1][0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[1][1] = [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0];
        Map[1][2] = [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0];
        Map[1][3] = [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0];
        Map[1][4] = [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0];
        Map[1][5] = [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0];
        Map[1][6] = [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0];
        Map[1][7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        //level 3
        Map[2] = [];
        Map[2][0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[2][1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
        Map[2][2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        Map[2][3] = [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0];
        Map[2][4] = [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0];
        Map[2][5] = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        Map[2][6] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
        Map[2][7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        //level 4
        Map[3] = [];
        Map[3][0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[3][1] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[3][2] = [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[3][3] = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        Map[3][4] = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        Map[3][5] = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        Map[3][6] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
        Map[3][7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        //level 5
        Map[4] = [];
        Map[4][0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[4][1] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
        Map[4][2] = [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0];
        Map[4][3] = [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0];
        Map[4][4] = [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0];
        Map[4][5] = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        Map[4][6] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
        Map[4][7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        //level 6
        Map[5] = [];
        Map[5][0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[5][1] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
        Map[5][2] = [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0];
        Map[5][3] = [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0];
        Map[5][4] = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0];
        Map[5][5] = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        Map[5][6] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
        Map[5][7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        //level 7
        Map[6] = [];
        Map[6][0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[6][1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[6][2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[6][3] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
        Map[6][4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[6][5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[6][6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[6][7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        //level 8
        Map[7] = [];
        Map[7][0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[7][1] = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];
        Map[7][2] = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
        Map[7][3] = [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0];
        Map[7][4] = [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0];
        Map[7][5] = [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0];
        Map[7][6] = [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0];
        Map[7][7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        //level 9
        Map[8] = [];
        Map[8][0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[8][1] = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
        Map[8][2] = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
        Map[8][3] = [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0];
        Map[8][4] = [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0];
        Map[8][5] = [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0];
        Map[8][6] = [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0];
        Map[8][7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        //level 10
        Map[9] = [];
        Map[9][0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[9][1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[9][2] = [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0];
        Map[9][3] = [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0];
        Map[9][4] = [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0];
        Map[9][5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[9][6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Map[9][7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    update(dt) {
        if (this.Level == 1) {
            niveau1.update(dt);
        }
        else if (this.Level == 2) {
            niveau2.update(dt);
        }
        else if (this.Level == 3) {
            niveau3.update(dt);
        }
        else if (this.Level == 4) {
            niveau4.update(dt);
        }
        else if (this.Level == 5) {
            niveau5.update(dt);
        }
        else if (this.Level == 6) {
            niveau6.update(dt);
        }
        else if (this.Level == 7) {
            niveau7.update(dt);
        }
        else if (this.Level == 8) {
            niveau8.update(dt);
        }
        else if (this.Level == 9) {
            niveau9.update(dt);
        }
        else if (this.Level == 10) {
            niveau10.update(dt);
        }
    }

    draw(pCtx) {
        for (let l = 0; l < MAP_HEIGHT; l++) {
            for (let c = 0; c < MAP_WIDTH; c++ ) {
                let id = Map[this.Level-1][l][c];
                let Tex = this.Tuiles[id];
                if (Tex != null) {
                    let x = c * TUILE_WIDTH;
                    let y = l * TUILE_HEIGHT;
                    Tex.x = x;
                    Tex.y = y;
                    Tex.draw(pCtx);
                }
            }
        }
        if (this.Level == 1) {
            niveau1.draw(pCtx);
        }
        else if (this.Level == 2) {
            niveau2.draw(pCtx);
        }
        else if (this.Level == 3) {
            niveau3.draw(pCtx);
        }
        else if (this.Level == 4) {
            niveau4.draw(pCtx);
        }
        else if (this.Level == 5) {
            niveau5.draw(pCtx);
        }
        else if (this.Level == 6) {
            niveau6.draw(pCtx);
        }
        else if (this.Level == 7) {
            niveau7.draw(pCtx);
        }
        else if (this.Level == 8) {
            niveau8.draw(pCtx);
        }
        else if (this.Level == 9) {
            niveau9.draw(pCtx);
        }
        else if (this.Level == 10) {
            niveau10.draw(pCtx);
        }
    }
}