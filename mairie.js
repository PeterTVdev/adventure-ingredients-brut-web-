class Mairie {
    constructor() {
        this.levelBatiment = [];
        this.levelBatiment["SHOP"] = 1;
        this.levelBatiment["ALCHIMIE"] = 1;
        this.levelBatiment["HOTEL"] = 1;

        this.imgLoader = [];

        this.sprIngredients = [];
        this.sprIngredients[0] = [];
        this.sprIngredients[1] = [];
        this.sprIngredients[2] = [];

        this.price = [];
        this.price["SHOP"] = 500; 
        this.price["ALCHIMIE"] = 500; 
        this.price["HOTEL"] = 500; 
    }

    load(pLoader) {
        this.imgLoader[0] = pLoader.getLoadImage("images/item_elementaire_1_X3.png");
        this.imgLoader[1] = pLoader.getLoadImage("images/item_elementaire_2_X3.png");
        this.imgLoader[2] = pLoader.getLoadImage("images/item_elementaire_3_X3.png");

        this.sprIngredients[0][0] = new Sprite(this.imgLoader[0], 700, 165);
        this.sprIngredients[0][1] = new Sprite(this.imgLoader[0], 700, 265);
        this.sprIngredients[1][0] = new Sprite(this.imgLoader[1], 750, 165);
        this.sprIngredients[1][1] = new Sprite(this.imgLoader[1], 700, 365);
        this.sprIngredients[2][0] = new Sprite(this.imgLoader[2], 750, 265);
        this.sprIngredients[2][1] = new Sprite(this.imgLoader[2], 750, 365);
    }

    update(dt) {
        if (mouse_press) {
            if (mouse_x >= 350 && mouse_x <= 350 + 200 && mouse_y >= 170 && mouse_y <= 170 + 50) {
                if (Hero.gold >= this.price["SHOP"] && this.levelBatiment["SHOP"] != 10) {
                    if (theAlchimie.sprIngredientsElementaires.number[0] >= 1 && theAlchimie.sprIngredientsElementaires.number[1] >= 1) {
                        console.log("button 1");
                        this.levelBatiment["SHOP"] ++;
                        Hero.gold -= this.price["SHOP"];
                        theAlchimie.sprIngredientsElementaires.number[0] --;
                        theAlchimie.sprIngredientsElementaires.number[1] --;
                        this.price["SHOP"] += 1000;
                        mouse_press = false;
                        return;
                    }
                }
            }
            else if (mouse_x >= 350 && mouse_x <= 350 + 200 && mouse_y >= 270 && mouse_y <= 270 + 50) {
                if (Hero.gold >= this.price["HOTEL"] && this.levelBatiment["HOTEL"] != 10) {
                    if (theAlchimie.sprIngredientsElementaires.number[0] >= 1 && theAlchimie.sprIngredientsElementaires.number[2] >= 1) {
                        console.log("button 2");
                        this.levelBatiment["HOTEL"] ++;
                        Hero.gold -= this.price["HOTEL"];
                        theAlchimie.sprIngredientsElementaires.number[0] --;
                        theAlchimie.sprIngredientsElementaires.number[2] --;
                        this.price["HOTEL"] += 1000;
                        mouse_press = false;
                        return;
                    }
                }
            }
            else if (mouse_x >= 350 && mouse_x <= 350 + 200 && mouse_y >= 370 && mouse_y <= 370 + 50) {
                if (Hero.gold >= this.price["ALCHIMIE"] && this.levelBatiment["ALCHIMIE"] != 10) {
                    if (theAlchimie.sprIngredientsElementaires.number[1] >= 1 && theAlchimie.sprIngredientsElementaires.number[2] >= 1) {
                        console.log("button 3");
                        this.levelBatiment["ALCHIMIE"] ++;
                        Hero.gold -= this.price["ALCHIMIE"];
                        theAlchimie.sprIngredientsElementaires.number[1] --;
                        theAlchimie.sprIngredientsElementaires.number[2] --;
                        this.price["ALCHIMIE"] += 1000;
                        mouse_press = false;
                        return;
                    }
                }
            }
        }
    }

    draw(pCtx) {
        if (this.levelBatiment["SHOP"] != 10) {
            //shop
            DrawFillRect(pCtx, 350, 170, 200, 50, "green");
            DrawText(pCtx, "UPGRADE !", 385, 200);
            //Dessine les ingredients
            this.sprIngredients[0][0].draw(pCtx);
            this.sprIngredients[1][0].draw(pCtx);
            //Affiche le prix
            DrawText(pCtx, this.price["SHOP"] + " Gold", 850, 205);
        }
        
        if (this.levelBatiment["HOTEL"] != 10) {
            //hotel
            DrawFillRect(pCtx, 350, 270, 200, 50, "green");
            DrawText(pCtx, "UPGRADE !", 385, 300);
            //Dessine les ingredients
            this.sprIngredients[0][1].draw(pCtx);
            this.sprIngredients[2][0].draw(pCtx);
            //Affiche le prix
            DrawText(pCtx, this.price["HOTEL"] + " Gold", 850, 305);
        }

        if (this.levelBatiment["ALCHIMIE"] != 10) {
            //alchimie
            DrawFillRect(pCtx, 350, 370, 200, 50, "green");
            DrawText(pCtx, "UPGRADE !", 385, 400);
            //Dessine les ingredients
            this.sprIngredients[1][1].draw(pCtx);
            this.sprIngredients[2][1].draw(pCtx);
            //Affiche le prix
            DrawText(pCtx, this.price["ALCHIMIE"] + " Gold", 850, 405);
        }
        

        DrawText(pCtx, "Shop :   Level " + this.levelBatiment["SHOP"], 125, 200);
        DrawText(pCtx, "Hotel :   Level " + this.levelBatiment["HOTEL"], 125, 300);
        DrawText(pCtx, "Alchimie :   Level " + this.levelBatiment["ALCHIMIE"], 125, 400);

        DrawText(pCtx, "CONDITIONS", 745, 140);
    }
}