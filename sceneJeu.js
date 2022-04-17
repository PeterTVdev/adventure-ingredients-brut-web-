let house = [];
house.isOpen = [];
house.isOpen["HOTEL"] = false;
house.isOpen["SHOP"] = false;
house.isOpen["ALCHIMIE"] = false;
house.isOpen["DONJON"] = false;
house.isOpen["MAIRIE"] = false;
house.alpha = 0.5;
house.alpha_etat = "1";
house.x = [];
house.x["HOTEL"] = 125;
house.x["SHOP"] = 135;
house.x["ALCHIMIE"] = 765;
house.x["DONJON"] = 740;
house.x["MAIRIE"] = 380;
house.y = [];
house.y["HOTEL"] = 2;
house.y["SHOP"] = 300;
house.y["ALCHIMIE"] = 300;
house.y["DONJON"] = 2;
house.y["MAIRIE"] = 180;

function animeRectHouse(dt) {
    if (house.alpha_etat == "1") {
        house.alpha -= 0.25*dt;
        if (house.alpha <= 0.3) {
            house.alpha = 0.3;
            house.alpha_etat = "2";
        }
    }
    else if (house.alpha_etat == "2") {
        house.alpha += 0.25*dt;
        if (house.alpha >= 0.5) {
            house.alpha = 0.5;
            house.alpha_etat = "1";
        }
    }
}

class SceneJeu {
    constructor() {
        // QG / monde / donjon 
        this.ecran_courrant = "QG";
        this.lstImgLoader = [];
        this.lstSprite = [];
        this.sprAnnule;
        this.sprWorldMap;

        this.sprSpawnQG = [];
        this.sprSpawnQG.current = 0;
        
        this.sprLevel = [];
        this.sprLevel.Blocked = [];
        this.sprLevel.Deblocked = [];
        this.sprLevel.Completed = [];
        this.sprLevel.animeCurrent = 0;
        this.sprLevel.etatCurrent = 0;

        this.level_current = [];
        this.level_current[0] = [];
        this.level_current[0].x = 570;
        this.level_current[0].y = 520;
        this.level_current[0].img = [];
        // bloquer / debloquer / valider
        this.level_current[0].etat = "debloquer";
        this.level_current[0].etatDraw = 1;

        this.level_current[1] = [];
        this.level_current[1].x = 685;
        this.level_current[1].y = 425;
        this.level_current[1].img = [];
        // bloquer / debloquer / valider
        this.level_current[1].etat = "bloquer";
        this.level_current[1].etatDraw = 0;

        this.level_current[2] = [];
        this.level_current[2].x = 570;
        this.level_current[2].y = 390;
        this.level_current[2].img = [];
        // bloquer / debloquer / valider
        this.level_current[2].etat = "bloquer";
        this.level_current[2].etatDraw = 0;

        this.level_current[3] = [];
        this.level_current[3].x = 650;
        this.level_current[3].y = 285;
        this.level_current[3].img = [];
        // bloquer / debloquer / valider
        this.level_current[3].etat = "bloquer";
        this.level_current[3].etatDraw = 0;

        this.level_current[4] = [];
        this.level_current[4].x = 490;
        this.level_current[4].y = 240;
        this.level_current[4].img = [];
        // bloquer / debloquer / valider
        this.level_current[4].etat = "bloquer";
        this.level_current[4].etatDraw = 0;

        this.level_current[5] = [];
        this.level_current[5].x = 610;
        this.level_current[5].y = 45;
        this.level_current[5].img = [];
        // bloquer / debloquer / valider
        this.level_current[5].etat = "bloquer";
        this.level_current[5].etatDraw = 0;

        this.level_current[6] = [];
        this.level_current[6].x = 235;
        this.level_current[6].y = 130;
        this.level_current[6].img = [];
        // bloquer / debloquer / valider
        this.level_current[6].etat = "bloquer";
        this.level_current[6].etatDraw = 0;

        this.level_current[7] = [];
        this.level_current[7].x = 305;
        this.level_current[7].y = 300;
        this.level_current[7].img = [];
        // bloquer / debloquer / valider
        this.level_current[7].etat = "bloquer";
        this.level_current[7].etatDraw = 0;

        this.level_current[8] = [];
        this.level_current[8].x = 380;
        this.level_current[8].y = 455;
        this.level_current[8].img = [];
        // bloquer / debloquer / valider
        this.level_current[8].etat = "bloquer";
        this.level_current[8].etatDraw = 0;

        this.level_current[9] = [];
        this.level_current[9].x = 285;
        this.level_current[9].y = 520;
        this.level_current[9].img = [];
        // bloquer / debloquer / valider
        this.level_current[9].etat = "bloquer";
        this.level_current[9].etatDraw = 0;
    }

    load(pLoader) {
        this.lstImgLoader["MAP_QG"] = pLoader.getLoadImage("images/map.png");
        this.lstImgLoader["ANNULE"] = pLoader.getLoadImage("images/anul.png");
        this.lstImgLoader["MAP_WORLD"] = pLoader.getLoadImage("images/map_world.png");
        this.lstImgLoader["CIRCLE_RED1"] = pLoader.getLoadImage("images/circle_red_1.png");
        this.lstImgLoader["CIRCLE_GREEN1"] = pLoader.getLoadImage("images/circle_green_1.png");
        this.lstImgLoader["CIRCLE_ORANGE1"] = pLoader.getLoadImage("images/circle_orange_1.png");
        this.lstImgLoader["CIRCLE_HOUSE1"] = pLoader.getLoadImage("images/circle_green_house_1.png");
        this.lstImgLoader["CIRCLE_HOUSE2"] = pLoader.getLoadImage("images/circle_green_house_2.png");
        this.lstImgLoader["CIRCLE_RED2"] = pLoader.getLoadImage("images/circle_red_2.png");
        this.lstImgLoader["CIRCLE_GREEN2"] = pLoader.getLoadImage("images/circle_green_2.png");
        this.lstImgLoader["CIRCLE_ORANGE2"] = pLoader.getLoadImage("images/circle_orange_2.png");
        this.lstSprite[0] = new Sprite(this.lstImgLoader["MAP_QG"]);
        this.sprAnnule = new Sprite(this.lstImgLoader["ANNULE"], 25, 25);
        this.sprWorldMap = new Sprite(this.lstImgLoader["MAP_WORLD"]);
        this.sprSpawnQG[0] = new Sprite(this.lstImgLoader["CIRCLE_HOUSE1"]);
        this.sprSpawnQG[1] = new Sprite(this.lstImgLoader["CIRCLE_HOUSE2"]);

        this.sprLevel.Blocked[0] = [];
        this.sprLevel.Blocked[0][0] = new Sprite(this.lstImgLoader["CIRCLE_RED1"]);
        this.sprLevel.Blocked[0][1] = new Sprite(this.lstImgLoader["CIRCLE_RED1"]);
        this.sprLevel.Blocked[0][2] = new Sprite(this.lstImgLoader["CIRCLE_RED1"]);
        this.sprLevel.Blocked[0][3] = new Sprite(this.lstImgLoader["CIRCLE_RED1"]);
        this.sprLevel.Blocked[0][4] = new Sprite(this.lstImgLoader["CIRCLE_RED1"]);
        this.sprLevel.Blocked[0][5] = new Sprite(this.lstImgLoader["CIRCLE_RED1"]);
        this.sprLevel.Blocked[0][6] = new Sprite(this.lstImgLoader["CIRCLE_RED1"]);
        this.sprLevel.Blocked[0][7] = new Sprite(this.lstImgLoader["CIRCLE_RED1"]);
        this.sprLevel.Blocked[0][8] = new Sprite(this.lstImgLoader["CIRCLE_RED1"]);
        this.sprLevel.Blocked[0][9] = new Sprite(this.lstImgLoader["CIRCLE_RED1"]);
        this.sprLevel.Deblocked[0] = [];
        this.sprLevel.Deblocked[0][0] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE1"]);
        this.sprLevel.Deblocked[0][1] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE1"]);
        this.sprLevel.Deblocked[0][2] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE1"]);
        this.sprLevel.Deblocked[0][3] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE1"]);
        this.sprLevel.Deblocked[0][4] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE1"]);
        this.sprLevel.Deblocked[0][5] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE1"]);
        this.sprLevel.Deblocked[0][6] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE1"]);
        this.sprLevel.Deblocked[0][7] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE1"]);
        this.sprLevel.Deblocked[0][8] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE1"]);
        this.sprLevel.Deblocked[0][9] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE1"]);
        this.sprLevel.Completed[0] = [];
        this.sprLevel.Completed[0][0] = new Sprite(this.lstImgLoader["CIRCLE_GREEN1"]);
        this.sprLevel.Completed[0][1] = new Sprite(this.lstImgLoader["CIRCLE_GREEN1"]);
        this.sprLevel.Completed[0][2] = new Sprite(this.lstImgLoader["CIRCLE_GREEN1"]);
        this.sprLevel.Completed[0][3] = new Sprite(this.lstImgLoader["CIRCLE_GREEN1"]);
        this.sprLevel.Completed[0][4] = new Sprite(this.lstImgLoader["CIRCLE_GREEN1"]);
        this.sprLevel.Completed[0][5] = new Sprite(this.lstImgLoader["CIRCLE_GREEN1"]);
        this.sprLevel.Completed[0][6] = new Sprite(this.lstImgLoader["CIRCLE_GREEN1"]);
        this.sprLevel.Completed[0][7] = new Sprite(this.lstImgLoader["CIRCLE_GREEN1"]);
        this.sprLevel.Completed[0][8] = new Sprite(this.lstImgLoader["CIRCLE_GREEN1"]);
        this.sprLevel.Completed[0][9] = new Sprite(this.lstImgLoader["CIRCLE_GREEN1"]);
        this.sprLevel.Blocked[1] = [];
        this.sprLevel.Blocked[1][0] = new Sprite(this.lstImgLoader["CIRCLE_RED2"]);
        this.sprLevel.Blocked[1][1] = new Sprite(this.lstImgLoader["CIRCLE_RED2"]);
        this.sprLevel.Blocked[1][2] = new Sprite(this.lstImgLoader["CIRCLE_RED2"]);
        this.sprLevel.Blocked[1][3] = new Sprite(this.lstImgLoader["CIRCLE_RED2"]);
        this.sprLevel.Blocked[1][4] = new Sprite(this.lstImgLoader["CIRCLE_RED2"]);
        this.sprLevel.Blocked[1][5] = new Sprite(this.lstImgLoader["CIRCLE_RED2"]);
        this.sprLevel.Blocked[1][6] = new Sprite(this.lstImgLoader["CIRCLE_RED2"]);
        this.sprLevel.Blocked[1][7] = new Sprite(this.lstImgLoader["CIRCLE_RED2"]);
        this.sprLevel.Blocked[1][8] = new Sprite(this.lstImgLoader["CIRCLE_RED2"]);
        this.sprLevel.Blocked[1][9] = new Sprite(this.lstImgLoader["CIRCLE_RED2"]);
        this.sprLevel.Deblocked[1] = [];
        this.sprLevel.Deblocked[1][0] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE2"]);
        this.sprLevel.Deblocked[1][1] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE2"]);
        this.sprLevel.Deblocked[1][2] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE2"]);
        this.sprLevel.Deblocked[1][3] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE2"]);
        this.sprLevel.Deblocked[1][4] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE2"]);
        this.sprLevel.Deblocked[1][5] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE2"]);
        this.sprLevel.Deblocked[1][6] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE2"]);
        this.sprLevel.Deblocked[1][7] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE2"]);
        this.sprLevel.Deblocked[1][8] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE2"]);
        this.sprLevel.Deblocked[1][9] = new Sprite(this.lstImgLoader["CIRCLE_ORANGE2"]);
        this.sprLevel.Completed[1] = [];
        this.sprLevel.Completed[1][0] = new Sprite(this.lstImgLoader["CIRCLE_GREEN2"]);
        this.sprLevel.Completed[1][1] = new Sprite(this.lstImgLoader["CIRCLE_GREEN2"]);
        this.sprLevel.Completed[1][2] = new Sprite(this.lstImgLoader["CIRCLE_GREEN2"]);
        this.sprLevel.Completed[1][3] = new Sprite(this.lstImgLoader["CIRCLE_GREEN2"]);
        this.sprLevel.Completed[1][4] = new Sprite(this.lstImgLoader["CIRCLE_GREEN2"]);
        this.sprLevel.Completed[1][5] = new Sprite(this.lstImgLoader["CIRCLE_GREEN2"]);
        this.sprLevel.Completed[1][6] = new Sprite(this.lstImgLoader["CIRCLE_GREEN2"]);
        this.sprLevel.Completed[1][7] = new Sprite(this.lstImgLoader["CIRCLE_GREEN2"]);
        this.sprLevel.Completed[1][8] = new Sprite(this.lstImgLoader["CIRCLE_GREEN2"]);
        this.sprLevel.Completed[1][9] = new Sprite(this.lstImgLoader["CIRCLE_GREEN2"]);

        this.level_current[0].img[0] = [];
        this.level_current[0].img[0][0] = this.sprLevel.Blocked[0][0];
        this.level_current[0].img[0][1] = this.sprLevel.Blocked[1][0];
        this.level_current[0].img[1] = [];
        this.level_current[0].img[1][0] = this.sprLevel.Deblocked[0][0];
        this.level_current[0].img[1][1] = this.sprLevel.Deblocked[1][0];
        this.level_current[0].img[2] = [];
        this.level_current[0].img[2][0] = this.sprLevel.Completed[0][0];
        this.level_current[0].img[2][1] = this.sprLevel.Completed[1][0];

        this.level_current[1].img[0] = [];
        this.level_current[1].img[0][0] = this.sprLevel.Blocked[0][1];
        this.level_current[1].img[0][1] = this.sprLevel.Blocked[1][1];
        this.level_current[1].img[1] = [];
        this.level_current[1].img[1][0] = this.sprLevel.Deblocked[0][1];
        this.level_current[1].img[1][1] = this.sprLevel.Deblocked[1][1];
        this.level_current[1].img[2] = [];
        this.level_current[1].img[2][0] = this.sprLevel.Completed[0][1];
        this.level_current[1].img[2][1] = this.sprLevel.Completed[1][1];

        this.level_current[2].img[0] = [];
        this.level_current[2].img[0][0] = this.sprLevel.Blocked[0][2];
        this.level_current[2].img[0][1] = this.sprLevel.Blocked[1][2];
        this.level_current[2].img[1] = [];
        this.level_current[2].img[1][0] = this.sprLevel.Deblocked[0][2];
        this.level_current[2].img[1][1] = this.sprLevel.Deblocked[1][2];
        this.level_current[2].img[2] = [];
        this.level_current[2].img[2][0] = this.sprLevel.Completed[0][2];
        this.level_current[2].img[2][1] = this.sprLevel.Completed[1][2];

        this.level_current[3].img[0] = [];
        this.level_current[3].img[0][0] = this.sprLevel.Blocked[0][3];
        this.level_current[3].img[0][1] = this.sprLevel.Blocked[1][3];
        this.level_current[3].img[1] = [];
        this.level_current[3].img[1][0] = this.sprLevel.Deblocked[0][3];
        this.level_current[3].img[1][1] = this.sprLevel.Deblocked[1][3];
        this.level_current[3].img[2] = [];
        this.level_current[3].img[2][0] = this.sprLevel.Completed[0][3];
        this.level_current[3].img[2][1] = this.sprLevel.Completed[1][3];

        this.level_current[4].img[0] = [];
        this.level_current[4].img[0][0] = this.sprLevel.Blocked[0][4];
        this.level_current[4].img[0][1] = this.sprLevel.Blocked[1][4];
        this.level_current[4].img[1] = [];
        this.level_current[4].img[1][0] = this.sprLevel.Deblocked[0][4];
        this.level_current[4].img[1][1] = this.sprLevel.Deblocked[1][4];
        this.level_current[4].img[2] = [];
        this.level_current[4].img[2][0] = this.sprLevel.Completed[0][4];
        this.level_current[4].img[2][1] = this.sprLevel.Completed[1][4];

        this.level_current[5].img[0] = [];
        this.level_current[5].img[0][0] = this.sprLevel.Blocked[0][5];
        this.level_current[5].img[0][1] = this.sprLevel.Blocked[1][5];
        this.level_current[5].img[1] = [];
        this.level_current[5].img[1][0] = this.sprLevel.Deblocked[0][5];
        this.level_current[5].img[1][1] = this.sprLevel.Deblocked[1][5];
        this.level_current[5].img[2] = [];
        this.level_current[5].img[2][0] = this.sprLevel.Completed[0][5];
        this.level_current[5].img[2][1] = this.sprLevel.Completed[1][5];

        this.level_current[6].img[0] = [];
        this.level_current[6].img[0][0] = this.sprLevel.Blocked[0][6];
        this.level_current[6].img[0][1] = this.sprLevel.Blocked[1][6];
        this.level_current[6].img[1] = [];
        this.level_current[6].img[1][0] = this.sprLevel.Deblocked[0][6];
        this.level_current[6].img[1][1] = this.sprLevel.Deblocked[1][6];
        this.level_current[6].img[2] = [];
        this.level_current[6].img[2][0] = this.sprLevel.Completed[0][6];
        this.level_current[6].img[2][1] = this.sprLevel.Completed[1][6];

        this.level_current[7].img[0] = [];
        this.level_current[7].img[0][0] = this.sprLevel.Blocked[0][7];
        this.level_current[7].img[0][1] = this.sprLevel.Blocked[1][7];
        this.level_current[7].img[1] = [];
        this.level_current[7].img[1][0] = this.sprLevel.Deblocked[0][7];
        this.level_current[7].img[1][1] = this.sprLevel.Deblocked[1][7];
        this.level_current[7].img[2] = [];
        this.level_current[7].img[2][0] = this.sprLevel.Completed[0][7];
        this.level_current[7].img[2][1] = this.sprLevel.Completed[1][7];

        this.level_current[8].img[0] = [];
        this.level_current[8].img[0][0] = this.sprLevel.Blocked[0][8];
        this.level_current[8].img[0][1] = this.sprLevel.Blocked[1][8];
        this.level_current[8].img[1] = [];
        this.level_current[8].img[1][0] = this.sprLevel.Deblocked[0][8];
        this.level_current[8].img[1][1] = this.sprLevel.Deblocked[1][8];
        this.level_current[8].img[2] = [];
        this.level_current[8].img[2][0] = this.sprLevel.Completed[0][8];
        this.level_current[8].img[2][1] = this.sprLevel.Completed[1][8];

        this.level_current[9].img[0] = [];
        this.level_current[9].img[0][0] = this.sprLevel.Blocked[0][9];
        this.level_current[9].img[0][1] = this.sprLevel.Blocked[1][9];
        this.level_current[9].img[1] = [];
        this.level_current[9].img[1][0] = this.sprLevel.Deblocked[0][9];
        this.level_current[9].img[1][1] = this.sprLevel.Deblocked[1][9];
        this.level_current[9].img[2] = [];
        this.level_current[9].img[2][0] = this.sprLevel.Completed[0][9];
        this.level_current[9].img[2][1] = this.sprLevel.Completed[1][9];
    }

    mapCurrentQG(dt) {
        // interaction avec les batiments
        if (mouse_press && mouse_x >= house.x["HOTEL"] && mouse_x <= house.x["HOTEL"] + 125 && mouse_y >= house.y["HOTEL"] && mouse_y <= house.y["HOTEL"] + 155) {
            if (!house.isOpen["SHOP"] && !house.isOpen["ALCHIMIE"] && !house.isOpen["DONJON"] && !house.isOpen["MAIRIE"]) {
                console.log("j'entre dans l'hotel");
                house.isOpen["HOTEL"] = true;
                mouse_press = false;
            }
        }
        else if (mouse_press && mouse_x >= house.x["SHOP"] && mouse_x <= house.x["SHOP"] + 125 && mouse_y >= house.y["SHOP"] && mouse_y <= house.y["SHOP"] + 200) {
            if (!house.isOpen["HOTEL"] && !house.isOpen["ALCHIMIE"] && !house.isOpen["DONJON"] && !house.isOpen["MAIRIE"]) {
                console.log("j'entre dans le shop");
                house.isOpen["SHOP"] = true;
                mouse_press = false;
            }
        }
        else if (mouse_press && mouse_x >= house.x["ALCHIMIE"] && mouse_x <= house.x["ALCHIMIE"] + 125 && mouse_y >= house.y["ALCHIMIE"] && mouse_y <= house.y["ALCHIMIE"] + 200) {
            if (!house.isOpen["HOTEL"] && !house.isOpen["SHOP"] && !house.isOpen["DONJON"] && !house.isOpen["MAIRIE"]) {
                console.log("j'entre dans l'alchimie");
                house.isOpen["ALCHIMIE"] = true;
                mouse_press = false;
            }
        }
        else if (mouse_press && mouse_x >= house.x["DONJON"] && mouse_x <= house.x["DONJON"] + 125 && mouse_y >= house.y["DONJON"] && mouse_y <= house.y["DONJON"] + 155) {
            if (!house.isOpen["HOTEL"] && !house.isOpen["SHOP"] && !house.isOpen["ALCHIMIE"] && !house.isOpen["MAIRIE"]) {
                console.log("j'entre dans le donjon");
                this.ecran_courrant = "monde";
                mouse_press = false;
            }
        }
        else if (mouse_press && mouse_x >= house.x["MAIRIE"] && mouse_x <= house.x["MAIRIE"] + 250 && mouse_y >= house.y["MAIRIE"] && mouse_y <= house.y["MAIRIE"] + 190) {
            if (!house.isOpen["HOTEL"] && !house.isOpen["SHOP"] && !house.isOpen["ALCHIMIE"] && !house.isOpen["DONJON"]) {
                console.log("j'entre dans la mairie");
                house.isOpen["MAIRIE"] = true;
                mouse_press = false;
            }
        }

        //Pour quitter le house 
        if (house.isOpen["HOTEL"] || house.isOpen["SHOP"] || house.isOpen["ALCHIMIE"] || house.isOpen["MAIRIE"]) {
            if (mouse_press && mouse_x >= this.sprAnnule.x && mouse_x <= this.sprAnnule.x + 80 && mouse_y >= this.sprAnnule.y && mouse_y <= this.sprAnnule.y + 80) {
                house.isOpen["HOTEL"] = false;
                house.isOpen["SHOP"] = false;
                house.isOpen["ALCHIMIE"] = false;
                house.isOpen["MAIRIE"] = false;
                mouse_press = false;
            }
        }
    }

    update(dt) {
        if (this.ecran_courrant == "QG") {
            animeRectHouse(dt);
            this.mapCurrentQG(dt);
        }
        else if (this.ecran_courrant == "monde") {
            // Dans la carte du monde pour pouvoir entrer dans les donjons
           // console.log("entre dans le monde");
           this.sprSpawnQG.current += 1.5*dt;
           if (this.sprSpawnQG.current > this.sprSpawnQG.length) {
               this.sprSpawnQG.current = 0;
           }

           // Ajuste les positions des circles
           this.level_current[0].img[this.level_current[0].etatDraw][Math.floor(this.sprLevel.animeCurrent)].x = this.level_current[0].x;
           this.level_current[0].img[this.level_current[0].etatDraw][Math.floor(this.sprLevel.animeCurrent)].y = this.level_current[0].y;

           this.level_current[1].img[this.level_current[1].etatDraw][Math.floor(this.sprLevel.animeCurrent)].x = this.level_current[1].x;
           this.level_current[1].img[this.level_current[1].etatDraw][Math.floor(this.sprLevel.animeCurrent)].y = this.level_current[1].y;

           this.level_current[2].img[this.level_current[2].etatDraw][Math.floor(this.sprLevel.animeCurrent)].x = this.level_current[2].x;
           this.level_current[2].img[this.level_current[2].etatDraw][Math.floor(this.sprLevel.animeCurrent)].y = this.level_current[2].y;

           this.level_current[3].img[this.level_current[3].etatDraw][Math.floor(this.sprLevel.animeCurrent)].x = this.level_current[3].x;
           this.level_current[3].img[this.level_current[3].etatDraw][Math.floor(this.sprLevel.animeCurrent)].y = this.level_current[3].y;

           this.level_current[4].img[this.level_current[4].etatDraw][Math.floor(this.sprLevel.animeCurrent)].x = this.level_current[4].x;
           this.level_current[4].img[this.level_current[4].etatDraw][Math.floor(this.sprLevel.animeCurrent)].y = this.level_current[4].y;

           this.level_current[5].img[this.level_current[5].etatDraw][Math.floor(this.sprLevel.animeCurrent)].x = this.level_current[5].x;
           this.level_current[5].img[this.level_current[5].etatDraw][Math.floor(this.sprLevel.animeCurrent)].y = this.level_current[5].y;

           this.level_current[6].img[this.level_current[6].etatDraw][Math.floor(this.sprLevel.animeCurrent)].x = this.level_current[6].x;
           this.level_current[6].img[this.level_current[6].etatDraw][Math.floor(this.sprLevel.animeCurrent)].y = this.level_current[6].y;

           this.level_current[7].img[this.level_current[7].etatDraw][Math.floor(this.sprLevel.animeCurrent)].x = this.level_current[7].x;
           this.level_current[7].img[this.level_current[7].etatDraw][Math.floor(this.sprLevel.animeCurrent)].y = this.level_current[7].y;

           this.level_current[8].img[this.level_current[8].etatDraw][Math.floor(this.sprLevel.animeCurrent)].x = this.level_current[8].x;
           this.level_current[8].img[this.level_current[8].etatDraw][Math.floor(this.sprLevel.animeCurrent)].y = this.level_current[8].y;

           this.level_current[9].img[this.level_current[9].etatDraw][Math.floor(this.sprLevel.animeCurrent)].x = this.level_current[9].x;
           this.level_current[9].img[this.level_current[9].etatDraw][Math.floor(this.sprLevel.animeCurrent)].y = this.level_current[9].y;

           this.sprLevel.animeCurrent +=1.5*dt;
           if (this.sprLevel.animeCurrent > 2) {
               this.sprLevel.animeCurrent = 0;
           }

           // si le joueur click sur le bouton QG
           if (mouse_press && mouse_x >= this.sprSpawnQG[0].x && mouse_x <= this.sprSpawnQG[0].x + 80 && mouse_y >= this.sprSpawnQG[0].y && mouse_y <= this.sprSpawnQG[0].y + 80) {
                console.log("je retourne dans mon QG ...");
                this.ecran_courrant = "QG";
                mouse_press = false;
           }
        }
        
    }

    draw(pCtx) {
        if (this.ecran_courrant == "QG") {
            this.lstSprite.forEach(spr => {
                spr.draw(pCtx);
            });
    
            // rect animer house
            DrawFillRect(pCtx, house.x["HOTEL"], house.y["HOTEL"], 125, 155, "white", house.alpha);
            DrawFillRect(pCtx, house.x["SHOP"], house.y["SHOP"], 125, 200, "white", house.alpha);
            DrawFillRect(pCtx, house.x["ALCHIMIE"], house.y["ALCHIMIE"], 125, 200, "white", house.alpha);
            DrawFillRect(pCtx, house.x["DONJON"], house.y["DONJON"], 125, 155, "white", house.alpha);
            DrawFillRect(pCtx, house.x["MAIRIE"], house.y["MAIRIE"], 250, 190, "white", house.alpha);
    
            //Si un house est vrai 
            if (house.isOpen["HOTEL"]) {
                DrawFillRect(pCtx, 25, 25, canvas.width-50, canvas.height-50, "blue", 0.7);
                DrawText(pCtx, "l'Hotel", (canvas.width/2)-35, 50);
                this.sprAnnule.draw(pCtx);
            }
            else if (house.isOpen["SHOP"]) {
                DrawFillRect(pCtx, 25, 25, canvas.width-50, canvas.height-50, "blue", 0.7);
                DrawText(pCtx, "Shop", (canvas.width/2)-35, 50);
                this.sprAnnule.draw(pCtx);
            }
            else if (house.isOpen["ALCHIMIE"]) {
                DrawFillRect(pCtx, 25, 25, canvas.width-50, canvas.height-50, "blue", 0.7);
                DrawText(pCtx, "Alchimie", (canvas.width/2)-35, 50);
                this.sprAnnule.draw(pCtx);
            }
            else if (house.isOpen["MAIRIE"]) {
                DrawFillRect(pCtx, 25, 25, canvas.width-50, canvas.height-50, "blue", 0.7);
                DrawText(pCtx, "City hall", (canvas.width/2)-35, 50);
                this.sprAnnule.draw(pCtx);
            }
        }
        else if (this.ecran_courrant == "monde") {
            this.sprWorldMap.draw(pCtx);
            this.sprSpawnQG[Math.floor(this.sprSpawnQG.current)].draw(pCtx);
            this.level_current[0].img[this.level_current[0].etatDraw][Math.floor(this.sprLevel.animeCurrent)].draw(pCtx);
            this.level_current[1].img[this.level_current[1].etatDraw][Math.floor(this.sprLevel.animeCurrent)].draw(pCtx);
            this.level_current[2].img[this.level_current[2].etatDraw][Math.floor(this.sprLevel.animeCurrent)].draw(pCtx);
            this.level_current[3].img[this.level_current[3].etatDraw][Math.floor(this.sprLevel.animeCurrent)].draw(pCtx);
            this.level_current[4].img[this.level_current[4].etatDraw][Math.floor(this.sprLevel.animeCurrent)].draw(pCtx);
            this.level_current[5].img[this.level_current[5].etatDraw][Math.floor(this.sprLevel.animeCurrent)].draw(pCtx);
            this.level_current[6].img[this.level_current[6].etatDraw][Math.floor(this.sprLevel.animeCurrent)].draw(pCtx);
            this.level_current[7].img[this.level_current[7].etatDraw][Math.floor(this.sprLevel.animeCurrent)].draw(pCtx);
            this.level_current[8].img[this.level_current[8].etatDraw][Math.floor(this.sprLevel.animeCurrent)].draw(pCtx);
            this.level_current[9].img[this.level_current[9].etatDraw][Math.floor(this.sprLevel.animeCurrent)].draw(pCtx);
        }
    }
}