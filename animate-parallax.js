/*!
 * Animate Parallax (v2.2.0.20171227), http://tpkn.me/
 */

function AnimateParallax(config){
   if(!createjs){
      return console.log('(parallax) No CreateJs!');
   }
   if(typeof config !== 'object'){
      return console.log('(parallax) No config!');
   }
   if(typeof config === 'object' && !config.layers){
      return console.log('(parallax) No layers!');
   }
   if(config.layers && !config.layers.length){
      return console.log('(parallax) Empty layers!');
   }


   var canvas = config.canvas;
   var target = config.target;
   var layers = config.layers;

   var direction_x = config.direction && config.direction.x && String(config.direction.x) == 'follow' ? -1 : 1;
   var direction_y = config.direction && config.direction.y && String(config.direction.y) == 'follow' ? -1 : 1;

   var autostart = typeof config.autostart !== 'boolean' ? true : config.autostart;

   var fps = 1000 / (isNumber(config.fps) ? config.fps : lib.properties.fps);

   var uid;
   var i, layer, len = layers.length;
   var px, py, offset_x, offset_y, easing = 1;

   var center_x = config.center && isNumber(config.center.x) ? config.center.x : lib.properties.width / 2;
   var center_y = config.center && isNumber(config.center.y) ? config.center.y : lib.properties.height / 2;

   var mouse = config.mouse;
   var mouse_x = center_x, mouse_y = center_y, mouse_over = false;
   var mouse_easing = mouse && mouse.easing ? mouse.easing : 1;
   var mouse_enabled = config.mouse && (config.mouse.x_axis || config.mouse.y_axis) ? true : false;


   for(i = 0; i < len; i++){
      layer = layers[i];

      // Set layers scale
      if(layer.scale && isNumber(layer.scale))     layer.mc.scaleX = layer.mc.scaleY = layer.scale;
      if(layer.scale_x && isNumber(layer.scale_x)) layer.mc.scaleX = layer.scale_x;
      if(layer.scale_y && isNumber(layer.scale_y)) layer.mc.scaleY = layer.scale_y;
   }

   if(typeof canvas === 'object' && mouse_enabled){
      if(createjs.Touch.isSupported()){
         canvas.addEventListener('touchstart', mouseOver);
         canvas.addEventListener('touchend', mouseOut);
      }else{
         canvas.addEventListener('mouseenter', mouseOver);
         canvas.addEventListener('mouseleave', mouseOut);
      }
   }

   if(autostart){
      startParallax();
   }


   function isNumber(n){
      return !isNaN(parseFloat(n)) && isFinite(n);
   }

   function updateLayers(){
      for(i = 0; i < len; i++){
         layer = layers[i];

         if(mouse_over){
            easing = isNumber(mouse_easing) ? mouse_easing : layer.easing;
            mouse_x = mouse.x_axis ? stage.mouseX / window.devicePixelRatio : center_x;
            mouse_y = mouse.y_axis ? stage.mouseY / window.devicePixelRatio : center_y;
         }else{
            if(target){
               if(isNumber(mouse_easing)) easing = layer.easing;
               if(isNumber(target.x)) mouse_x = target.x;
               if(isNumber(target.y)) mouse_y = target.y;
            }else{
               if(mouse.reset_pos){
                  mouse_x = center_x;
                  mouse_y = center_y;
               }
            }
         }

         // Calculate offset position if width/height is set
         // If not, ignore axis
         if(isNumber(layer.width) && layer.width > 0){
            offset_x = center_x + (center_x - mouse_x) * layer.offset / center_x * direction_x;
         }else{
            offset_x = layer.mc.x;
         }

         if(isNumber(layer.height) && layer.height > 0){
            offset_y = center_y + (center_y - mouse_y) * layer.offset / center_y * direction_y;
         }else{
            offset_y = layer.mc.y;
         }

         easing = easing <= 0 ? 1 : easing;
         layer.mc.x += (offset_x - layer.mc.x) * easing;
         layer.mc.y += (offset_y - layer.mc.y) * easing;
      }
   }

   function startParallax(){
      clearInterval(uid);
      uid = setInterval(updateLayers, fps);
   }

   function stopParallax(){
      clearInterval(uid);
   }

   function mouseOver(e){
      mouse_over = true;
   }

   function mouseOut(){
      mouse_over = false;
   }


   return {
      start: startParallax, 
      stop: stopParallax
   };
}
