//musique de fond
let myAudio = new Audio("sons/love_song.wav"); 
if (typeof myAudio.loop == 'boolean') {
       myAudio.loop = true;
}
myAudio.volume = 0.3;

let imageLoad = new ImageLoader();

let scene_menu = new SceneMenu();
let scene_jeu = new SceneJeu();

lstKeyCode = [];

let mouse_x = null;
let mouse_y = null;
let mouse_press = false;

let lstSprites = [];

let imgMonde = null;
let sprMonde = null;

// menu / jeu 
let gameState = "menu";

let startGame = false;

function CheckCollision(x1,y1,w1,h1, x2,y2,w2,h2) {
   return x1 < x2+w2 &&
          x2 < x1+w1 &&
          y1 < y2+h2 &&
          y2 < y1+h1
 }

function CheckCollision(x1,y1,w1,h1, x2,y2,w2,h2) {
   return x1 < x2+w2 &&
         x2 < x1+w1 &&
         y1 < y2+h2 &&
         y2 < y1+h1
}

function toucheEnfoncee(t) {
   t.preventDefault();
   if (t.code == "ArrowRight") {
       lstKeyCode[t.code] = true;
   }
   if (t.code == "ArrowUp") {
      lstKeyCode[t.code] = true;
   }
   if (t.code == "ArrowLeft") {
      lstKeyCode[t.code] = true;
   }
   if (t.code == "ArrowDown") {
      lstKeyCode[t.code] = true;
   }
}

function toucheRelachee(t) {
   t.preventDefault();
   if (t.code == "ArrowRight") {
      lstKeyCode[t.code] = false;
   }
   if (t.code == "ArrowUp") {
      lstKeyCode[t.code] = false;
   }
   if (t.code == "ArrowLeft") {
      lstKeyCode[t.code] = false;
   }
   if (t.code == "ArrowDown") {
      lstKeyCode[t.code] = false;
   }
}

function clikEnfoncee(t) {
   t.preventDefault();
   mouse_x = t.x;
   mouse_y = t.y;
   mouse_press = t.isTrusted;

   console.log("mouseX : " + t.x);
   console.log("mouseY : " + t.y);
}

function MOUSE_MOVE(t) {
   t.preventDefault();

   mouse_x = t.x;
   mouse_y = t.y;
   mouse_press = false;
   //console.log("mouseX2 : " + t.x);
   //console.log("mouseY2 : " + t.y);
}


function gameReady() {
   lstSprites = [];

   console.log("game start !");

   scene_menu.load(imageLoad);
   scene_jeu.load(imageLoad);
   //imgMonde = imageLoad.getLoadImage("images/map_world.png");
  // sprMonde = new Sprite(imgMonde);

   startGame = true;
}

function load() {
   document.addEventListener("keydown", toucheEnfoncee, false);
   document.addEventListener("keyup", toucheRelachee, false);
   document.addEventListener("click", clikEnfoncee, false);
   document.addEventListener("mousemove", MOUSE_MOVE, false);

   imageLoad.add("images/map_world.png");
   imageLoad.add("images/menu_web.png");
   imageLoad.add("images/map.png");
   imageLoad.add("images/anul.png");
   imageLoad.add("images/circle_red_1.png");
   imageLoad.add("images/circle_green_1.png");
   imageLoad.add("images/circle_orange_1.png");
   imageLoad.add("images/circle_green_house_1.png");
   imageLoad.add("images/circle_green_house_2.png");
   imageLoad.add("images/circle_red_2.png");
   imageLoad.add("images/circle_green_2.png");
   imageLoad.add("images/circle_orange_2.png");
   imageLoad.add("images/world.png");
   imageLoad.add("images/armor1.png");
   imageLoad.add("images/armor2.png");
   imageLoad.add("images/armor3.png");
   imageLoad.add("images/armor4.png");
   imageLoad.add("images/armor5.png");
   imageLoad.add("images/armor6.png");
   imageLoad.add("images/armor7.png");
   imageLoad.add("images/armor8.png");
   imageLoad.add("images/armor1_X3.png");
   imageLoad.add("images/armor2_X3.png");
   imageLoad.add("images/armor3_X3.png");
   imageLoad.add("images/armor4_X3.png");
   imageLoad.add("images/armor5_X3.png");
   imageLoad.add("images/armor6_X3.png");
   imageLoad.add("images/armor7_X3.png");
   imageLoad.add("images/armor8_X3.png");
   imageLoad.add("images/sword1.png");
   imageLoad.add("images/sword2.png");
   imageLoad.add("images/sword3.png");
   imageLoad.add("images/sword4.png");
   imageLoad.add("images/sword5.png");
   imageLoad.add("images/sword6.png");
   imageLoad.add("images/sword7.png");
   imageLoad.add("images/sword8.png");
   imageLoad.add("images/sword1_X3.png");
   imageLoad.add("images/sword2_X3.png");
   imageLoad.add("images/sword3_X3.png");
   imageLoad.add("images/sword4_X3.png");
   imageLoad.add("images/sword5_X3.png");
   imageLoad.add("images/sword6_X3.png");
   imageLoad.add("images/sword7_X3.png");
   imageLoad.add("images/sword8_X3.png");
   imageLoad.add("images/coeur_1.png");
   imageLoad.add("images/coeur_2.png");
   imageLoad.add("images/item_brut_1_X3.png");
   imageLoad.add("images/item_brut_2_X3.png");
   imageLoad.add("images/item_brut_3_X3.png");
   imageLoad.add("images/item_elementaire_1_X3.png");
   imageLoad.add("images/item_elementaire_2_X3.png");
   imageLoad.add("images/item_elementaire_3_X3.png");
   imageLoad.add("images/tuile_brique.png");
   imageLoad.add("images/tuile_terre.png");
   imageLoad.add("images/hero_sheet.png");
   imageLoad.add("images/bat_left.png");
   imageLoad.add("images/boss.png");
   imageLoad.add("images/msg_tired_max.png");
   imageLoad.add("images/robe_1.png");
   imageLoad.add("images/robe_2.png");
   imageLoad.add("images/robe_3.png");
   imageLoad.add("images/robe_4.png");
   imageLoad.add("images/robe_5.png");
   imageLoad.add("images/robe_6.png");
   imageLoad.add("images/robe_7.png");
   imageLoad.add("images/robe_8.png");

   imageLoad.start(gameReady);
   // console.log("load");
}

function update(dt) {
   // console.log("update");
   if (!gameReady) {
      return;
   }
   if (gameState == "menu") {
      scene_menu.update(dt);
      if (mouse_press) {
         console.log("Je click donc on joue !");
         mouse_press = false;
         myAudio.play();
         gameState = "jeu";
      }
   }
   else if (gameState == "jeu") {
      scene_jeu.update(dt);
   }
}

function draw(pCtx) {
   // console.log("draw");
   if (!gameReady) {
      return;
   }
   if (gameState == "menu") {
      scene_menu.draw(pCtx);
   }
   else if (gameState == "jeu") {
      scene_jeu.draw(pCtx);
   }
  // sprMonde.draw(pCtx);
}