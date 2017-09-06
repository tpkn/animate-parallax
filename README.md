### Usage (code for Animate CC)
```javascript
var config = {
   canvas: document.getElementById('canvas'),
   center: {x: false, y: false},
   mouse_out_easing: 0.1,
   layers: [
      {mc: this.layer0, width: 926, height: 330, offset: 50, scale: 1,   easing: 0.2}, 
      {mc: this.layer1, width: 926, height: 330, offset: 60, scale: 1.1, easing: 0.2}, 
      {mc: this.layer2, width: 926, height: 330, offset: 70, scale: 1.2, easing: 0.2}, 
      {mc: this.layer3, width: 926, height: 330, offset: 80, scale: 1.3, easing: 0.2}
   ]
}

window.apx = new AnimateParallax(config);
```
<br />

### Usage (short: no reset when mouse leaves the stage, x-axis only, no easing, no scale)
```javascript
window.apx = new AnimateParallax({
   layers: [
      {mc: this.layer0, width: 926, offset: 50}, 
      {mc: this.layer1, width: 926, offset: 60}, 
      {mc: this.layer2, width: 926, offset: 70}, 
      {mc: this.layer3, width: 926, offset: 80}
   ]
});
```
