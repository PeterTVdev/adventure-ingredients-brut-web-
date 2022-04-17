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