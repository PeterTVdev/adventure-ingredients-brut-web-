let Lvl3_Acomplie = false;

class Level_3 {
    constructor() {
        this.imgLoader = [];

        this.sprHero;
        this.sprBat = [];
        this.sprBoss;

        this.isFight = false;

        this.isRelance = false;

        this.loaderEnnemy = false;
    }

    RelanceNiveau() {
        this.ennemy_update();
        //Replace le hero
        this.sprHero.x = 1*TUILE_WIDTH;
        this.sprHero.y = 1*TUILE_HEIGHT;
        
        // Resupprime les chauves de la liste
        for (let i = 0; i < this.sprBat.length; i++) {
            this.sprBat.splice(i,i);
        }
        //Remet les chauve souries 
        this.sprBat[0] = new Sprite(this.imgLoader[1], 4*TUILE_WIDTH, 1*TUILE_HEIGHT);
        this.sprBat[1] = new Sprite(this.imgLoader[1], 10*TUILE_WIDTH, 1*TUILE_HEIGHT);
        this.sprBat[2] = new Sprite(this.imgLoader[1], 12*TUILE_WIDTH, 4*TUILE_HEIGHT);
        this.sprBat[3] = new Sprite(this.imgLoader[1], 10*TUILE_WIDTH, 6*TUILE_HEIGHT);
        this.sprBat[4] = new Sprite(this.imgLoader[1], 5*TUILE_WIDTH, 6*TUILE_HEIGHT);
        this.sprBat[5] = new Sprite(this.imgLoader[1], 1*TUILE_WIDTH, 4*TUILE_HEIGHT);
        this.sprBat[6] = new Sprite(this.imgLoader[1], 4*TUILE_WIDTH, 3*TUILE_HEIGHT);
        this.sprBat[7] = new Sprite(this.imgLoader[1], 8*TUILE_WIDTH, 4*TUILE_HEIGHT);
        this.sprBat[8] = new Sprite(this.imgLoader[1], 8*TUILE_WIDTH, 3*TUILE_HEIGHT);

        for (let index = 0; index < 9; index++) {
            this.sprBat[index].setTileSheet(32, 32);
            this.sprBat[index].setImageScale(2,2);
            this.sprBat[index].addAnimation("IDLE", [0,1,2], 0.2);
            this.sprBat[index].startAnimation("IDLE"); 
        }

        //Remet les pv du boss
        big_Boss.life = big_Boss.lifeMax;

        //Remet les pv des chauves souries
        Chauve_sourie.life = Chauve_sourie.lifeMax;

        this.isRelance = false;
    }

    load(pLoader) {
        this.imgLoader[0] = pLoader.getLoadImage("images/hero_sheet.png");
        this.imgLoader[1] = pLoader.getLoadImage("images/bat_left.png");
        this.imgLoader[2] = pLoader.getLoadImage("images/boss.png");

        //Dessine le hero
        this.sprHero = new Sprite(this.imgLoader[0], 1*TUILE_WIDTH, 1*TUILE_HEIGHT);
        this.sprHero.setTileSheet(46, 50);
        this.sprHero.addAnimation("IDLE", [24, 25, 26, 27, 28, 29, 30, 31], 0.1);
        this.sprHero.addAnimation("FIGHT", [10, 11, 12, 13], 0.1, false);
        this.sprHero.startAnimation("IDLE");

        //Dessine le boss
        this.sprBoss = new Sprite(this.imgLoader[2], 10*TUILE_WIDTH, 4*TUILE_HEIGHT);
        this.sprBoss.setTileSheet(64, 64);
        this.sprBoss.addAnimation("IDLE", [0,1,2,3,4,5], 0.1);
        this.sprBoss.startAnimation("IDLE");
        //Dessine Chauve sourie
        this.sprBat[0] = new Sprite(this.imgLoader[1], 4*TUILE_WIDTH, 1*TUILE_HEIGHT);
        this.sprBat[1] = new Sprite(this.imgLoader[1], 10*TUILE_WIDTH, 1*TUILE_HEIGHT);
        this.sprBat[2] = new Sprite(this.imgLoader[1], 12*TUILE_WIDTH, 4*TUILE_HEIGHT);
        this.sprBat[3] = new Sprite(this.imgLoader[1], 10*TUILE_WIDTH, 6*TUILE_HEIGHT);
        this.sprBat[4] = new Sprite(this.imgLoader[1], 5*TUILE_WIDTH, 6*TUILE_HEIGHT);
        this.sprBat[5] = new Sprite(this.imgLoader[1], 1*TUILE_WIDTH, 4*TUILE_HEIGHT);
        this.sprBat[6] = new Sprite(this.imgLoader[1], 4*TUILE_WIDTH, 3*TUILE_HEIGHT);
        this.sprBat[7] = new Sprite(this.imgLoader[1], 8*TUILE_WIDTH, 4*TUILE_HEIGHT);
        this.sprBat[8] = new Sprite(this.imgLoader[1], 8*TUILE_WIDTH, 3*TUILE_HEIGHT);


        for (let index = 0; index < 9; index++) {
            this.sprBat[index].setTileSheet(32, 32);
            this.sprBat[index].setImageScale(2,2);
            this.sprBat[index].addAnimation("IDLE", [0,1,2], 0.2);
            this.sprBat[index].startAnimation("IDLE"); 
        }
    }

    ennemy_update() {
        Chauve_sourie.addMechant(0, 23, 100, 50, 24, 90, 90, rnd(40, 50));
        big_Boss.addMechant(0, 39, 100, 100, 85, 180, 180, rnd(150, 200));
        this.loaderEnnemy = true; 
    }

    move_hero() {
        if (lstKeyCode["ArrowRight"] && !stop_right && this.sprHero.x / TUILE_WIDTH < MAP_WIDTH-1) {
            this.sprHero.x += TUILE_WIDTH;
            sndMoveHero.play();
            stop_right = true;
            robe_right = true;
        } 
        else if (!lstKeyCode["ArrowRight"]) {
            stop_right = false;
        }

        if (lstKeyCode["ArrowDown"] && !stop_down && this.sprHero.y / TUILE_HEIGHT < MAP_HEIGHT-1) {
            this.sprHero.y += TUILE_HEIGHT;
            sndMoveHero.play();
            stop_down = true;
            robe_down = true;
        } 
        else if (!lstKeyCode["ArrowDown"]) {
            stop_down = false;
        }

        if (lstKeyCode["ArrowLeft"] && !stop_left && this.sprHero.x > 0) {
            this.sprHero.x -= TUILE_WIDTH;
            sndMoveHero.play();
            stop_left = true;
            robe_left = true;
        } 
        else if (!lstKeyCode["ArrowLeft"]) {
            stop_left = false;
        }

        if (lstKeyCode["ArrowUp"] && !stop_up && this.sprHero.y > 0) {
            this.sprHero.y -= TUILE_HEIGHT;
            sndMoveHero.play();
            stop_up = true;
            robe_up = true;
        } 
        else if (!lstKeyCode["ArrowUp"]) {
            stop_up = false;
        }
    }

    update(dt) {
        if (this.isRelance) {
            this.RelanceNiveau();
        }

        //Anime bat
        this.sprBat.forEach(spr => {
            spr.update(dt);
        });

        //Anime le hero
        this.sprHero.update(dt);
        
        //Anime boss
        this.sprBoss.update(dt);

        //move hero
        let old_heroX = this.sprHero.x;
        let old_heroY = this.sprHero.y;
        if (!this.isFight) {
            this.move_hero();
        }

        if (Map[2][this.sprHero.y/TUILE_HEIGHT][this.sprHero.x/TUILE_WIDTH] == 0) {
            robe_right = false;
            robe_down = false;
            robe_left = false;
            robe_up = false;
            this.sprHero.x = old_heroX;
            this.sprHero.y = old_heroY;
        }

        //Verifie s'il croise un monstre
        for (let i = 0; i < this.sprBat.length; i++) {
            if (CheckCollision(this.sprHero.x, this.sprHero.y, 75, 75, this.sprBat[i].x, this.sprBat[i].y, 75, 75)) {
                this.sprHero.startAnimation("FIGHT");
                sndBatHurt.play();
                this.sprHero.x = old_heroX;
                this.sprHero.y = old_heroY;
                robe_fight = true;
                robe_right = false;
                robe_down = false;
                robe_left = false;
                robe_up = false;
                //Faudra revoir avec des console 
                Chauve_sourie.life -= (Hero.atk-Chauve_sourie.def);
                if (Chauve_sourie.life >= Chauve_sourie.lifeMax) {
                    Chauve_sourie.life = Chauve_sourie.lifeMax;
                }
                //console.log(Chauve_sourie.life);
                Hero.life -= (Chauve_sourie.atk-Hero.def);
                if (Hero.life >= Hero.lifeMax) {
                    Hero.life = Hero.lifeMax;
                }
                if (Chauve_sourie.life <= 0) {
                    sndBatDie.play();
                    //Reconpenses
                    Hero.xp += Chauve_sourie.xp;
                    Hero.gold += Chauve_sourie.gold;
                    if (Hero.xp >= Hero.xpMax) {
                        Hero.atk += rnd(2,5) + Hero.Level;
                        Hero.def += rnd(2,5) + Hero.Level;
                        Hero.lifeMax += 5 + (Hero.Level*3);
                        Hero.Level ++;
                        Hero.xp = 0;
                    }
                    //On supprime l'ennemie
                    this.sprBat.splice(i,1);
                    Chauve_sourie.life = Chauve_sourie.lifeMax; 
                }
            } 
        }

        //Verifie si il croise un boss
        if (CheckCollision(this.sprHero.x, this.sprHero.y, 75, 75, this.sprBoss.x, this.sprBoss.y, 75, 75)) {
            this.sprHero.startAnimation("FIGHT");
            sndBossHurt.play();
            this.sprHero.x = old_heroX;
            this.sprHero.y = old_heroY;
            robe_fight = true;
            robe_right = false;
            robe_down = false;
            robe_left = false;
            robe_up = false;
            //Faudra revoir avec des console 
            big_Boss.life -= (Hero.atk-big_Boss.def);
            if (big_Boss.life >= big_Boss.lifeMax) {
                big_Boss.life = big_Boss.lifeMax;
            }
            //console.log(Chauve_sourie.life);
            Hero.life -= (big_Boss.atk-Hero.def);
            if (Hero.life >= Hero.lifeMax) {
                Hero.life = Hero.lifeMax;
            }
            if (big_Boss.life <= 0) {
                Lvl3_Acomplie = true;
                console.log(Lvl3_Acomplie);
                //Reconpenses
                Hero.xp += big_Boss.xp;
                Hero.gold += big_Boss.gold;
                
                if (Hero.xp >= Hero.xpMax) {
                    Hero.atk += rnd(2,5) + Hero.Level;
                    Hero.def += rnd(2,5) + Hero.Level;
                    Hero.lifeMax += 5 + (Hero.Level*3);
                    Hero.Level ++;
                    Hero.xp = 0;
                }
            }
        } 

        //Verifie le nom de l'animation 
        if (this.sprHero.currentAnimation.name == "FIGHT") {
            this.isFight = true;
        } else {
            this.isFight = false;
        }
        //Si l'animation de fight s'arrete 
        if (this.sprHero.currentAnimation.end) {
            this.sprHero.startAnimation("IDLE");
        }

        if (Hero.life <= 0 || big_Boss.life <= 0) {
            this.isRelance = true;
        }
        //Charge les ennemy
        if (this.loaderEnnemy) {
            return;
        }
        this.ennemy_update();
    }

    draw(pCtx) {
        DrawFillRect(pCtx, this.sprHero.x, this.sprHero.y, 50*Hero.life/Hero.lifeMax, 5, "orange");
        this.sprHero.draw(pCtx);
        //Affiche les bats
        this.sprBat.forEach(spr => {
            DrawFillRect(pCtx, spr.x, spr.y, 15*Chauve_sourie.life/Chauve_sourie.lifeMax, 5, "red");
            spr.draw(pCtx);
        });
        //Affiche le boss
        DrawFillRect(pCtx, this.sprBoss.x, this.sprBoss.y, 65*big_Boss.life/big_Boss.lifeMax, 5, "red");
        this.sprBoss.draw(pCtx);
    }
}