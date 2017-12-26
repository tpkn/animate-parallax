# Animate Parallax


Simple parallax for Adobe Animate

![preview](https://github.com/tpkn/animate-parallax/raw/master/preview.gif)



### Usage (code for Animate)
```javascript
var config = {
   canvas: document.getElementById('canvas'),
   center: {x: 100, y: 100},
   target: this.target,
   fps: 60,
   mouse: {x_axis: true, reset_pos: true, easing: 0.018},
   layers: [
      {mc: this.layer0, width: 926, height: 330, offset: 50, scale: 1,   easing: 0.2}, 
      {mc: this.layer1, width: 926, height: 330, offset: 60, scale: 1.1, easing: 0.2}, 
      {mc: this.layer2, width: 926, height: 330, offset: 70, scale: 1.2, easing: 0.2}, 
      {mc: this.layer3, width: 926, height: 330, offset: 80, scale: 1.3, easing: 0.2}
   ]
}

window.apx = new AnimateParallax(config);
```

Each layer could be scaled by both axis:
```javascript
layers: [
   {mc: this.layer0, scale_x: 1, scale_y: 0.5}
]
```


### Config
| Variable | Type | Description |
|-------------|:-------------:|-------------|
| canvas | DOM element | If not set, parallax will not react on mouse movement |
| target | Object | If set, `mouseX` and `mouseY` would be replaced by `x/y-axis` from this object |
| center | Object | Parallax center `{x,y}` point. If `false`, then using half of stage width and height |
| autostart | Boolean | Autostart parallax action, `true` by default |
| fps | Number | Refresh rate. By default = canvas fps |
| mouse | Object | `x_axis`: `true/false` - enable mouse x-axis<br />`y_axis`: `true/false` - enable mouse y-axis<br />`reset_pos`: `true/false` - when mouse leave the canvas object, reset parallax position to `center_x` and `center_y`<br />`easing`: overrides layer easing |

### Layer settings
| Variable | Type | Description |
|-------------|:-------------:|-------------|
| mc | Object | Createjs object instance name |
| width | Number | Layer width. If not set, `x-axis` would be ignored |
| height | Number | Layer height. If not set, `y-axis` would be ignored |
| offset | Number | Layer's max travel distance in both directions from parallax center |
| scale | Number | Scale layer programmaticaly if you don't want to do that in Animate |
| scale_x | Number | Overrides `scale` property |
| scale_y | Number | Overrides `scale` property |
| easing | Number | Smaller value = slower layer speed |

### Public methods
| Method | Type | Description |
|-------------|:-------------:|-------------|
| start | Function | - |
| stop | Function | - |