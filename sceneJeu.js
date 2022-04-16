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
    }

    load(pLoader) {
        this.lstImgLoader["MAP_QG"] = pLoader.getLoadImage("images/map.png");
        this.lstImgLoader["ANNULE"] = pLoader.getLoadImage("images/anul.png");
        this.lstSprite[0] = new Sprite(this.lstImgLoader["MAP_QG"]);
        this.sprAnnule = new Sprite(this.lstImgLoader["ANNULE"], 25, 25);
    }

    update(dt) {
        animeRectHouse(dt);

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
                house.isOpen["DONJON"] = true;
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
        if (house.isOpen["HOTEL"] || house.isOpen["SHOP"] || house.isOpen["ALCHIMIE"] || house.isOpen["DONJON"] || house.isOpen["MAIRIE"]) {
            if (mouse_press && mouse_x >= this.sprAnnule.x && mouse_x <= this.sprAnnule.x + 80 && mouse_y >= this.sprAnnule.y && mouse_y <= this.sprAnnule.y + 80) {
                house.isOpen["HOTEL"] = false;
                house.isOpen["SHOP"] = false;
                house.isOpen["ALCHIMIE"] = false;
                house.isOpen["DONJON"] = false;
                house.isOpen["MAIRIE"] = false;
                mouse_press = false;
            }
        }
    }

    draw(pCtx) {
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
        else if (house.isOpen["DONJON"]) {
            DrawFillRect(pCtx, 25, 25, canvas.width-50, canvas.height-50, "blue", 0.7);
            DrawText(pCtx, "Donjon", (canvas.width/2)-35, 50);
            this.sprAnnule.draw(pCtx);
        }
        else if (house.isOpen["MAIRIE"]) {
            DrawFillRect(pCtx, 25, 25, canvas.width-50, canvas.height-50, "blue", 0.7);
            DrawText(pCtx, "City hall", (canvas.width/2)-35, 50);
            this.sprAnnule.draw(pCtx);
        }
    }
}