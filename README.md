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
<br />

### Config
| Variable | Type | Description |
|-------------|:-------------:|-------------|
| canvas | DOM element | If not set, layer would not retract back when mouse is out of stage |
| target | Object | If set, `mouseX` and `mouseY` would be replaced by `x/y-axis` from this object |
| center | Object | Parallax center `{x,y}` point. If `false`, using half of stage width and height |
| mouse_out_easing | Number | - |

### Layer settings
| Variable | Type | Description |
|-------------|:-------------:|-------------|
| mc | Object | Createjs object instance name |
| width | Number | Layer width. If not set, `x-axis` would be ignored |
| height | Number | Layer height. If not set, `y-axis` would be ignored |
| offset | Number | Layer's max travel distance in both directions from parallax center |
| scale | Number | Scale layer programmaticaly if you don't want to do that in Animate |
| easing | Number | Smaller value = slower layer speed |
<br />

### Public methods
| Method | Type | Description |
|-------------|:-------------:|-------------|
| start | Function | - |
| stop | Function | - |
