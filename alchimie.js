class Alchimie {
    constructor() {
        //Gain en argent apres chaque lv up du batiment
        this.gainHouse = 0;
        this.imgIngredientsBrut = [];
        //Quantité par ingredient
        this.imgIngredientsBrut.number = [];
        this.imgIngredientsBrut.number[0] = 0;
        this.imgIngredientsBrut.number[1] = 0;
        this.imgIngredientsBrut.number[2] = 0;
        //Si le matos est dans le slot 
        this.imgIngredientsBrut.isSlot = [];
        this.imgIngredientsBrut.isSlot[0] = [];
        this.imgIngredientsBrut.isSlot[0][0] = false;
        this.imgIngredientsBrut.isSlot[0][1] = false;
        this.imgIngredientsBrut.isSlot[1] = [];
        this.imgIngredientsBrut.isSlot[1][0] = false;
        this.imgIngredientsBrut.isSlot[1][1] = false;
        this.imgIngredientsBrut.isSlot[2] = [];
        this.imgIngredientsBrut.isSlot[2][0] = false;
        this.imgIngredientsBrut.isSlot[2][1] = false;
        this.imgIngredients = [];

        //is slot true 
        this.isSlot = [];
        this.isSlot[0] = false;
        this.isSlot[1] = false;

        //sprite
        this.lstSprite = [];

        //spr ingredients elementaire
        this.sprIngredientsElementaires = [];
        // Si l'ingredient elementaire est selectionner
        this.sprIngredientsElementaires.isVisible = [];
        this.sprIngredientsElementaires.isVisible[0] = false;
        this.sprIngredientsElementaires.isVisible[1] = false;
        this.sprIngredientsElementaires.isVisible[2] = false;
        //Quantiter
        this.sprIngredientsElementaires.number = [];
        this.sprIngredientsElementaires.number[0] = 0;
        this.sprIngredientsElementaires.number[1] = 0;
        this.sprIngredientsElementaires.number[2] = 0;

        //spr ingredient brut
        this.sprIngredientsBruts = [];
    }

    load(pLoader) {
        //ingredients bruts
        this.imgIngredientsBrut[0] = pLoader.getLoadImage("images/item_brut_1_X3.png");
        this.imgIngredientsBrut[1] = pLoader.getLoadImage("images/item_brut_2_X3.png");
        this.imgIngredientsBrut[2] = pLoader.getLoadImage("images/item_brut_3_X3.png");

        this.lstSprite[0] = new Sprite(this.imgIngredientsBrut[0], 225, 400);
        this.lstSprite[1] = new Sprite(this.imgIngredientsBrut[1], 355, 400);
        this.lstSprite[2] = new Sprite(this.imgIngredientsBrut[2], 485, 400);

        this.sprIngredientsBruts[0] = new Sprite(this.imgIngredientsBrut[0]);
        this.sprIngredientsBruts[1] = new Sprite(this.imgIngredientsBrut[1]);
        this.sprIngredientsBruts[2] = new Sprite(this.imgIngredientsBrut[2]);

        //ingredients elementaires
        // 0 + 1 = 0
        this.imgIngredients[0] = pLoader.getLoadImage("images/item_elementaire_1_X3.png");
        // 0 + 2 = 1
        this.imgIngredients[1] = pLoader.getLoadImage("images/item_elementaire_2_X3.png");
        // 1 + 2 = 2
        this.imgIngredients[2] = pLoader.getLoadImage("images/item_elementaire_3_X3.png");

        this.sprIngredientsElementaires[0] = new Sprite(this.imgIngredients[0], 485, 150);
        this.sprIngredientsElementaires[1] = new Sprite(this.imgIngredients[1], 485, 150);
        this.sprIngredientsElementaires[2] = new Sprite(this.imgIngredients[2], 485, 150);
    }

    update(dt) {
        if (mouse_press) {
            //Pour Build
            if (mouse_x >= 240 && mouse_x <= 240 + 250 && mouse_y >= 265 && mouse_y <= 265 + 35) {
                if (this.isSlot[0] && this.isSlot[1]) {
                    if (this.sprIngredientsElementaires.isVisible[0]) {
                        console.log("Craft element 1");
                        this.sprIngredientsElementaires.number[0] ++;
                        this.isSlot[0] = false;
                        this.isSlot[1] = false;
                        this.imgIngredientsBrut.isSlot[0][0] = false;
                        this.imgIngredientsBrut.isSlot[0][1] = false;
                        this.imgIngredientsBrut.isSlot[1][0] = false;
                        this.imgIngredientsBrut.isSlot[1][1] = false;
                        this.imgIngredientsBrut.isSlot[2][0] = false;
                        this.imgIngredientsBrut.isSlot[2][1] = false;
                        this.sprIngredientsElementaires.isVisible[0] = false;
                        //Retire les ingredients brut concerner
                        this.imgIngredientsBrut.number[0] --;
                        this.imgIngredientsBrut.number[1] --;
                        mouse_press = false;
                        return;
                    }
                    else if (this.sprIngredientsElementaires.isVisible[1]) {
                        console.log("Craft element 2");
                        this.sprIngredientsElementaires.number[1] ++;
                        this.isSlot[0] = false;
                        this.isSlot[1] = false;
                        this.imgIngredientsBrut.isSlot[0][0] = false;
                        this.imgIngredientsBrut.isSlot[0][1] = false;
                        this.imgIngredientsBrut.isSlot[1][0] = false;
                        this.imgIngredientsBrut.isSlot[1][1] = false;
                        this.imgIngredientsBrut.isSlot[2][0] = false;
                        this.imgIngredientsBrut.isSlot[2][1] = false;
                        this.sprIngredientsElementaires.isVisible[1] = false;
                        //Retire les ingredients brut concerner
                        this.imgIngredientsBrut.number[0] --;
                        this.imgIngredientsBrut.number[2] --;
                        mouse_press = false;
                        return;
                    } 
                    else if (this.sprIngredientsElementaires.isVisible[2]) {
                        console.log("Craft element 3");
                        this.sprIngredientsElementaires.number[2] ++;
                        this.isSlot[0] = false;
                        this.isSlot[1] = false;
                        this.imgIngredientsBrut.isSlot[0][0] = false;
                        this.imgIngredientsBrut.isSlot[0][1] = false;
                        this.imgIngredientsBrut.isSlot[1][0] = false;
                        this.imgIngredientsBrut.isSlot[1][1] = false;
                        this.imgIngredientsBrut.isSlot[2][0] = false;
                        this.imgIngredientsBrut.isSlot[2][1] = false;
                        this.sprIngredientsElementaires.isVisible[2] = false;
                        //Retire les ingredients brut concerner
                        this.imgIngredientsBrut.number[1] --;
                        this.imgIngredientsBrut.number[2] --;
                        mouse_press = false;
                        return;
                    }
                }
            }
            //Pour placer les ingredients
            if (mouse_x >= 225 && mouse_x <= 225 + 70 && mouse_y >= 400 && mouse_y <= 400 + 70) {
                if (this.imgIngredientsBrut.number[0] > 0) {
                    if (!this.imgIngredientsBrut.isSlot[0][0] && !this.imgIngredientsBrut.isSlot[0][1]) {
                        if (!this.imgIngredientsBrut.isSlot[0][0] && !this.isSlot[0]) {
                            console.log("item 1 de emplacement 1"); 
                            //Deplace l'item
                            this.sprIngredientsBruts[0].x = 225;
                            this.sprIngredientsBruts[0].y = 150;

                            this.imgIngredientsBrut.isSlot[0][0] = true;
                            this.isSlot[0] = true;
                            mouse_press = false;
                            return;
                        }
                        else if (!this.imgIngredientsBrut.isSlot[0][1] && !this.isSlot[1]) {
                            console.log("item 1 de emplacement 2"); 
                            //Deplace l'item
                            this.sprIngredientsBruts[0].x = 355;
                            this.sprIngredientsBruts[0].y = 150;

                            this.imgIngredientsBrut.isSlot[0][1] = true;
                            this.isSlot[1] = true;
                            mouse_press = false;
                            return;
                        }
                    } 
                }
            }
            else if (mouse_x >= 355 && mouse_x <= 355 + 70 && mouse_y >= 400 && mouse_y <= 400 + 70) {
                if (this.imgIngredientsBrut.number[1] > 0) {
                    if (!this.imgIngredientsBrut.isSlot[1][0] && !this.imgIngredientsBrut.isSlot[1][1]) {
                        if (!this.imgIngredientsBrut.isSlot[1][0] && !this.isSlot[0]) {
                            console.log("item 2 de emplacement 1"); 
                            //Deplace l'item
                            this.sprIngredientsBruts[1].x = 225;
                            this.sprIngredientsBruts[1].y = 150;
                            this.imgIngredientsBrut.isSlot[1][0] = true;
                            this.isSlot[0] = true;
                            mouse_press = false;
                            return;
                        }
                        else if (!this.imgIngredientsBrut.isSlot[1][1] && !this.isSlot[1]) {
                            console.log("item 2 de emplacement 2"); 
                            //Deplace l'item
                            this.sprIngredientsBruts[1].x = 355;
                            this.sprIngredientsBruts[1].y = 150;
                            this.imgIngredientsBrut.isSlot[1][1] = true;
                            this.isSlot[1] = true;
                            mouse_press = false;
                            return;
                        }
                    }
                }
            }
            else if (mouse_x >= 485 && mouse_x <= 485 + 70 && mouse_y >= 400 && mouse_y <= 400 + 70) {
                if (this.imgIngredientsBrut.number[2] > 0) {
                    if (!this.imgIngredientsBrut.isSlot[2][0] && !this.imgIngredientsBrut.isSlot[2][1]) {
                        if (!this.imgIngredientsBrut.isSlot[2][0] && !this.isSlot[0]) {
                            console.log("item 3 de emplacement 1");
                            //Deplace l'item
                            this.sprIngredientsBruts[2].x = 225;
                            this.sprIngredientsBruts[2].y = 150; 
                            this.imgIngredientsBrut.isSlot[2][0] = true;
                            this.isSlot[0] = true;
                            mouse_press = false;
                            return;
                        }
                        else if (!this.imgIngredientsBrut.isSlot[2][1] && !this.isSlot[1]) {
                            console.log("item 3 de emplacement 2"); 
                            //Deplace l'item
                            this.sprIngredientsBruts[2].x = 355;
                            this.sprIngredientsBruts[2].y = 150;
                            this.imgIngredientsBrut.isSlot[2][1] = true;
                            this.isSlot[1] = true;
                            mouse_press = false;
                            return;
                        }
                    }
                }
            }
        }
    }

    draw(pCtx) {
        DrawFillRect(pCtx, 225, 150, 70, 70, "black");
        DrawText(pCtx, "+", 320, 200);
        DrawFillRect(pCtx, 355, 150, 70, 70, "black");
        DrawText(pCtx, "=", 450, 200);
        DrawFillRect(pCtx, 485, 150, 70, 70, "black");
        DrawText(pCtx, "<--- Your alchimie ", 600, 200);

        DrawFillRect(pCtx, 485, 400, 70, 70, "black");
        DrawFillRect(pCtx, 355, 400, 70, 70, "black");
        DrawFillRect(pCtx, 225, 400, 70, 70, "black");
        DrawText(pCtx, "<--- Your bag ", 600, 455);

        //bouton build
        DrawFillRect(pCtx, 240, 265, 250, 30, "green")
        DrawText(pCtx, "BUILD !", 325, 285);

        //sprite
        this.lstSprite.forEach(spr => {
            spr.draw(pCtx);
        });
        DrawText(pCtx, this.imgIngredientsBrut.number[0], 225, 420); 
        DrawText(pCtx, this.imgIngredientsBrut.number[1], 355, 420); 
        DrawText(pCtx, this.imgIngredientsBrut.number[2], 485, 420); 

        //Afficher les ingredients bruts aux niveaux des cases à craft
        if (this.imgIngredientsBrut.isSlot[0][0] && this.isSlot[0]) {
            this.sprIngredientsBruts[0].x = 225;
            this.sprIngredientsBruts[0].y = 150;
            this.sprIngredientsBruts[0].draw(pCtx);
        }
        else if (this.imgIngredientsBrut.isSlot[0][1] && this.isSlot[1]) {
            this.sprIngredientsBruts[0].x = 355;
            this.sprIngredientsBruts[0].y = 150;
            this.sprIngredientsBruts[0].draw(pCtx);
        }

        if (this.imgIngredientsBrut.isSlot[1][0] && this.isSlot[0]) {
            this.sprIngredientsBruts[1].x = 225;
            this.sprIngredientsBruts[1].y = 150;
            this.sprIngredientsBruts[1].draw(pCtx);
        }
        else if (this.imgIngredientsBrut.isSlot[1][1] && this.isSlot[1]) {
            this.sprIngredientsBruts[1].x = 355;
            this.sprIngredientsBruts[1].y = 150;
            this.sprIngredientsBruts[1].draw(pCtx);
        }

        if (this.imgIngredientsBrut.isSlot[2][0] && this.isSlot[0]) {
            this.sprIngredientsBruts[2].x = 225;
            this.sprIngredientsBruts[2].y = 150;
            this.sprIngredientsBruts[2].draw(pCtx);
        }
        else if (this.imgIngredientsBrut.isSlot[2][1] && this.isSlot[1]) {
            this.sprIngredientsBruts[2].x = 355;
            this.sprIngredientsBruts[2].y = 150;
            this.sprIngredientsBruts[2].draw(pCtx);
        }

        //Resultat
        if (this.imgIngredientsBrut.isSlot[0][0] || this.imgIngredientsBrut.isSlot[0][1]) {
            if (this.imgIngredientsBrut.isSlot[1][0] || this.imgIngredientsBrut.isSlot[1][1]) {
                this.sprIngredientsElementaires.isVisible[0] = true;
                this.sprIngredientsElementaires[0].x = 485;
                this.sprIngredientsElementaires[0].y = 150;
                this.sprIngredientsElementaires[0].draw(pCtx);
            }
        }
        
        if (this.imgIngredientsBrut.isSlot[0][0] || this.imgIngredientsBrut.isSlot[0][1]) {
            if (this.imgIngredientsBrut.isSlot[2][0] || this.imgIngredientsBrut.isSlot[2][1]) {
                this.sprIngredientsElementaires.isVisible[1] = true;
                this.sprIngredientsElementaires[1].x = 485;
                this.sprIngredientsElementaires[1].y = 150;
                this.sprIngredientsElementaires[1].draw(pCtx);
            }
        }

        if (this.imgIngredientsBrut.isSlot[1][0] || this.imgIngredientsBrut.isSlot[1][1]) {
            if (this.imgIngredientsBrut.isSlot[2][0] || this.imgIngredientsBrut.isSlot[2][1]) {
                this.sprIngredientsElementaires.isVisible[2] = true;
                this.sprIngredientsElementaires[2].x = 485;
                this.sprIngredientsElementaires[2].y = 150;
                this.sprIngredientsElementaires[2].draw(pCtx);
            }
        }
    }
}