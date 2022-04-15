let imageLoad = new ImageLoader();

lstKeyCode = [];

let lstSprites = [];

let imgMonde = null;
let sprMonde = null;

let startGame = false;

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

function gameReady() {
   lstSprites = [];

   console.log("game start !");

   imgMonde = imageLoad.getLoadImage("images/map_world.png");
   sprMonde = new Sprite(imgMonde);

   startGame = true;
}

function load() {
   document.addEventListener("keydown", toucheEnfoncee, false);
   document.addEventListener("keyup", toucheRelachee, false);

   imageLoad.add("images/map_world.png");

   imageLoad.start(gameReady);
   // console.log("load");
}

function update() {
   // console.log("update");
   if (!gameReady) {
      return;
   }
   if (lstKeyCode["ArrowUp"]) {
      console.log("touche up enfoncee !");
   }
   if (lstKeyCode["ArrowRight"]) {
      console.log("touche droite enfoncee !");
   }
   if (lstKeyCode["ArrowDown"]) {
      console.log("touche bas enfoncee !");
   }
   if (lstKeyCode["ArrowLeft"]) {
      console.log("touche gauche enfoncee !");
   }
}

function draw(pCtx) {
   // console.log("draw");
   if (!gameReady) {
      return;
   }
   sprMonde.draw(pCtx);
}