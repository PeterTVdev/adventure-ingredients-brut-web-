class Hotel {
    constructor() {
        //Gain en argent apres chaque lv up du batiment
        this.gainHouse = 0;
        
        this.cost = [];
        this.cost[0] = 100;
        this.cost[1] = 300;

        //Charge les img
        this.imgLoader = [];

        // Les images de coeurs
        this.imgHeart = [];
    }

    load(pLoader) {
      //  console.log("Chargement du load hotel");
      this.imgLoader[0] = pLoader.getLoadImage("images/coeur_1.png");
      this.imgLoader[1] = pLoader.getLoadImage("images/coeur_2.png");

      this.imgHeart[0] = [];
      this.imgHeart[0].current = 0;
      this.imgHeart[0][0] = new Sprite(this.imgLoader[0], 200, 200);
      this.imgHeart[0][1] = new Sprite(this.imgLoader[1], 200, 200);

      this.imgHeart[1] = [];
      this.imgHeart[1].current = 0;
      this.imgHeart[1][0] = new Sprite(this.imgLoader[0], 650, 200);
      this.imgHeart[1][1] = new Sprite(this.imgLoader[1], 650, 200);
    }

    animeHearts(dt) {
        if (mouse_x >= 200 && mouse_x <= 200 + 200 && mouse_y >= 200 && mouse_y <= 200 + 250) {
            this.imgHeart[0].current = 1;
        } else {
            this.imgHeart[0].current = 0;
        }

        if (mouse_x >= 650 && mouse_x <= 650 + 200 && mouse_y >= 200 && mouse_y <= 200 + 250) {
            this.imgHeart[1].current = 1;
        } else {
            this.imgHeart[1].current = 0;
        }
    }

    update(dt) {
        this.animeHearts(dt);
       // console.log("Update de l'hotel");
        if (mouse_press) {
            if (mouse_x >= 200 && mouse_x <= 200 + 200 && mouse_y >= 200 && mouse_y <= 200 + 250) {
                if (Hero.gold >= this.cost[0]) {
                    console.log("Je soigne à 50%");
                    Hero.life += Hero.lifeMax/2;
                    if (Hero.life >= Hero.lifeMax) {
                        Hero.life = Hero.lifeMax;
                    }
                    Hero.fatigue -= 50;
                    if (Hero.fatigue <= 0) {
                        Hero.fatigue = 0;
                    }
                    Hero.gold -= this.cost[0];
                    mouse_press = false;
                    return;
                } 
            }
            else if (mouse_x >= 650 && mouse_x <= 650 + 200 && mouse_y >= 200 && mouse_y <= 200 + 250) {
                if (Hero.gold >= this.cost[1]) {
                    console.log("Je soigne à 100%");
                    Hero.life += Hero.lifeMax;
                    if (Hero.life >= Hero.lifeMax) {
                        Hero.life = Hero.lifeMax;
                    }
                    Hero.fatigue -= 100;
                    if (Hero.fatigue <= 0) {
                        Hero.fatigue = 0;
                    }
                    Hero.gold -= this.cost[1];
                    mouse_press = false;
                    return;
                }
            }
        }
    }

    draw(pCtx) {
      //  console.log("Draw de l'hotel");
      DrawFillRect(pCtx, 200, 200, 200, 250, "pink");
      //coeurs
      this.imgHeart[0][this.imgHeart[0].current].draw(pCtx);
      for (let index = 0; index < 10; index++) {
        DrawText(pCtx, "click here to restore", 210, 310);
        DrawText(pCtx, "50% of your tired", 225, 335); 
      }
      DrawText(pCtx, "price : " + this.cost[0] + " Gold", 215, 470);
      
      DrawFillRect(pCtx, 650, 200, 200, 250, "pink");
      //coeurs
      this.imgHeart[1][this.imgHeart[1].current].draw(pCtx);
      for (let index = 0; index < 10; index++) {
        DrawText(pCtx, "click here to restore", 660, 310);
        DrawText(pCtx, "100% of your tired", 675, 335); 
      }
      DrawText(pCtx, "price : " + this.cost[1] + " Gold", 665, 470);
    }
}