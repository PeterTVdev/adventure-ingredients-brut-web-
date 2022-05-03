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

let sndOpenHouse = new Audio("sons/house_enter.wav");
let sndMoveHero = new Audio("sons/move_hero.wav");
let sndBatHurt = new Audio("sons/bat_hurt.wav");
let sndBatDie = new Audio("sons/bat_die.wav");
let sndHeroDie = new Audio("sons/hero_die.wav");
let sndBossDie = new Audio("sons/boss_die.wav");
let sndBossHurt = new Audio("sons/boss_hurt.wav");

//Creation du hero
let Hero = new Personnage();

//Creation des robes 
let robe = new Robes();

//Creation d'un mechant
Chauve_sourie = new Personnage();

//Creation d'un boss
big_Boss = new Personnage();

//Creation de la boutique Shop en terme de fonctionnalité 
let shop = new Shop();

//Creation de la mairie en terme de fonctionnalité 
let theMairie = new Mairie();

//Creation de l'hotel en terme de fonctionnalité
let theHotel = new Hotel();

//Creation de l'alchimie en terme de fonctionnalité
let theAlchimie = new Alchimie();

//Creation du gestion de lvl en terme de fonctionnalité
let level_engine = new LevelManager();

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
        this.sprTxtWorld;
        this.sprMsgTired;

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

        //Hero
        Hero.addHero(1, 0, 100, 5, 3, 25, 25, 0, 100, 350);
    }

    load(pLoader) {
        shop.load(pLoader);
        theHotel.load(pLoader);
        theAlchimie.load(pLoader);
        theMairie.load(pLoader);
        level_engine.load(pLoader);
        robe.load(pLoader);

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
        this.lstImgLoader["TXT_WORLD"] = pLoader.getLoadImage("images/world.png");
        this.lstImgLoader["MSG_TIRED"] = pLoader.getLoadImage("images/msg_tired_max.png");

        this.sprTxtWorld = new Sprite(this.lstImgLoader["TXT_WORLD"], 790, 50);

        this.lstSprite[0] = new Sprite(this.lstImgLoader["MAP_QG"]);
        this.sprAnnule = new Sprite(this.lstImgLoader["ANNULE"], 25, 25);
        this.sprWorldMap = new Sprite(this.lstImgLoader["MAP_WORLD"]);
        this.sprSpawnQG[0] = new Sprite(this.lstImgLoader["CIRCLE_HOUSE1"]);
        this.sprSpawnQG[1] = new Sprite(this.lstImgLoader["CIRCLE_HOUSE2"]);

        this.sprMsgTired = new Sprite(this.lstImgLoader["MSG_TIRED"], 0, 150);

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
                sndOpenHouse.play();
                house.isOpen["HOTEL"] = true;
                mouse_press = false;
            }
        }
        else if (mouse_press && mouse_x >= house.x["SHOP"] && mouse_x <= house.x["SHOP"] + 125 && mouse_y >= house.y["SHOP"] && mouse_y <= house.y["SHOP"] + 200) {
            if (!house.isOpen["HOTEL"] && !house.isOpen["ALCHIMIE"] && !house.isOpen["DONJON"] && !house.isOpen["MAIRIE"]) {
                console.log("j'entre dans le shop");
                sndOpenHouse.play();
                house.isOpen["SHOP"] = true;
                console.log("j'entre dans le shop"+house.isOpen["SHOP"]);
                mouse_press = false;
            }
        }
        else if (mouse_press && mouse_x >= house.x["ALCHIMIE"] && mouse_x <= house.x["ALCHIMIE"] + 125 && mouse_y >= house.y["ALCHIMIE"] && mouse_y <= house.y["ALCHIMIE"] + 200) {
            if (!house.isOpen["HOTEL"] && !house.isOpen["SHOP"] && !house.isOpen["DONJON"] && !house.isOpen["MAIRIE"]) {
                console.log("j'entre dans l'alchimie");
                sndOpenHouse.play();
                house.isOpen["ALCHIMIE"] = true;
                mouse_press = false;
            }
        }
        else if (mouse_press && mouse_x >= house.x["DONJON"] && mouse_x <= house.x["DONJON"] + 125 && mouse_y >= house.y["DONJON"] && mouse_y <= house.y["DONJON"] + 155) {
            if (!house.isOpen["HOTEL"] && !house.isOpen["SHOP"] && !house.isOpen["ALCHIMIE"] && !house.isOpen["MAIRIE"]) {
                console.log("j'entre dans le donjon");
                sndOpenHouse.play();
                this.ecran_courrant = "monde";
                mouse_press = false;
            }
        }
        else if (mouse_press && mouse_x >= house.x["MAIRIE"] && mouse_x <= house.x["MAIRIE"] + 250 && mouse_y >= house.y["MAIRIE"] && mouse_y <= house.y["MAIRIE"] + 190) {
            if (!house.isOpen["HOTEL"] && !house.isOpen["SHOP"] && !house.isOpen["ALCHIMIE"] && !house.isOpen["DONJON"]) {
                if (house.isOpen["MAIRIE"]) {
                    return;
                }
                console.log("j'entre dans la mairie");
                sndOpenHouse.play();
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
        //Verifie si equiper 
        if (shop.lstArmures["ARMOR1"].isAcquis == "EQUIP") {
            robe.equipedCurrent = 0;
        } 
        else if (shop.lstArmures["ARMOR2"].isAcquis == "EQUIP") {
            robe.equipedCurrent = 1;
        } 
        else if (shop.lstArmures["ARMOR3"].isAcquis == "EQUIP") {
            robe.equipedCurrent = 2;
        }
        else if (shop.lstArmures["ARMOR4"].isAcquis == "EQUIP") {
            robe.equipedCurrent = 3;
        }
        else if (shop.lstArmures["ARMOR5"].isAcquis == "EQUIP") {
            robe.equipedCurrent = 4;
        }
        else if (shop.lstArmures["ARMOR6"].isAcquis == "EQUIP") {
            robe.equipedCurrent = 5;
        }
        else if (shop.lstArmures["ARMOR7"].isAcquis == "EQUIP") {
            robe.equipedCurrent = 6;
        }
        else if (shop.lstArmures["ARMOR8"].isAcquis == "EQUIP") {
            robe.equipedCurrent = 7;
        } else {
            robe.equipedCurrent = null;
        }

        //Le shop
        if (theMairie.levelBatiment["SHOP"] == 2) {
            shop.gainHouse = 1;
        }
        else if (theMairie.levelBatiment["SHOP"] == 3) {
            shop.gainHouse = 3;
        }
        else if (theMairie.levelBatiment["SHOP"] == 4) {
            shop.gainHouse = 5;
        }
        else if (theMairie.levelBatiment["SHOP"] == 5) {
            shop.gainHouse = 7;
        }
        else if (theMairie.levelBatiment["SHOP"] == 6) {
            shop.gainHouse = 8;
        }
        else if (theMairie.levelBatiment["SHOP"] == 7) {
            shop.gainHouse = 10;
        }
        else if (theMairie.levelBatiment["SHOP"] == 8) {
            shop.gainHouse = 11;
        }
        else if (theMairie.levelBatiment["SHOP"] == 9) {
            shop.gainHouse = 13;
        }
        else if (theMairie.levelBatiment["SHOP"] == 10) {
            shop.gainHouse = 15;
        }

        //L'Alchimie
        if (theMairie.levelBatiment["ALCHIMIE"] == 2) {
            theAlchimie.gainHouse = 1;
        }
        else if (theMairie.levelBatiment["ALCHIMIE"] == 3) {
            theAlchimie.gainHouse = 3;
        }
        else if (theMairie.levelBatiment["ALCHIMIE"] == 4) {
            theAlchimie.gainHouse = 5;
        }
        else if (theMairie.levelBatiment["ALCHIMIE"] == 5) {
            theAlchimie.gainHouse = 7;
        }
        else if (theMairie.levelBatiment["ALCHIMIE"] == 6) {
            theAlchimie.gainHouse = 8;
        }
        else if (theMairie.levelBatiment["ALCHIMIE"] == 7) {
            theAlchimie.gainHouse = 10;
        }
        else if (theMairie.levelBatiment["ALCHIMIE"] == 8) {
            theAlchimie.gainHouse = 11;
        }
        else if (theMairie.levelBatiment["ALCHIMIE"] == 9) {
            theAlchimie.gainHouse = 13;
        }
        else if (theMairie.levelBatiment["ALCHIMIE"] == 10) {
            theAlchimie.gainHouse = 15;
        }

        //l'Hotel
        if (theMairie.levelBatiment["HOTEL"] == 2) {
            theHotel.gainHouse = 1;
        }
        else if (theMairie.levelBatiment["HOTEL"] == 3) {
            theHotel.gainHouse = 3;
        }
        else if (theMairie.levelBatiment["HOTEL"] == 4) {
            theHotel.gainHouse = 5;
        }
        else if (theMairie.levelBatiment["HOTEL"] == 5) {
            theHotel.gainHouse = 7;
        }
        else if (theMairie.levelBatiment["HOTEL"] == 6) {
            theHotel.gainHouse = 8;
        }
        else if (theMairie.levelBatiment["HOTEL"] == 7) {
            theHotel.gainHouse = 10;
        }
        else if (theMairie.levelBatiment["HOTEL"] == 8) {
            theHotel.gainHouse = 11;
        }
        else if (theMairie.levelBatiment["HOTEL"] == 9) {
            theHotel.gainHouse = 13;
        }
        else if (theMairie.levelBatiment["HOTEL"] == 10) {
            theHotel.gainHouse = 15;
        }

        //House gain
        Hero.gold += shop.gainHouse*dt;
        Hero.gold += theAlchimie.gainHouse*dt;
        Hero.gold += theHotel.gainHouse*dt;

        if (this.ecran_courrant == "QG") {
            animeRectHouse(dt);
            this.mapCurrentQG(dt);
            //Si Shop open est true 
            if (house.isOpen["SHOP"]) {
                //console.log("Je regarde dans la boutique")
                shop.update(dt);
            }
            else if (house.isOpen["HOTEL"]) {
                theHotel.update(dt);
            }
            else if (house.isOpen["ALCHIMIE"]) {
                theAlchimie.update(dt);
            }
            else if (house.isOpen["MAIRIE"]) {
                theMairie.update(dt);
            }
        }
        else if (this.ecran_courrant == "monde") {
           // myAudio.pause();
            //myAudio.currentTime = 0;
            // Dans la carte du monde pour pouvoir entrer dans les donjons
           // console.log("entre dans le monde");
           this.sprSpawnQG.current += 1.5*dt;
           if (this.sprSpawnQG.current > this.sprSpawnQG.length) {
               this.sprSpawnQG.current = 0;
           }

           //Clique pour entrer dans un niveau
           if (mouse_press) {
               if (Hero.fatigue < Hero.fatigueMax) {
                    if (mouse_x >= this.level_current[0].x && mouse_x <= this.level_current[0].x + 80 && mouse_y >= this.level_current[0].y && mouse_y <= this.level_current[0].y + 80) {
                        if (!Hero.isBag && !Hero.isStats) {
                            if (this.level_current[0].etat == "debloquer" || this.level_current[0].etat == "valider") {
                                console.log("J'entre dans le niveau 1...");
                                Hero.fatigue += 10;
                                level_engine.Level = 1;
                                this.ecran_courrant = "donjon";
                                mouse_press = false;
                                return;
                            }
                        }
                    } 
                    else if (mouse_x >= this.level_current[1].x && mouse_x <= this.level_current[1].x + 80 && mouse_y >= this.level_current[1].y && mouse_y <= this.level_current[1].y + 80) {
                        if (!Hero.isBag && !Hero.isStats) {
                            if (this.level_current[1].etat == "debloquer" || this.level_current[1].etat == "valider") {
                                console.log("J'entre dans le niveau 2...");
                                Hero.fatigue += 10;
                                level_engine.Level = 2;
                                this.ecran_courrant = "donjon";
                                mouse_press = false;
                                return;
                            }
                        }
                    }
                    else if (mouse_x >= this.level_current[2].x && mouse_x <= this.level_current[2].x + 80 && mouse_y >= this.level_current[2].y && mouse_y <= this.level_current[2].y + 80) {
                        if (!Hero.isBag && !Hero.isStats) {
                            if (this.level_current[2].etat == "debloquer" || this.level_current[2].etat == "valider") {
                                console.log("J'entre dans le niveau 3...");
                                Hero.fatigue += 10;
                                level_engine.Level = 3;
                                this.ecran_courrant = "donjon";
                                mouse_press = false;
                                return;
                            }
                        }
                    } 
                    else if (mouse_x >= this.level_current[3].x && mouse_x <= this.level_current[3].x + 80 && mouse_y >= this.level_current[3].y && mouse_y <= this.level_current[3].y + 80) {
                        if (!Hero.isBag && !Hero.isStats) {
                            if (this.level_current[3].etat == "debloquer" || this.level_current[3].etat == "valider") {
                                console.log("J'entre dans le niveau 4...");
                                Hero.fatigue += 10;
                                level_engine.Level = 4;
                                this.ecran_courrant = "donjon";
                                mouse_press = false;
                                return;
                            }
                        }
                    }
                    else if (mouse_x >= this.level_current[4].x && mouse_x <= this.level_current[4].x + 80 && mouse_y >= this.level_current[4].y && mouse_y <= this.level_current[4].y + 80) {
                        if (!Hero.isBag && !Hero.isStats) {
                            if (this.level_current[4].etat == "debloquer" || this.level_current[4].etat == "valider") {
                                console.log("J'entre dans le niveau 5...");
                                Hero.fatigue += 10;
                                level_engine.Level = 5;
                                this.ecran_courrant = "donjon";
                                mouse_press = false;
                                return;
                            }
                        }
                    }
                    else if (mouse_x >= this.level_current[5].x && mouse_x <= this.level_current[5].x + 80 && mouse_y >= this.level_current[5].y && mouse_y <= this.level_current[5].y + 80) {
                        if (!Hero.isBag && !Hero.isStats) {
                            if (this.level_current[5].etat == "debloquer" || this.level_current[5].etat == "valider") {
                                console.log("J'entre dans le niveau 6...");
                                Hero.fatigue += 10;
                                level_engine.Level = 6;
                                this.ecran_courrant = "donjon";
                                mouse_press = false;
                                return;
                            }
                        }
                    }
                    else if (mouse_x >= this.level_current[6].x && mouse_x <= this.level_current[6].x + 80 && mouse_y >= this.level_current[6].y && mouse_y <= this.level_current[6].y + 80) {
                        if (!Hero.isBag && !Hero.isStats) {
                            if (this.level_current[6].etat == "debloquer" || this.level_current[6].etat == "valider") {
                                console.log("J'entre dans le niveau 7...");
                                Hero.fatigue += 10;
                                level_engine.Level = 7;
                                this.ecran_courrant = "donjon";
                                mouse_press = false;
                                return;
                            }
                        }
                    }
                    else if (mouse_x >= this.level_current[7].x && mouse_x <= this.level_current[7].x + 80 && mouse_y >= this.level_current[7].y && mouse_y <= this.level_current[7].y + 80) {
                        if (!Hero.isBag && !Hero.isStats) {
                            if (this.level_current[7].etat == "debloquer" || this.level_current[7].etat == "valider") {
                                console.log("J'entre dans le niveau 8...");
                                Hero.fatigue += 10;
                                level_engine.Level = 8;
                                this.ecran_courrant = "donjon";
                                mouse_press = false;
                                return;
                            }
                        }
                    }
                    else if (mouse_x >= this.level_current[8].x && mouse_x <= this.level_current[8].x + 80 && mouse_y >= this.level_current[8].y && mouse_y <= this.level_current[8].y + 80) {
                        if (!Hero.isBag && !Hero.isStats) {
                            if (this.level_current[8].etat == "debloquer" || this.level_current[8].etat == "valider") {
                                console.log("J'entre dans le niveau 9...");
                                Hero.fatigue += 10;
                                level_engine.Level = 9;
                                this.ecran_courrant = "donjon";
                                mouse_press = false;
                                return;
                            }
                        }
                    }
                    else if (mouse_x >= this.level_current[9].x && mouse_x <= this.level_current[9].x + 80 && mouse_y >= this.level_current[9].y && mouse_y <= this.level_current[9].y + 80) {
                        if (!Hero.isBag && !Hero.isStats) {
                            if (this.level_current[9].etat == "debloquer" || this.level_current[9].etat == "valider") {
                                console.log("J'entre dans le niveau 10...");
                                Hero.fatigue += 10;
                                level_engine.Level = 10;
                                this.ecran_courrant = "donjon";
                                mouse_press = false;
                                return;
                            }
                        }
                    }
               }
           }
           
           //clique pour voir les stats
           if (mouse_press) {
               if (mouse_x >= 880 && mouse_x <= 880 + 140 && mouse_y >= 475 && mouse_y <= 475 + 40) {
                   console.log("J'ouvre mes stats");
                   Hero.isStats = !Hero.isStats;
                   mouse_press = false;
                   return;
               }
               else if (mouse_x >= 880 && mouse_x <= 880 + 140 && mouse_y >= 535 && mouse_y <= 535 + 40) {
                    console.log("J'ouvre mon inventaire");
                    Hero.isBag = !Hero.isBag;
                    mouse_press = false;
                    return;
               }
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
        else if (this.ecran_courrant == "donjon") {
            level_engine.update(dt);
            robe.update(dt, level_engine.Level);

            //Si le hero meurt ou que le boss meurt
            if (Hero.life <= 0 || big_Boss.life <= 0) {
                if (Hero.life <= 0) {
                    sndHeroDie.play();
                }
                if (big_Boss.life <= 0) {
                    sndBossDie.play();
                }
                robe.isStart = false;
                this.ecran_courrant = "monde";
                Hero.life = Hero.lifeMax;
            }
        }
        
        //Debloque les autre niveau si on a tuer le boss
        if (Lvl1_Acomplie) {
            //console.log("in condition de lv1_acompli" + Lvl1_Acomplie);
            if (this.level_current[0].etat == "debloquer") {
                theAlchimie.imgIngredientsBrut.number[0] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[1] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[2] += rnd(1,3);
            }
            this.level_current[0].etat = "valider";
            this.level_current[0].etatDraw = 2;
            if (this.level_current[1].etat == "bloquer") {
                this.level_current[1].etat = "debloquer";
                this.level_current[1].etatDraw = 1;
            }
        }
        if (Lvl2_Acomplie) {
            if (this.level_current[1].etat == "debloquer") {
                theAlchimie.imgIngredientsBrut.number[0] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[1] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[2] += rnd(1,3);
            }
            this.level_current[1].etat = "valider";
            this.level_current[1].etatDraw = 2;
            if (this.level_current[2].etat == "bloquer") {
                this.level_current[2].etat = "debloquer";
                this.level_current[2].etatDraw = 1;
            }
        }
        if (Lvl3_Acomplie) {
            if (this.level_current[2].etat == "debloquer") {
                theAlchimie.imgIngredientsBrut.number[0] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[1] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[2] += rnd(1,3);
            }
            this.level_current[2].etat = "valider";
            this.level_current[2].etatDraw = 2;
            if (this.level_current[3].etat == "bloquer") {
                this.level_current[3].etat = "debloquer";
                this.level_current[3].etatDraw = 1;
            }
        }
        if (Lvl4_Acomplie) {
            if (this.level_current[3].etat == "debloquer") {
                theAlchimie.imgIngredientsBrut.number[0] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[1] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[2] += rnd(1,3);
            }
            this.level_current[3].etat = "valider";
            this.level_current[3].etatDraw = 2;
            if (this.level_current[4].etat == "bloquer") {
                this.level_current[4].etat = "debloquer";
                this.level_current[4].etatDraw = 1;
            }
        }
        if (Lvl5_Acomplie) {
            if (this.level_current[4].etat == "debloquer") {
                theAlchimie.imgIngredientsBrut.number[0] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[1] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[2] += rnd(1,3);
            }
            this.level_current[4].etat = "valider";
            this.level_current[4].etatDraw = 2;
            if (this.level_current[5].etat == "bloquer") {
                this.level_current[5].etat = "debloquer";
                this.level_current[5].etatDraw = 1;
            }
        }
        if (Lvl6_Acomplie) {
            if (this.level_current[5].etat == "debloquer") {
                theAlchimie.imgIngredientsBrut.number[0] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[1] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[2] += rnd(1,3);
            }
            this.level_current[5].etat = "valider";
            this.level_current[5].etatDraw = 2;
            if (this.level_current[6].etat == "bloquer") {
                this.level_current[6].etat = "debloquer";
                this.level_current[6].etatDraw = 1;
            }
        }
        if (Lvl7_Acomplie) {
            if (this.level_current[6].etat == "debloquer") {
                theAlchimie.imgIngredientsBrut.number[0] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[1] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[2] += rnd(1,3);
            }
            this.level_current[6].etat = "valider";
            this.level_current[6].etatDraw = 2;
            if (this.level_current[7].etat == "bloquer") {
                this.level_current[7].etat = "debloquer";
                this.level_current[7].etatDraw = 1;
            }
        }
        if (Lvl8_Acomplie) {
            if (this.level_current[7].etat == "debloquer") {
                theAlchimie.imgIngredientsBrut.number[0] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[1] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[2] += rnd(1,3);
            }
            this.level_current[7].etat = "valider";
            this.level_current[7].etatDraw = 2;
            if (this.level_current[8].etat == "bloquer") {
                this.level_current[8].etat = "debloquer";
                this.level_current[8].etatDraw = 1;
            }
        }
        if (Lvl9_Acomplie) {
            if (this.level_current[8].etat == "debloquer") {
                theAlchimie.imgIngredientsBrut.number[0] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[1] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[2] += rnd(1,3);
            }
            this.level_current[8].etat = "valider";
            this.level_current[8].etatDraw = 2;
            if (this.level_current[9].etat == "bloquer") {
                this.level_current[9].etat = "debloquer";
                this.level_current[9].etatDraw = 1;
            }
        }
        if (Lvl10_Acomplie) {
            if (this.level_current[9].etat == "debloquer") {
                theAlchimie.imgIngredientsBrut.number[0] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[1] += rnd(1,3);
                theAlchimie.imgIngredientsBrut.number[2] += rnd(1,3);
            }
            this.level_current[9].etat = "valider";
            this.level_current[9].etatDraw = 2;
            //peut etre ajouter un niveau bonus , a voir ...
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
                DrawText(pCtx, "l'Hotel (+" + theHotel.gainHouse + ")", (canvas.width/2)-35, 50);
                this.sprAnnule.draw(pCtx);
            }
            else if (house.isOpen["SHOP"]) {
                DrawFillRect(pCtx, 25, 25, canvas.width-50, canvas.height-50, "blue", 0.7);
                DrawText(pCtx, "Shop (+" + shop.gainHouse + ")", (canvas.width/2)-35, 50);
                this.sprAnnule.draw(pCtx);
            }
            else if (house.isOpen["ALCHIMIE"]) {
                DrawFillRect(pCtx, 25, 25, canvas.width-50, canvas.height-50, "blue", 0.7);
                DrawText(pCtx, "Alchimie (+" + theAlchimie.gainHouse + ")", (canvas.width/2)-35, 50);
                this.sprAnnule.draw(pCtx);
            }
            else if (house.isOpen["MAIRIE"]) {
                DrawFillRect(pCtx, 25, 25, canvas.width-50, canvas.height-50, "blue", 0.7);
                DrawText(pCtx, "City hall", (canvas.width/2)-35, 50);
                this.sprAnnule.draw(pCtx);
            }
            //Si Shop open est true 
            if (house.isOpen["SHOP"]) {
                //console.log("Je regarde dans la boutique")
                shop.draw(pCtx);
                //Afficher les gold que le joueur dispose
                DrawFillRect(pCtx, 480, 500, 150, 75, "orange");
                DrawText(pCtx, "YOUR GOLD", 490, 520);
                DrawText(pCtx, Math.floor(Hero.gold), 500, 555);
            }
            else if (house.isOpen["HOTEL"]) {
                theHotel.draw(pCtx);
                //Afficher les gold que le joueur dispose
                DrawFillRect(pCtx, 480, 500, 150, 75, "orange");
                DrawText(pCtx, "YOUR GOLD", 490, 520);
                DrawText(pCtx, Math.floor(Hero.gold), 500, 555);
            }
            else if (house.isOpen["ALCHIMIE"]) {
                theAlchimie.draw(pCtx);
                //Afficher les gold que le joueur dispose
                DrawFillRect(pCtx, 480, 500, 150, 75, "orange");
                DrawText(pCtx, "YOUR GOLD", 490, 520);
                DrawText(pCtx, Math.floor(Hero.gold), 500, 555);
            }
            else if (house.isOpen["MAIRIE"]) {
                theMairie.draw(pCtx);
                //Afficher les gold que le joueur dispose
                DrawFillRect(pCtx, 480, 500, 150, 75, "orange");
                DrawText(pCtx, "YOUR GOLD", 490, 520);
                DrawText(pCtx, Math.floor(Hero.gold), 500, 555);
            }
        }
        else if (this.ecran_courrant == "monde") {
            this.sprWorldMap.draw(pCtx);
            this.sprTxtWorld.draw(pCtx);
            this.sprSpawnQG[Math.floor(this.sprSpawnQG.current)].draw(pCtx);

            //les lvl circles
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

            // Les stats et Inventaire du hero ecrit en text
            DrawText(pCtx, "STATS", 900, 490);
            DrawText(pCtx, "BAG", 910, 555);

            //Affiche les stats et bag si c'est open
            if (Hero.isStats) {
                DrawFillRect(pCtx, 500, 150, 250, 350);
                pCtx.fillStyle = "black";
                DrawText(pCtx, "character statistics", 530, 170);
                DrawText(pCtx, "Level : " + Hero.Level, 510, 230);
                DrawText(pCtx, "xp : " + Hero.xp + " / " + Hero.xpMax, 510, 260);
                DrawText(pCtx, "Life : " + Hero.life + " / " + Hero.lifeMax, 510, 310);
                DrawText(pCtx, "Tired : " + Hero.fatigue + " / " + Hero.fatigueMax, 510, 340);
                DrawText(pCtx, "strength : " + Hero.atk, 510, 390);
                DrawText(pCtx, "defence : " + Hero.def, 510, 420);
                pCtx.fillStyle = "white";
            }
            
            if (Hero.isBag) {
                DrawFillRect(pCtx, 40, 300, 300, 200);
                DrawFillRect(pCtx, 60, 330, 70, 70, "black");
                DrawFillRect(pCtx, 150, 330, 70, 70, "black");
                DrawFillRect(pCtx, 240, 330, 70, 70, "black");
                DrawFillRect(pCtx, 60, 410, 70, 70, "black");
                DrawFillRect(pCtx, 150, 410, 70, 70, "black");
                DrawFillRect(pCtx, 240, 410, 70, 70, "black");

                //Les ingredients
                theAlchimie.sprIngredientsBruts[0].x = 60;
                theAlchimie.sprIngredientsBruts[0].y = 330;
                theAlchimie.sprIngredientsBruts[0].draw(pCtx);
                DrawText(pCtx, theAlchimie.imgIngredientsBrut.number[0], 60, 350);

                theAlchimie.sprIngredientsBruts[1].x = 150;
                theAlchimie.sprIngredientsBruts[1].y = 330;
                theAlchimie.sprIngredientsBruts[1].draw(pCtx);
                DrawText(pCtx, theAlchimie.imgIngredientsBrut.number[1], 150, 350);

                theAlchimie.sprIngredientsBruts[2].x = 240;
                theAlchimie.sprIngredientsBruts[2].y = 330;
                theAlchimie.sprIngredientsBruts[2].draw(pCtx);
                DrawText(pCtx, theAlchimie.imgIngredientsBrut.number[2], 240, 350);

                theAlchimie.sprIngredientsElementaires[0].x = 60;
                theAlchimie.sprIngredientsElementaires[0].y = 410;
                theAlchimie.sprIngredientsElementaires[0].draw(pCtx);
                DrawText(pCtx, theAlchimie.sprIngredientsElementaires.number[0], 60, 430);

                theAlchimie.sprIngredientsElementaires[1].x = 150;
                theAlchimie.sprIngredientsElementaires[1].y = 410;
                theAlchimie.sprIngredientsElementaires[1].draw(pCtx);
                DrawText(pCtx, theAlchimie.sprIngredientsElementaires.number[1], 150, 430);

                theAlchimie.sprIngredientsElementaires[2].x = 240;
                theAlchimie.sprIngredientsElementaires[2].y = 410;
                theAlchimie.sprIngredientsElementaires[2].draw(pCtx);
                DrawText(pCtx, theAlchimie.sprIngredientsElementaires.number[2], 240, 430);
            }
            if (Hero.fatigue >= Hero.fatigueMax) {
                this.sprMsgTired.draw(pCtx);            
            }
        }
        else if (this.ecran_courrant == "donjon") {
            level_engine.draw(pCtx);
            robe.draw(pCtx);
        }
    }
}