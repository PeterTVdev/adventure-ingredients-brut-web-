class Shop {
    constructor() {
        //Gain en argent apres chaque lv up du batiment
        this.gainHouse = 0;

        this.lstSprite = [];
        this.lstImageLoader = [];
        this.lstArmes = [];
        this.lstArmes["SWORD1"] = [];
        this.lstArmes["SWORD2"] = [];
        this.lstArmes["SWORD3"] = [];
        this.lstArmes["SWORD4"] = [];
        this.lstArmes["SWORD5"] = [];
        this.lstArmes["SWORD6"] = [];
        this.lstArmes["SWORD7"] = [];
        this.lstArmes["SWORD8"] = [];
        this.lstArmures = [];
        this.lstArmures["ARMOR1"] = [];
        this.lstArmures["ARMOR2"] = [];
        this.lstArmures["ARMOR3"] = [];
        this.lstArmures["ARMOR4"] = [];
        this.lstArmures["ARMOR5"] = [];
        this.lstArmures["ARMOR6"] = [];
        this.lstArmures["ARMOR7"] = [];
        this.lstArmures["ARMOR8"] = [];
    }

    load (pLoader) {
        //armor imgLoader
        this.lstImageLoader[0] = pLoader.getLoadImage("images/armor1.png");
        this.lstImageLoader[1] = pLoader.getLoadImage("images/armor2.png");
        this.lstImageLoader[2] = pLoader.getLoadImage("images/armor3.png");
        this.lstImageLoader[3] = pLoader.getLoadImage("images/armor4.png");
        this.lstImageLoader[4] = pLoader.getLoadImage("images/armor5.png");
        this.lstImageLoader[5] = pLoader.getLoadImage("images/armor6.png");
        this.lstImageLoader[6] = pLoader.getLoadImage("images/armor7.png");
        this.lstImageLoader[7] = pLoader.getLoadImage("images/armor8.png");
        //armor multiplié par 3
        this.lstImageLoader[8] = pLoader.getLoadImage("images/armor1_X3.png");
        this.lstImageLoader[9] = pLoader.getLoadImage("images/armor2_X3.png");
        this.lstImageLoader[10] = pLoader.getLoadImage("images/armor3_X3.png");
        this.lstImageLoader[11] = pLoader.getLoadImage("images/armor4_X3.png");
        this.lstImageLoader[12] = pLoader.getLoadImage("images/armor5_X3.png");
        this.lstImageLoader[13] = pLoader.getLoadImage("images/armor6_X3.png");
        this.lstImageLoader[14] = pLoader.getLoadImage("images/armor7_X3.png");
        this.lstImageLoader[15] = pLoader.getLoadImage("images/armor8_X3.png");

        //sword imgLoader
        this.lstImageLoader[16] = pLoader.getLoadImage("images/sword1.png");
        this.lstImageLoader[17] = pLoader.getLoadImage("images/sword2.png");
        this.lstImageLoader[18] = pLoader.getLoadImage("images/sword3.png");
        this.lstImageLoader[19] = pLoader.getLoadImage("images/sword4.png");
        this.lstImageLoader[20] = pLoader.getLoadImage("images/sword5.png");
        this.lstImageLoader[21] = pLoader.getLoadImage("images/sword6.png");
        this.lstImageLoader[22] = pLoader.getLoadImage("images/sword7.png");
        this.lstImageLoader[23] = pLoader.getLoadImage("images/sword8.png");
        //sword multiplié par 3
        this.lstImageLoader[24] = pLoader.getLoadImage("images/sword1_X3.png");
        this.lstImageLoader[25] = pLoader.getLoadImage("images/sword2_X3.png");
        this.lstImageLoader[26] = pLoader.getLoadImage("images/sword3_X3.png");
        this.lstImageLoader[27] = pLoader.getLoadImage("images/sword4_X3.png");
        this.lstImageLoader[28] = pLoader.getLoadImage("images/sword5_X3.png");
        this.lstImageLoader[29] = pLoader.getLoadImage("images/sword6_X3.png");
        this.lstImageLoader[30] = pLoader.getLoadImage("images/sword7_X3.png");
        this.lstImageLoader[31] = pLoader.getLoadImage("images/sword8_X3.png");

        //les icons dans la liste de sprite 
        this.lstSprite[0] = new Sprite(this.lstImageLoader[8], 225, 20);
        this.lstSprite[1] = new Sprite(this.lstImageLoader[9], 225, 90);
        this.lstSprite[2] = new Sprite(this.lstImageLoader[10], 225, 160);
        this.lstSprite[3] = new Sprite(this.lstImageLoader[11], 225, 230);
        this.lstSprite[4] = new Sprite(this.lstImageLoader[12], 225, 300);
        this.lstSprite[5] = new Sprite(this.lstImageLoader[13], 225, 370);
        this.lstSprite[6] = new Sprite(this.lstImageLoader[14], 225, 440);
        this.lstSprite[7] = new Sprite(this.lstImageLoader[15], 225, 510);

        this.lstSprite[8] = new Sprite(this.lstImageLoader[24], 770, 20);
        this.lstSprite[9] = new Sprite(this.lstImageLoader[25], 770, 90);
        this.lstSprite[10] = new Sprite(this.lstImageLoader[26], 770, 160);
        this.lstSprite[11] = new Sprite(this.lstImageLoader[27], 770, 230);
        this.lstSprite[12] = new Sprite(this.lstImageLoader[28], 770, 300);
        this.lstSprite[13] = new Sprite(this.lstImageLoader[29], 770, 370);
        this.lstSprite[14] = new Sprite(this.lstImageLoader[30], 770, 440);
        this.lstSprite[15] = new Sprite(this.lstImageLoader[31], 770, 510);

        //caracteristique des armures 
        this.lstArmures["ARMOR1"].imgIcon = new Sprite(this.lstImageLoader[0]);
        this.lstArmures["ARMOR1"].bStyle = false;
        this.lstArmures["ARMOR1"].def = 7;
        this.lstArmures["ARMOR1"].name = "armor 1";
        this.lstArmures["ARMOR1"].price = 400;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmures["ARMOR1"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmures["ARMOR1"].costIngredients;

        this.lstArmures["ARMOR2"].imgIcon = new Sprite(this.lstImageLoader[1]);
        this.lstArmures["ARMOR2"].bStyle = false;
        this.lstArmures["ARMOR2"].def = 15;
        this.lstArmures["ARMOR2"].name = "armor 2";
        this.lstArmures["ARMOR2"].price = 950;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmures["ARMOR2"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmures["ARMOR2"].costIngredients;

        this.lstArmures["ARMOR3"].imgIcon = new Sprite(this.lstImageLoader[2]);
        this.lstArmures["ARMOR3"].bStyle = false;
        this.lstArmures["ARMOR3"].def = 27;
        this.lstArmures["ARMOR3"].name = "armor 3";
        this.lstArmures["ARMOR3"].price = 1800;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmures["ARMOR3"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmures["ARMOR3"].costIngredients;

        this.lstArmures["ARMOR4"].imgIcon = new Sprite(this.lstImageLoader[3]);
        this.lstArmures["ARMOR4"].bStyle = false;
        this.lstArmures["ARMOR4"].def = 40;
        this.lstArmures["ARMOR4"].name = "armor 4";
        this.lstArmures["ARMOR4"].price = 3000;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmures["ARMOR4"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmures["ARMOR4"].costIngredients;

        this.lstArmures["ARMOR5"].imgIcon = new Sprite(this.lstImageLoader[4]);
        this.lstArmures["ARMOR5"].bStyle = false;
        this.lstArmures["ARMOR5"].def = 55;
        this.lstArmures["ARMOR5"].name = "armor 5";
        this.lstArmures["ARMOR5"].price = 4300;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmures["ARMOR5"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmures["ARMOR5"].costIngredients;

        this.lstArmures["ARMOR6"].imgIcon = new Sprite(this.lstImageLoader[5]);
        this.lstArmures["ARMOR6"].bStyle = false;
        this.lstArmures["ARMOR6"].def = 80;
        this.lstArmures["ARMOR6"].name = "armor 6";
        this.lstArmures["ARMOR6"].price = 6000;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmures["ARMOR6"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmures["ARMOR6"].costIngredients;

        this.lstArmures["ARMOR7"].imgIcon = new Sprite(this.lstImageLoader[6]);
        this.lstArmures["ARMOR7"].bStyle = false;
        this.lstArmures["ARMOR7"].def = 100;
        this.lstArmures["ARMOR7"].name = "armor 7";
        this.lstArmures["ARMOR7"].price = 8000;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmures["ARMOR7"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmures["ARMOR7"].costIngredients;

        this.lstArmures["ARMOR8"].imgIcon = new Sprite(this.lstImageLoader[7]);
        this.lstArmures["ARMOR8"].bStyle = false;
        this.lstArmures["ARMOR8"].def = 150;
        this.lstArmures["ARMOR8"].name = "armor 8";
        this.lstArmures["ARMOR8"].price = 10000;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmures["ARMOR8"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmures["ARMOR8"].costIngredients;

        //caracteristique des armes
        this.lstArmes["SWORD1"].imgIcon = new Sprite(this.lstImageLoader[16]);
        this.lstArmes["SWORD1"].bStyle = false;
        this.lstArmes["SWORD1"].atk = 10;
        this.lstArmes["SWORD1"].name = "sword 1";
        this.lstArmes["SWORD1"].price = 500;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmes["SWORD1"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmes["SWORD1"].costIngredients;

        this.lstArmes["SWORD2"].imgIcon = new Sprite(this.lstImageLoader[17]);
        this.lstArmes["SWORD2"].bStyle = false;
        this.lstArmes["SWORD2"].atk = 18;
        this.lstArmes["SWORD2"].name = "sword 2";
        this.lstArmes["SWORD2"].price = 1250;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmes["SWORD2"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmes["SWORD2"].costIngredients;

        this.lstArmes["SWORD3"].imgIcon = new Sprite(this.lstImageLoader[18]);
        this.lstArmes["SWORD3"].bStyle = false;
        this.lstArmes["SWORD3"].atk = 25;
        this.lstArmes["SWORD3"].name = "sword 3";
        this.lstArmes["SWORD3"].price = 1900;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmes["SWORD3"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmes["SWORD3"].costIngredients;

        this.lstArmes["SWORD4"].imgIcon = new Sprite(this.lstImageLoader[19]);
        this.lstArmes["SWORD4"].bStyle = false;
        this.lstArmes["SWORD4"].atk = 41;
        this.lstArmes["SWORD4"].name = "sword 4";
        this.lstArmes["SWORD4"].price = 3000;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmes["SWORD4"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmes["SWORD4"].costIngredients;

        this.lstArmes["SWORD5"].imgIcon = new Sprite(this.lstImageLoader[20]);
        this.lstArmes["SWORD5"].bStyle = false;
        this.lstArmes["SWORD5"].atk = 57;
        this.lstArmes["SWORD5"].name = "sword 5";
        this.lstArmes["SWORD5"].price = 4100;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmes["SWORD5"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmes["SWORD5"].costIngredients;

        this.lstArmes["SWORD6"].imgIcon = new Sprite(this.lstImageLoader[21]);
        this.lstArmes["SWORD6"].bStyle = false;
        this.lstArmes["SWORD6"].atk = 70;
        this.lstArmes["SWORD6"].name = "sword 6";
        this.lstArmes["SWORD6"].price = 5500;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmes["SWORD6"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmes["SWORD6"].costIngredients;

        this.lstArmes["SWORD7"].imgIcon = new Sprite(this.lstImageLoader[22]);
        this.lstArmes["SWORD7"].bStyle = false;
        this.lstArmes["SWORD7"].atk = 85;
        this.lstArmes["SWORD7"].name = "sword 7";
        this.lstArmes["SWORD7"].price = 7450;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmes["SWORD7"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmes["SWORD7"].costIngredients;

        this.lstArmes["SWORD8"].imgIcon = new Sprite(this.lstImageLoader[23]);
        this.lstArmes["SWORD8"].bStyle = false;
        this.lstArmes["SWORD8"].atk = 100;
        this.lstArmes["SWORD8"].name = "sword 8";
        this.lstArmes["SWORD8"].price = 10500;
        // NO_ACQUIRED ensuite ACQUIRED ensuite EQUIP
        this.lstArmes["SWORD8"].isAcquis = "NO_ACQUIRED"
        //cette partie la a voir ...
        this.lstArmes["SWORD8"].costIngredients;

    }

    SectionArmors(dt) {
        if (mouse_x >= 300 && mouse_x <= 300 + 100 && mouse_y >= this.lstSprite[0].y+15 && mouse_y <= this.lstSprite[0].y+15 + 30) {
            if (Hero.gold >= this.lstArmures["ARMOR1"].price && this.lstArmures["ARMOR1"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'armure 1");
                this.lstArmures["ARMOR1"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmures["ARMOR1"].price;
                return;
            }
            else if (this.lstArmures["ARMOR1"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "ARMOR"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmures[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmures[i].isAcquis = "ACQUIRED";
                        Hero.def -= this.lstArmures[i].def;
                    }
                }
                console.log("Je m'équipe de l'armure 1");
                Hero.def += this.lstArmures["ARMOR1"].def;
                this.lstArmures["ARMOR1"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmures["ARMOR1"].isAcquis == "EQUIP") {
                console.log("Je retire l'armure 1");
                Hero.def -= this.lstArmures["ARMOR1"].def;
                this.lstArmures["ARMOR1"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 300 && mouse_x <= 300 + 100 && mouse_y >= this.lstSprite[1].y+15 && mouse_y <= this.lstSprite[1].y+15 + 30) {
            if (Hero.gold >= this.lstArmures["ARMOR2"].price && this.lstArmures["ARMOR2"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'armure 2");
                this.lstArmures["ARMOR2"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmures["ARMOR2"].price;
                return;
            }
            else if (this.lstArmures["ARMOR2"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "ARMOR"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmures[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmures[i].isAcquis = "ACQUIRED";
                        Hero.def -= this.lstArmures[i].def;
                    }
                }
                console.log("Je m'équipe de l'armure 2");
                Hero.def += this.lstArmures["ARMOR2"].def;
                this.lstArmures["ARMOR2"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmures["ARMOR2"].isAcquis == "EQUIP") {
                console.log("Je retire l'armure 2");
                Hero.def -= this.lstArmures["ARMOR2"].def;
                this.lstArmures["ARMOR2"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 300 && mouse_x <= 300 + 100 && mouse_y >= this.lstSprite[2].y+15 && mouse_y <= this.lstSprite[2].y+15 + 30) {
            if (Hero.gold >= this.lstArmures["ARMOR3"].price && this.lstArmures["ARMOR3"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'armure 3");
                this.lstArmures["ARMOR3"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmures["ARMOR3"].price;
                return;
            }
            else if (this.lstArmures["ARMOR3"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "ARMOR"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmures[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmures[i].isAcquis = "ACQUIRED";
                        Hero.def -= this.lstArmures[i].def;
                    }
                }
                console.log("Je m'équipe de l'armure 3");
                Hero.def += this.lstArmures["ARMOR3"].def;
                this.lstArmures["ARMOR3"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmures["ARMOR3"].isAcquis == "EQUIP") {
                console.log("Je retire l'armure 3");
                Hero.def -= this.lstArmures["ARMOR3"].def;
                this.lstArmures["ARMOR3"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 300 && mouse_x <= 300 + 100 && mouse_y >= this.lstSprite[3].y+15 && mouse_y <= this.lstSprite[3].y+15 + 30) {
            if (Hero.gold >= this.lstArmures["ARMOR4"].price && this.lstArmures["ARMOR4"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'armure 4");
                this.lstArmures["ARMOR4"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmures["ARMOR4"].price;
                return;
            }
            else if (this.lstArmures["ARMOR4"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "ARMOR"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmures[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmures[i].isAcquis = "ACQUIRED";
                        Hero.def -= this.lstArmures[i].def;
                    }
                }
                console.log("Je m'équipe de l'armure 4");
                Hero.def += this.lstArmures["ARMOR4"].def;
                this.lstArmures["ARMOR4"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmures["ARMOR4"].isAcquis == "EQUIP") {
                console.log("Je retire l'armure 4");
                Hero.def -= this.lstArmures["ARMOR4"].def;
                this.lstArmures["ARMOR4"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 300 && mouse_x <= 300 + 100 && mouse_y >= this.lstSprite[4].y+15 && mouse_y <= this.lstSprite[4].y+15 + 30) {
            if (Hero.gold >= this.lstArmures["ARMOR5"].price && this.lstArmures["ARMOR5"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'armure 5");
                this.lstArmures["ARMOR5"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmures["ARMOR5"].price;
                return;
            }
            else if (this.lstArmures["ARMOR5"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "ARMOR"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmures[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmures[i].isAcquis = "ACQUIRED";
                        Hero.def -= this.lstArmures[i].def;
                    }
                }
                console.log("Je m'équipe de l'armure 5");
                Hero.def += this.lstArmures["ARMOR5"].def;
                this.lstArmures["ARMOR5"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmures["ARMOR5"].isAcquis == "EQUIP") {
                console.log("Je retire l'armure 5");
                Hero.def -= this.lstArmures["ARMOR5"].def;
                this.lstArmures["ARMOR5"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 300 && mouse_x <= 300 + 100 && mouse_y >= this.lstSprite[5].y+15 && mouse_y <= this.lstSprite[5].y+15 + 30) {
            if (Hero.gold >= this.lstArmures["ARMOR6"].price && this.lstArmures["ARMOR6"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'armure 6");
                this.lstArmures["ARMOR6"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmures["ARMOR6"].price;
                return;
            }
            else if (this.lstArmures["ARMOR6"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "ARMOR"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmures[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmures[i].isAcquis = "ACQUIRED";
                        Hero.def -= this.lstArmures[i].def;
                    }
                }
                console.log("Je m'équipe de l'armure 6");
                Hero.def += this.lstArmures["ARMOR6"].def;
                this.lstArmures["ARMOR6"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmures["ARMOR6"].isAcquis == "EQUIP") {
                console.log("Je retire l'armure 6");
                Hero.def -= this.lstArmures["ARMOR6"].def;
                this.lstArmures["ARMOR6"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 300 && mouse_x <= 300 + 100 && mouse_y >= this.lstSprite[6].y+15 && mouse_y <= this.lstSprite[6].y+15 + 30) {
            if (Hero.gold >= this.lstArmures["ARMOR7"].price && this.lstArmures["ARMOR7"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'armure 7");
                this.lstArmures["ARMOR7"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmures["ARMOR7"].price;
                return;
            }
            else if (this.lstArmures["ARMOR7"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "ARMOR"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmures[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmures[i].isAcquis = "ACQUIRED";
                        Hero.def -= this.lstArmures[i].def;
                    }
                }
                console.log("Je m'équipe de l'armure 7");
                Hero.def += this.lstArmures["ARMOR7"].def;
                this.lstArmures["ARMOR7"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmures["ARMOR7"].isAcquis == "EQUIP") {
                console.log("Je retire l'armure 7");
                Hero.def -= this.lstArmures["ARMOR7"].def;
                this.lstArmures["ARMOR7"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 300 && mouse_x <= 300 + 100 && mouse_y >= this.lstSprite[7].y+15 && mouse_y <= this.lstSprite[7].y+15 + 30) {
            if (Hero.gold >= this.lstArmures["ARMOR8"].price && this.lstArmures["ARMOR8"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'armure 8");
                this.lstArmures["ARMOR8"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmures["ARMOR8"].price;
                return;
            }
            else if (this.lstArmures["ARMOR8"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "ARMOR"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmures[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmures[i].isAcquis = "ACQUIRED";
                        Hero.def -= this.lstArmures[i].def;
                    }
                }
                console.log("Je m'équipe de l'armure 8");
                Hero.def += this.lstArmures["ARMOR8"].def;
                this.lstArmures["ARMOR8"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmures["ARMOR8"].isAcquis == "EQUIP") {
                console.log("Je retire l'armure 8");
                Hero.def -= this.lstArmures["ARMOR8"].def;
                this.lstArmures["ARMOR8"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
    }

    SectionSwords(dt) {
        if (mouse_x >= 855 && mouse_x <= 855 + 100 && mouse_y >= this.lstSprite[0].y+15 && mouse_y <= this.lstSprite[0].y+15 + 30) {
            if (Hero.gold >= this.lstArmes["SWORD1"].price && this.lstArmes["SWORD1"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'arme 1");
                this.lstArmes["SWORD1"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmes["SWORD1"].price;
                return;
            }
            else if (this.lstArmes["SWORD1"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "SWORD"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmes[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmes[i].isAcquis = "ACQUIRED";
                        Hero.atk -= this.lstArmes[i].atk;
                    }
                }
                console.log("Je m'équipe de l'arme 1");
                Hero.atk += this.lstArmes["SWORD1"].atk;
                this.lstArmes["SWORD1"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmes["SWORD1"].isAcquis == "EQUIP") {
                console.log("Je retire l'arme 1");
                Hero.atk -= this.lstArmes["SWORD1"].atk;
                this.lstArmes["SWORD1"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 855 && mouse_x <= 855 + 100 && mouse_y >= this.lstSprite[1].y+15 && mouse_y <= this.lstSprite[1].y+15 + 30) {
            if (Hero.gold >= this.lstArmes["SWORD2"].price && this.lstArmes["SWORD2"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'arme 2");
                this.lstArmes["SWORD2"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmes["SWORD2"].price;
                return;
            }
            else if (this.lstArmes["SWORD2"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "SWORD"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmes[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmes[i].isAcquis = "ACQUIRED";
                        Hero.atk -= this.lstArmes[i].atk;
                    }
                }
                console.log("Je m'équipe de l'arme 2");
                Hero.atk += this.lstArmes["SWORD2"].atk;
                this.lstArmes["SWORD2"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmes["SWORD2"].isAcquis == "EQUIP") {
                console.log("Je retire l'arme 2");
                Hero.atk -= this.lstArmes["SWORD2"].atk;
                this.lstArmes["SWORD2"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 855 && mouse_x <= 855 + 100 && mouse_y >= this.lstSprite[2].y+15 && mouse_y <= this.lstSprite[2].y+15 + 30) {
            if (Hero.gold >= this.lstArmes["SWORD3"].price && this.lstArmes["SWORD3"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'arme 3");
                this.lstArmes["SWORD3"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmes["SWORD3"].price;
                return;
            }
            else if (this.lstArmes["SWORD3"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "SWORD"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmes[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmes[i].isAcquis = "ACQUIRED";
                        Hero.atk -= this.lstArmes[i].atk;
                    }
                }
                console.log("Je m'équipe de l'arme 3");
                Hero.atk += this.lstArmes["SWORD3"].atk;
                this.lstArmes["SWORD3"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmes["SWORD3"].isAcquis == "EQUIP") {
                console.log("Je retire l'arme 3");
                Hero.atk -= this.lstArmes["SWORD3"].atk;
                this.lstArmes["SWORD3"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 855 && mouse_x <= 855 + 100 && mouse_y >= this.lstSprite[3].y+15 && mouse_y <= this.lstSprite[3].y+15 + 30) {
            if (Hero.gold >= this.lstArmes["SWORD4"].price && this.lstArmes["SWORD4"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'arme 4");
                this.lstArmes["SWORD4"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmes["SWORD4"].price;
                return;
            }
            else if (this.lstArmes["SWORD4"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "SWORD"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmes[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmes[i].isAcquis = "ACQUIRED";
                        Hero.atk -= this.lstArmes[i].atk;
                    }
                }
                console.log("Je m'équipe de l'arme 4");
                Hero.atk += this.lstArmes["SWORD4"].atk;
                this.lstArmes["SWORD4"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmes["SWORD4"].isAcquis == "EQUIP") {
                console.log("Je retire l'arme 4");
                Hero.atk -= this.lstArmes["SWORD4"].atk;
                this.lstArmes["SWORD4"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 855 && mouse_x <= 855 + 100 && mouse_y >= this.lstSprite[4].y+15 && mouse_y <= this.lstSprite[4].y+15 + 30) {
            if (Hero.gold >= this.lstArmes["SWORD5"].price && this.lstArmes["SWORD5"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'arme 5");
                this.lstArmes["SWORD5"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmes["SWORD5"].price;
                return;
            }
            else if (this.lstArmes["SWORD5"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "SWORD"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmes[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmes[i].isAcquis = "ACQUIRED";
                        Hero.atk -= this.lstArmes[i].atk;
                    }
                }
                console.log("Je m'équipe de l'arme 5");
                Hero.atk += this.lstArmes["SWORD5"].atk;
                this.lstArmes["SWORD5"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmes["SWORD5"].isAcquis == "EQUIP") {
                console.log("Je retire l'arme 5");
                Hero.atk -= this.lstArmes["SWORD5"].atk;
                this.lstArmes["SWORD5"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 855 && mouse_x <= 855 + 100 && mouse_y >= this.lstSprite[5].y+15 && mouse_y <= this.lstSprite[5].y+15 + 30) {
            if (Hero.gold >= this.lstArmes["SWORD6"].price && this.lstArmes["SWORD6"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'arme 6");
                this.lstArmes["SWORD6"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmes["SWORD6"].price;
                return;
            }
            else if (this.lstArmes["SWORD6"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "SWORD"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmes[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmes[i].isAcquis = "ACQUIRED";
                        Hero.atk -= this.lstArmes[i].atk;
                    }
                }
                console.log("Je m'équipe de l'arme 6");
                Hero.atk += this.lstArmes["SWORD6"].atk;
                this.lstArmes["SWORD6"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmes["SWORD6"].isAcquis == "EQUIP") {
                console.log("Je retire l'arme 6");
                Hero.atk -= this.lstArmes["SWORD6"].atk;
                this.lstArmes["SWORD6"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 855 && mouse_x <= 855 + 100 && mouse_y >= this.lstSprite[6].y+15 && mouse_y <= this.lstSprite[6].y+15 + 30) {
            if (Hero.gold >= this.lstArmes["SWORD7"].price && this.lstArmes["SWORD7"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'arme 7");
                this.lstArmes["SWORD7"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmes["SWORD7"].price;
                return;
            }
            else if (this.lstArmes["SWORD7"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "SWORD"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmes[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmes[i].isAcquis = "ACQUIRED";
                        Hero.atk -= this.lstArmes[i].atk;
                    }
                }
                console.log("Je m'équipe de l'arme 7");
                Hero.atk += this.lstArmes["SWORD7"].atk;
                this.lstArmes["SWORD7"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmes["SWORD7"].isAcquis == "EQUIP") {
                console.log("Je retire l'arme 7");
                Hero.atk -= this.lstArmes["SWORD7"].atk;
                this.lstArmes["SWORD7"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
        else if (mouse_x >= 855 && mouse_x <= 855 + 100 && mouse_y >= this.lstSprite[7].y+15 && mouse_y <= this.lstSprite[7].y+15 + 30) {
            if (Hero.gold >= this.lstArmes["SWORD8"].price && this.lstArmes["SWORD8"].isAcquis == "NO_ACQUIRED") {
                console.log("J'achete l'arme 8");
                this.lstArmes["SWORD8"].isAcquis = "ACQUIRED";
                mouse_press = false;
                Hero.gold -= this.lstArmes["SWORD8"].price;
                return;
            }
            else if (this.lstArmes["SWORD8"].isAcquis == "ACQUIRED") {
                for (let index = 1; index < 9; index++) {
                    const i = "SWORD"+index;
                    console.log("l'index avant la conditions "+i);
                    if (this.lstArmes[i].isAcquis == "EQUIP") {
                        console.log(i);
                        this.lstArmes[i].isAcquis = "ACQUIRED";
                        Hero.atk -= this.lstArmes[i].atk;
                    }
                }
                console.log("Je m'équipe de l'arme 8");
                Hero.atk += this.lstArmes["SWORD8"].atk;
                this.lstArmes["SWORD8"].isAcquis = "EQUIP";
                mouse_press = false;
                return;
            }
            else if (this.lstArmes["SWORD8"].isAcquis == "EQUIP") {
                console.log("Je retire l'arme 8");
                Hero.atk -= this.lstArmes["SWORD8"].atk;
                this.lstArmes["SWORD8"].isAcquis = "ACQUIRED";
                mouse_press = false;
                return;
            }
        }
    }

    update(dt) {
        if (mouse_press) {
            this.SectionArmors(dt);
            this.SectionSwords(dt);
        }
    }

    draw(pCtx) {
        this.lstSprite.forEach(spr => {
            spr.draw(pCtx);
        });

        //Affiche le prix des armors
        DrawText(pCtx, this.lstArmures["ARMOR1"].price + " Gold", 140, this.lstSprite[0].y+40);
        DrawText(pCtx, this.lstArmures["ARMOR2"].price + " Gold", 140, this.lstSprite[1].y+40);
        DrawText(pCtx, this.lstArmures["ARMOR3"].price + " Gold", 130, this.lstSprite[2].y+40);
        DrawText(pCtx, this.lstArmures["ARMOR4"].price + " Gold", 135, this.lstSprite[3].y+40);
        DrawText(pCtx, this.lstArmures["ARMOR5"].price + " Gold", 130, this.lstSprite[4].y+40);
        DrawText(pCtx, this.lstArmures["ARMOR6"].price + " Gold", 135, this.lstSprite[5].y+40);
        DrawText(pCtx, this.lstArmures["ARMOR7"].price + " Gold", 135, this.lstSprite[6].y+40);
        DrawText(pCtx, this.lstArmures["ARMOR8"].price + " Gold", 120, this.lstSprite[7].y+40);

        //bouton acheter des armors
        for (let index = 1; index < 9; index++) {
            const element = "ARMOR"+index;
            if (this.lstArmures[element].isAcquis == "NO_ACQUIRED") {
                DrawFillRect(pCtx, 300, this.lstSprite[index-1].y+15, 100, 30, "red", 0.85);
                DrawText(pCtx, "BUY !", 310, this.lstSprite[index-1].y+40);
            }
            else if(this.lstArmures[element].isAcquis == "ACQUIRED") {
                DrawFillRect(pCtx, 300, this.lstSprite[index-1].y+15, 100, 30, "yellow", 0.85);
                DrawText(pCtx, "ACQUIRED !", 310, this.lstSprite[index-1].y+40);
            }
            else if (this.lstArmures[element].isAcquis == "EQUIP") {
                DrawFillRect(pCtx, 300, this.lstSprite[index-1].y+15, 100, 30, "green", 0.85);
                DrawText(pCtx, "EQUIP !", 310, this.lstSprite[index-1].y+40);
            }
        }

        //Affiche le prix des swords
        DrawText(pCtx, this.lstArmes["SWORD1"].price + " Gold", 680, this.lstSprite[0].y+40);
        DrawText(pCtx, this.lstArmes["SWORD2"].price + " Gold", 680, this.lstSprite[1].y+40);
        DrawText(pCtx, this.lstArmes["SWORD3"].price + " Gold", 680, this.lstSprite[2].y+40);
        DrawText(pCtx, this.lstArmes["SWORD4"].price + " Gold", 680, this.lstSprite[3].y+40);
        DrawText(pCtx, this.lstArmes["SWORD5"].price + " Gold", 680, this.lstSprite[4].y+40);
        DrawText(pCtx, this.lstArmes["SWORD6"].price + " Gold", 680, this.lstSprite[5].y+40);
        DrawText(pCtx, this.lstArmes["SWORD7"].price + " Gold", 680, this.lstSprite[6].y+40);
        DrawText(pCtx, this.lstArmes["SWORD8"].price + " Gold", 670, this.lstSprite[7].y+40);

        //bouton acheter des swords
        for (let index = 1; index < 9; index++) {
            const element = "SWORD"+index;
            if (this.lstArmes[element].isAcquis == "NO_ACQUIRED") {
                DrawFillRect(pCtx, 855, this.lstSprite[index-1].y+15, 100, 30, "red", 0.85);
                DrawText(pCtx, "BUY !", 865, this.lstSprite[index-1].y+40);
            }
            else if(this.lstArmes[element].isAcquis == "ACQUIRED") {
                DrawFillRect(pCtx, 855, this.lstSprite[index-1].y+15, 100, 30, "yellow", 0.85);
                DrawText(pCtx, "ACQUIRED !", 865, this.lstSprite[index-1].y+40);
            }
            else if (this.lstArmes[element].isAcquis == "EQUIP") {
                DrawFillRect(pCtx, 855, this.lstSprite[index-1].y+15, 100, 30, "green", 0.85);
                DrawText(pCtx, "EQUIP !", 865, this.lstSprite[index-1].y+40);
            }
        }
        /*DrawFillRect(pCtx, 855, this.lstSprite[0].y+15, 100, 30, "red", 0.85);
        DrawText(pCtx, "BUY !", 865, this.lstSprite[0].y+40);
        DrawFillRect(pCtx, 855, this.lstSprite[1].y+15, 100, 30, "red", 0.85);
        DrawText(pCtx, "BUY !", 865, this.lstSprite[1].y+40);
        DrawFillRect(pCtx, 855, this.lstSprite[2].y+15, 100, 30, "red", 0.85);
        DrawText(pCtx, "BUY !", 865, this.lstSprite[2].y+40);
        DrawFillRect(pCtx, 855, this.lstSprite[3].y+15, 100, 30, "red", 0.85);
        DrawText(pCtx, "BUY !", 865, this.lstSprite[3].y+40);
        DrawFillRect(pCtx, 855, this.lstSprite[4].y+15, 100, 30, "red", 0.85);
        DrawText(pCtx, "BUY !", 865, this.lstSprite[4].y+40);
        DrawFillRect(pCtx, 855, this.lstSprite[5].y+15, 100, 30, "red", 0.85);
        DrawText(pCtx, "BUY !", 865, this.lstSprite[5].y+40);
        DrawFillRect(pCtx, 855, this.lstSprite[6].y+15, 100, 30, "red", 0.85);
        DrawText(pCtx, "BUY !", 865, this.lstSprite[6].y+40);
        DrawFillRect(pCtx, 855, this.lstSprite[7].y+15, 100, 30, "red", 0.85);
        DrawText(pCtx, "BUY !", 865, this.lstSprite[7].y+40); */
    }
}