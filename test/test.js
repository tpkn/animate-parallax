(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD200").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t, new cjs.Rectangle(-8,-8,16,16), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFBF").s().p("Ak1C0IAAlnIE1i0IE2C0IAAFnIk2C0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-31,-36,62,72), null);


(lib.target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t = new lib.t();
	this.t.parent = this;
	this.t.setTransform(283,125);

	this.timeline.addTween(cjs.Tween.get(this.t).wait(1).to({x:283.9,y:125.1},0).wait(1).to({x:284.8,y:125.3},0).wait(1).to({x:285.8,y:125.4},0).wait(1).to({x:286.8,y:125.6},0).wait(1).to({x:287.9,y:125.7},0).wait(1).to({x:289,y:125.9},0).wait(1).to({x:290.1,y:126.1},0).wait(1).to({x:291.3,y:126.3},0).wait(1).to({x:292.5,y:126.5},0).wait(1).to({x:293.7,y:126.6},0).wait(1).to({x:295,y:126.8},0).wait(1).to({x:296.3,y:127},0).wait(1).to({x:297.7,y:127.3},0).wait(1).to({x:299,y:127.5},0).wait(1).to({x:300.5,y:127.7},0).wait(1).to({x:301.9,y:127.9},0).wait(1).to({x:303.4,y:128.1},0).wait(1).to({x:304.9,y:128.4},0).wait(1).to({x:306.4,y:128.6},0).wait(1).to({x:308,y:128.8},0).wait(1).to({x:309.6,y:129.1},0).wait(1).to({x:311.2,y:129.3},0).wait(1).to({x:312.9,y:129.6},0).wait(1).to({x:314.6,y:129.9},0).wait(1).to({x:316.3,y:130.1},0).wait(1).to({x:318,y:130.4},0).wait(1).to({x:319.8,y:130.7},0).wait(1).to({x:321.6,y:130.9},0).wait(1).to({x:323.4,y:131.2},0).wait(1).to({x:325.2,y:131.5},0).wait(1).to({x:327,y:131.8},0).wait(1).to({x:328.9,y:132},0).wait(1).to({x:330.8,y:132.3},0).wait(1).to({x:332.7,y:132.6},0).wait(1).to({x:334.6,y:132.9},0).wait(1).to({x:336.5,y:133.2},0).wait(1).to({x:338.4,y:133.5},0).wait(1).to({x:340.4,y:133.8},0).wait(1).to({x:342.3,y:134.1},0).wait(1).to({x:344.3,y:134.4},0).wait(1).to({x:346.2,y:134.7},0).wait(1).to({x:348.2,y:135},0).wait(1).to({x:350.2,y:135.3},0).wait(1).to({x:352.2,y:135.6},0).wait(1).to({x:354.2,y:135.9},0).wait(1).to({x:356.2,y:136.2},0).wait(1).to({x:358.2,y:136.5},0).wait(1).to({x:360.2,y:136.9},0).wait(1).to({x:362.2,y:137.2},0).wait(1).to({x:364.2,y:137.5},0).wait(1).to({x:366.2,y:137.8},0).wait(1).to({x:368.2,y:138.1},0).wait(1).to({x:370.2,y:138.4},0).wait(1).to({x:372.1,y:138.7},0).wait(1).to({x:374.1,y:139},0).wait(1).to({x:376.1,y:139.3},0).wait(1).to({x:378,y:139.6},0).wait(1).to({x:380,y:139.9},0).wait(1).to({x:381.9,y:140.2},0).wait(1).to({x:383.9,y:140.5},0).wait(1).to({x:385.8,y:140.8},0).wait(1).to({x:387.7,y:141.1},0).wait(1).to({x:389.6,y:141.4},0).wait(1).to({x:391.5,y:141.7},0).wait(1).to({x:393.4,y:142},0).wait(1).to({x:395.2,y:142.2},0).wait(1).to({x:397.1,y:142.5},0).wait(1).to({x:398.9,y:142.8},0).wait(1).to({x:400.7,y:143.1},0).wait(1).to({x:402.5,y:143.4},0).wait(1).to({x:404.3,y:143.6},0).wait(1).to({x:406,y:143.9},0).wait(1).to({x:407.8,y:144.2},0).wait(1).to({x:409.5,y:144.4},0).wait(1).to({x:411.2,y:144.7},0).wait(1).to({x:412.9,y:145},0).wait(1).to({x:414.6,y:145.2},0).wait(1).to({x:416.2,y:145.5},0).wait(1).to({x:417.9,y:145.7},0).wait(1).to({x:419.5,y:146},0).wait(1).to({x:421.1,y:146.2},0).wait(1).to({x:422.6,y:146.4},0).wait(1).to({x:424.2,y:146.7},0).wait(1).to({x:425.7,y:146.9},0).wait(1).to({x:427.2,y:147.2},0).wait(1).to({x:428.7,y:147.4},0).wait(1).to({x:430.1,y:147.6},0).wait(1).to({x:431.6,y:147.8},0).wait(1).to({x:433,y:148},0).wait(1).to({x:434.4,y:148.3},0).wait(1).to({x:435.8,y:148.5},0).wait(1).to({x:437.1,y:148.7},0).wait(1).to({x:438.5,y:148.9},0).wait(1).to({x:439.8,y:149.1},0).wait(1).to({x:441,y:149.3},0).wait(1).to({x:442.3,y:149.5},0).wait(1).to({x:443.5,y:149.7},0).wait(1).to({x:444.8,y:149.8},0).wait(1).to({x:445.9,y:150},0).wait(1).to({x:447.1,y:150.2},0).wait(1).to({x:448.3,y:150.4},0).wait(1).to({x:449.4,y:150.6},0).wait(1).to({x:450.5,y:150.7},0).wait(1).to({x:451.6,y:150.9},0).wait(1).to({x:452.6,y:151.1},0).wait(1).to({x:453.7,y:151.2},0).wait(1).to({x:454.7,y:151.4},0).wait(1).to({x:455.7,y:151.5},0).wait(1).to({x:456.6,y:151.7},0).wait(1).to({x:457.6,y:151.8},0).wait(1).to({x:458.5,y:152},0).wait(1).to({x:459.4,y:152.1},0).wait(1).to({x:460.3,y:152.2},0).wait(1).to({x:461.1,y:152.4},0).wait(1).to({x:462,y:152.5},0).wait(1).to({x:462.8,y:152.6},0).wait(1).to({x:463.6,y:152.7},0).wait(1).to({x:464.3,y:152.9},0).wait(1).to({x:465.1,y:153},0).wait(1).to({x:465.8,y:153.1},0).wait(1).to({x:466.5,y:153.2},0).wait(1).to({x:467.2,y:153.3},0).wait(1).to({x:467.9,y:153.4},0).wait(1).to({x:468.5,y:153.5},0).wait(1).to({x:469.1,y:153.6},0).wait(1).to({x:469.7,y:153.7},0).wait(1).to({x:470.3,y:153.8},0).wait(1).to({x:470.9,y:153.9},0).wait(1).to({x:471.4},0).wait(1).to({x:471.9,y:154},0).wait(1).to({x:472.4,y:154.1},0).wait(1).to({x:472.9,y:154.2},0).wait(1).to({x:473.4},0).wait(1).to({x:473.8,y:154.3},0).wait(1).to({x:474.2,y:154.4},0).wait(1).to({x:474.6},0).wait(1).to({x:475,y:154.5},0).wait(1).to({x:475.4,y:154.6},0).wait(1).to({x:475.7},0).wait(1).to({x:476,y:154.7},0).wait(1).to({x:476.4},0).wait(1).to({x:476.6},0).wait(1).to({x:476.9,y:154.8},0).wait(1).to({x:477.2},0).wait(1).to({x:477.4,y:154.9},0).wait(1).to({x:477.6},0).wait(1).to({x:477.8},0).wait(1).to({x:478,y:155},0).wait(1).to({x:478.2},0).wait(1).to({x:478.3},0).wait(1).to({x:478.8,y:154.9},0).wait(1).to({x:479.4,y:154.7},0).wait(1).to({x:480,y:154.6},0).wait(1).to({x:480.6,y:154.4},0).wait(1).to({x:481.2,y:154.2},0).wait(1).to({x:481.9,y:154.1},0).wait(1).to({x:482.6,y:153.9},0).wait(1).to({x:483.3,y:153.7},0).wait(1).to({x:484,y:153.5},0).wait(1).to({x:484.7,y:153.3},0).wait(1).to({x:485.5,y:153.1},0).wait(1).to({x:486.3,y:152.9},0).wait(1).to({x:487.1,y:152.7},0).wait(1).to({x:487.9,y:152.5},0).wait(1).to({x:488.8,y:152.3},0).wait(1).to({x:489.7,y:152.1},0).wait(1).to({x:490.5,y:151.8},0).wait(1).to({x:491.5,y:151.6},0).wait(1).to({x:492.4,y:151.4},0).wait(1).to({x:493.3,y:151.1},0).wait(1).to({x:494.3,y:150.9},0).wait(1).to({x:495.3,y:150.6},0).wait(1).to({x:496.3,y:150.4},0).wait(1).to({x:497.3,y:150.1},0).wait(1).to({x:498.3,y:149.8},0).wait(1).to({x:499.4,y:149.6},0).wait(1).to({x:500.4,y:149.3},0).wait(1).to({x:501.5,y:149},0).wait(1).to({x:502.6,y:148.7},0).wait(1).to({x:503.7,y:148.5},0).wait(1).to({x:504.8,y:148.2},0).wait(1).to({x:505.9,y:147.9},0).wait(1).to({x:507,y:147.6},0).wait(1).to({x:508.1,y:147.3},0).wait(1).to({x:509.3,y:147},0).wait(1).to({x:510.4,y:146.7},0).wait(1).to({x:511.6,y:146.4},0).wait(1).to({x:512.8,y:146.1},0).wait(1).to({x:513.9,y:145.8},0).wait(1).to({x:515.1,y:145.5},0).wait(1).to({x:516.3,y:145.2},0).wait(1).to({x:517.5,y:144.9},0).wait(1).to({x:518.7,y:144.6},0).wait(1).to({x:519.9,y:144.3},0).wait(1).to({x:521.1,y:144},0).wait(1).to({x:522.3,y:143.7},0).wait(1).to({x:523.5,y:143.4},0).wait(1).to({x:524.7,y:143},0).wait(1).to({x:525.9,y:142.7},0).wait(1).to({x:527.1,y:142.4},0).wait(1).to({x:528.3,y:142.1},0).wait(1).to({x:529.5,y:141.8},0).wait(1).to({x:530.6,y:141.5},0).wait(1).to({x:531.8,y:141.2},0).wait(1).to({x:533,y:140.9},0).wait(1).to({x:534.2,y:140.6},0).wait(1).to({x:535.4,y:140.3},0).wait(1).to({x:536.5,y:140},0).wait(1).to({x:537.7,y:139.7},0).wait(1).to({x:538.9,y:139.4},0).wait(1).to({x:540,y:139.1},0).wait(1).to({x:541.2,y:138.8},0).wait(1).to({x:542.3,y:138.5},0).wait(1).to({x:543.4,y:138.2},0).wait(1).to({x:544.5,y:137.9},0).wait(1).to({x:545.6,y:137.6},0).wait(1).to({x:546.7,y:137.4},0).wait(1).to({x:547.8,y:137.1},0).wait(1).to({x:548.9,y:136.8},0).wait(1).to({x:550,y:136.5},0).wait(1).to({x:551.1,y:136.2},0).wait(1).to({x:552.1,y:136},0).wait(1).to({x:553.2,y:135.7},0).wait(1).to({x:554.2,y:135.4},0).wait(1).to({x:555.2,y:135.2},0).wait(1).to({x:556.2,y:134.9},0).wait(1).to({x:557.2,y:134.7},0).wait(1).to({x:558.2,y:134.4},0).wait(1).to({x:559.2,y:134.2},0).wait(1).to({x:560.1,y:133.9},0).wait(1).to({x:561.1,y:133.7},0).wait(1).to({x:562,y:133.4},0).wait(1).to({x:562.9,y:133.2},0).wait(1).to({x:563.8,y:132.9},0).wait(1).to({x:564.7,y:132.7},0).wait(1).to({x:565.6,y:132.5},0).wait(1).to({x:566.5,y:132.3},0).wait(1).to({x:567.3,y:132},0).wait(1).to({x:568.2,y:131.8},0).wait(1).to({x:569,y:131.6},0).wait(1).to({x:569.8,y:131.4},0).wait(1).to({x:570.6,y:131.2},0).wait(1).to({x:571.4,y:131},0).wait(1).to({x:572.2,y:130.8},0).wait(1).to({x:572.9,y:130.6},0).wait(1).to({x:573.7,y:130.4},0).wait(1).to({x:574.4,y:130.2},0).wait(1).to({x:575.1,y:130},0).wait(1).to({x:575.8,y:129.9},0).wait(1).to({x:576.5,y:129.7},0).wait(1).to({x:577.2,y:129.5},0).wait(1).to({x:577.9,y:129.3},0).wait(1).to({x:578.5,y:129.2},0).wait(1).to({x:579.2,y:129},0).wait(1).to({x:579.8,y:128.8},0).wait(1).to({x:580.4,y:128.7},0).wait(1).to({x:581,y:128.5},0).wait(1).to({x:581.6,y:128.4},0).wait(1).to({x:582.1,y:128.2},0).wait(1).to({x:582.7,y:128.1},0).wait(1).to({x:583.2,y:127.9},0).wait(1).to({x:583.8,y:127.8},0).wait(1).to({x:584.3,y:127.7},0).wait(1).to({x:584.8,y:127.5},0).wait(1).to({x:585.3,y:127.4},0).wait(1).to({x:585.8,y:127.3},0).wait(1).to({x:586.2,y:127.2},0).wait(1).to({x:586.7,y:127.1},0).wait(1).to({x:587.1,y:126.9},0).wait(1).to({x:587.5,y:126.8},0).wait(1).to({x:588,y:126.7},0).wait(1).to({x:588.4,y:126.6},0).wait(1).to({x:588.7,y:126.5},0).wait(1).to({x:589.1,y:126.4},0).wait(1).to({x:589.5,y:126.3},0).wait(1).to({x:589.8,y:126.2},0).wait(1).to({x:590.2},0).wait(1).to({x:590.5,y:126.1},0).wait(1).to({x:590.8,y:126},0).wait(1).to({x:591.1,y:125.9},0).wait(1).to({x:591.4,y:125.8},0).wait(1).to({x:591.7},0).wait(1).to({x:591.9,y:125.7},0).wait(1).to({x:592.2,y:125.6},0).wait(1).to({x:592.4},0).wait(1).to({x:592.7,y:125.5},0).wait(1).to({x:592.9},0).wait(1).to({x:593.1,y:125.4},0).wait(1).to({x:593.3,y:125.3},0).wait(1).to({x:593.5},0).wait(1).to({x:593.7},0).wait(1).to({x:593.8,y:125.2},0).wait(1).to({x:594},0).wait(1).to({x:594.1,y:125.1},0).wait(1).to({x:594.2},0).wait(1).to({x:594.4},0).wait(1).to({x:594.5,y:125},0).wait(1).to({x:594.6},0).wait(1).to({x:594.7},0).wait(1).to({x:594.1,y:124.9},0).wait(1).to({x:593.6,y:124.8},0).wait(1).to({x:593,y:124.7},0).wait(1).to({x:592.4,y:124.6},0).wait(1).to({x:591.7,y:124.5},0).wait(1).to({x:591.1,y:124.4},0).wait(1).to({x:590.4,y:124.3},0).wait(1).to({x:589.7,y:124.2},0).wait(1).to({x:589,y:124},0).wait(1).to({x:588.2,y:123.9},0).wait(1).to({x:587.5,y:123.8},0).wait(1).to({x:586.7,y:123.6},0).wait(1).to({x:585.9,y:123.5},0).wait(1).to({x:585.1,y:123.4},0).wait(1).to({x:584.2,y:123.2},0).wait(1).to({x:583.3,y:123.1},0).wait(1).to({x:582.5,y:122.9},0).wait(1).to({x:581.5,y:122.8},0).wait(1).to({x:580.6,y:122.6},0).wait(1).to({x:579.7,y:122.4},0).wait(1).to({x:578.7,y:122.3},0).wait(1).to({x:577.7,y:122.1},0).wait(1).to({x:576.8,y:121.9},0).wait(1).to({x:575.7,y:121.8},0).wait(1).to({x:574.7,y:121.6},0).wait(1).to({x:573.7,y:121.4},0).wait(1).to({x:572.6,y:121.2},0).wait(1).to({x:571.6,y:121.1},0).wait(1).to({x:570.5,y:120.9},0).wait(1).to({x:569.4,y:120.7},0).wait(1).to({x:568.3,y:120.5},0).wait(1).to({x:567.2,y:120.3},0).wait(1).to({x:566.1,y:120.1},0).wait(1).to({x:564.9,y:119.9},0).wait(1).to({x:563.8,y:119.7},0).wait(1).to({x:562.7,y:119.5},0).wait(1).to({x:561.5,y:119.3},0).wait(1).to({x:560.3,y:119.1},0).wait(1).to({x:559.2,y:118.9},0).wait(1).to({x:558,y:118.7},0).wait(1).to({x:556.8,y:118.5},0).wait(1).to({x:555.6,y:118.3},0).wait(1).to({x:554.4,y:118.1},0).wait(1).to({x:553.2,y:117.9},0).wait(1).to({x:552.1,y:117.7},0).wait(1).to({x:550.9,y:117.5},0).wait(1).to({x:549.7,y:117.3},0).wait(1).to({x:548.5,y:117.1},0).wait(1).to({x:547.3,y:116.9},0).wait(1).to({x:546.1,y:116.7},0).wait(1).to({x:544.9,y:116.5},0).wait(1).to({x:543.7,y:116.3},0).wait(1).to({x:542.5,y:116.1},0).wait(1).to({x:541.3,y:115.9},0).wait(1).to({x:540.1,y:115.7},0).wait(1).to({x:539,y:115.5},0).wait(1).to({x:537.8,y:115.3},0).wait(1).to({x:536.6,y:115.1},0).wait(1).to({x:535.5,y:114.9},0).wait(1).to({x:534.3,y:114.7},0).wait(1).to({x:533.1,y:114.5},0).wait(1).to({x:532,y:114.3},0).wait(1).to({x:530.9,y:114.1},0).wait(1).to({x:529.7,y:113.9},0).wait(1).to({x:528.6,y:113.7},0).wait(1).to({x:527.5,y:113.5},0).wait(1).to({x:526.4,y:113.3},0).wait(1).to({x:525.3,y:113.1},0).wait(1).to({x:524.2,y:112.9},0).wait(1).to({x:523.1,y:112.8},0).wait(1).to({x:522.1,y:112.6},0).wait(1).to({x:521,y:112.4},0).wait(1).to({x:520,y:112.2},0).wait(1).to({x:519,y:112},0).wait(1).to({x:517.9,y:111.9},0).wait(1).to({x:516.9,y:111.7},0).wait(1).to({x:515.9,y:111.5},0).wait(1).to({x:514.9,y:111.4},0).wait(1).to({x:514,y:111.2},0).wait(1).to({x:513,y:111},0).wait(1).to({x:512,y:110.9},0).wait(1).to({x:511.1,y:110.7},0).wait(1).to({x:510.2,y:110.5},0).wait(1).to({x:509.3,y:110.4},0).wait(1).to({x:508.4,y:110.2},0).wait(1).to({x:507.5,y:110.1},0).wait(1).to({x:506.6,y:109.9},0).wait(1).to({x:505.7,y:109.8},0).wait(1).to({x:504.9,y:109.6},0).wait(1).to({x:504.1,y:109.5},0).wait(1).to({x:503.2,y:109.4},0).wait(1).to({x:502.4,y:109.2},0).wait(1).to({x:501.6,y:109.1},0).wait(1).to({x:500.9,y:108.9},0).wait(1).to({x:500.1,y:108.8},0).wait(1).to({x:499.3,y:108.7},0).wait(1).to({x:498.6,y:108.6},0).wait(1).to({x:497.9,y:108.4},0).wait(1).to({x:497.2,y:108.3},0).wait(1).to({x:496.5,y:108.2},0).wait(1).to({x:495.8,y:108.1},0).wait(1).to({x:495.1,y:108},0).wait(1).to({x:494.4,y:107.8},0).wait(1).to({x:493.8,y:107.7},0).wait(1).to({x:493.2,y:107.6},0).wait(1).to({x:492.5,y:107.5},0).wait(1).to({x:491.9,y:107.4},0).wait(1).to({x:491.3,y:107.3},0).wait(1).to({x:490.8,y:107.2},0).wait(1).to({x:490.2,y:107.1},0).wait(1).to({x:489.7,y:107},0).wait(1).to({x:489.1,y:106.9},0).wait(1).to({x:488.6,y:106.8},0).wait(1).to({x:488.1},0).wait(1).to({x:487.6,y:106.7},0).wait(1).to({x:487.1,y:106.6},0).wait(1).to({x:486.6,y:106.5},0).wait(1).to({x:486.2,y:106.4},0).wait(1).to({x:485.7},0).wait(1).to({x:485.3,y:106.3},0).wait(1).to({x:484.9,y:106.2},0).wait(1).to({x:484.4,y:106.1},0).wait(1).to({x:484},0).wait(1).to({x:483.7,y:106},0).wait(1).to({x:483.3,y:105.9},0).wait(1).to({x:482.9},0).wait(1).to({x:482.6,y:105.8},0).wait(1).to({x:482.2},0).wait(1).to({x:481.9,y:105.7},0).wait(1).to({x:481.6},0).wait(1).to({x:481.3,y:105.6},0).wait(1).to({x:481},0).wait(1).to({x:480.8,y:105.5},0).wait(1).to({x:480.5},0).wait(1).to({x:480.2,y:105.4},0).wait(1).to({x:480},0).wait(1).to({x:479.8,y:105.3},0).wait(1).to({x:479.5},0).wait(1).to({x:479.3},0).wait(1).to({x:479.1,y:105.2},0).wait(1).to({x:479},0).wait(1).to({x:478.8},0).wait(1).to({x:478.6,y:105.1},0).wait(1).to({x:478.5},0).wait(1).to({x:478.3},0).wait(1).to({x:478.2},0).wait(1).to({x:478.1,y:105},0).wait(1).to({x:478},0).wait(1).to({x:477.9},0).wait(1).to({x:477.8},0).wait(1).to({x:476.9,y:105.1},0).wait(1).to({x:476,y:105.2},0).wait(1).to({x:475,y:105.3},0).wait(1).to({x:474,y:105.4},0).wait(1).to({x:472.9,y:105.5},0).wait(1).to({x:471.8,y:105.6},0).wait(1).to({x:470.7,y:105.7},0).wait(1).to({x:469.5,y:105.8},0).wait(1).to({x:468.3,y:106},0).wait(1).to({x:467.1,y:106.1},0).wait(1).to({x:465.8,y:106.2},0).wait(1).to({x:464.5,y:106.4},0).wait(1).to({x:463.2,y:106.5},0).wait(1).to({x:461.8,y:106.6},0).wait(1).to({x:460.4,y:106.8},0).wait(1).to({x:458.9,y:106.9},0).wait(1).to({x:457.5,y:107.1},0).wait(1).to({x:456,y:107.2},0).wait(1).to({x:454.4,y:107.4},0).wait(1).to({x:452.8,y:107.6},0).wait(1).to({x:451.3,y:107.7},0).wait(1).to({x:449.6,y:107.9},0).wait(1).to({x:448,y:108.1},0).wait(1).to({x:446.3,y:108.2},0).wait(1).to({x:444.6,y:108.4},0).wait(1).to({x:442.9,y:108.6},0).wait(1).to({x:441.1,y:108.8},0).wait(1).to({x:439.3,y:108.9},0).wait(1).to({x:437.5,y:109.1},0).wait(1).to({x:435.7,y:109.3},0).wait(1).to({x:433.9,y:109.5},0).wait(1).to({x:432,y:109.7},0).wait(1).to({x:430.2,y:109.9},0).wait(1).to({x:428.3,y:110.1},0).wait(1).to({x:426.4,y:110.3},0).wait(1).to({x:424.5,y:110.5},0).wait(1).to({x:422.5,y:110.7},0).wait(1).to({x:420.6,y:110.9},0).wait(1).to({x:418.6,y:111.1},0).wait(1).to({x:416.7,y:111.3},0).wait(1).to({x:414.7,y:111.5},0).wait(1).to({x:412.7,y:111.7},0).wait(1).to({x:410.8,y:111.9},0).wait(1).to({x:408.8,y:112.1},0).wait(1).to({x:406.8,y:112.3},0).wait(1).to({x:404.8,y:112.5},0).wait(1).to({x:402.8,y:112.7},0).wait(1).to({x:400.8,y:112.9},0).wait(1).to({x:398.8,y:113.1},0).wait(1).to({x:396.8,y:113.3},0).wait(1).to({x:394.8,y:113.5},0).wait(1).to({x:392.9,y:113.7},0).wait(1).to({x:390.9,y:113.9},0).wait(1).to({x:388.9,y:114.1},0).wait(1).to({x:386.9,y:114.3},0).wait(1).to({x:385,y:114.5},0).wait(1).to({x:383,y:114.7},0).wait(1).to({x:381.1,y:114.9},0).wait(1).to({x:379.1,y:115.1},0).wait(1).to({x:377.2,y:115.3},0).wait(1).to({x:375.3,y:115.5},0).wait(1).to({x:373.4,y:115.7},0).wait(1).to({x:371.5,y:115.9},0).wait(1).to({x:369.6,y:116.1},0).wait(1).to({x:367.7,y:116.3},0).wait(1).to({x:365.9,y:116.5},0).wait(1).to({x:364,y:116.7},0).wait(1).to({x:362.2,y:116.9},0).wait(1).to({x:360.4,y:117.1},0).wait(1).to({x:358.6,y:117.2},0).wait(1).to({x:356.8,y:117.4},0).wait(1).to({x:355.1,y:117.6},0).wait(1).to({x:353.3,y:117.8},0).wait(1).to({x:351.6,y:118},0).wait(1).to({x:349.9,y:118.1},0).wait(1).to({x:348.2,y:118.3},0).wait(1).to({x:346.6,y:118.5},0).wait(1).to({x:344.9,y:118.6},0).wait(1).to({x:343.3,y:118.8},0).wait(1).to({x:341.7,y:119},0).wait(1).to({x:340.1,y:119.1},0).wait(1).to({x:338.5,y:119.3},0).wait(1).to({x:337,y:119.5},0).wait(1).to({x:335.5,y:119.6},0).wait(1).to({x:334,y:119.8},0).wait(1).to({x:332.5,y:119.9},0).wait(1).to({x:331,y:120.1},0).wait(1).to({x:329.6,y:120.2},0).wait(1).to({x:328.2,y:120.4},0).wait(1).to({x:326.8,y:120.5},0).wait(1).to({x:325.4,y:120.6},0).wait(1).to({x:324.1,y:120.8},0).wait(1).to({x:322.7,y:120.9},0).wait(1).to({x:321.4,y:121.1},0).wait(1).to({x:320.2,y:121.2},0).wait(1).to({x:318.9,y:121.3},0).wait(1).to({x:317.7,y:121.4},0).wait(1).to({x:316.5,y:121.6},0).wait(1).to({x:315.3,y:121.7},0).wait(1).to({x:314.1,y:121.8},0).wait(1).to({x:313,y:121.9},0).wait(1).to({x:311.8,y:122},0).wait(1).to({x:310.7,y:122.2},0).wait(1).to({x:309.7,y:122.3},0).wait(1).to({x:308.6,y:122.4},0).wait(1).to({x:307.6,y:122.5},0).wait(1).to({x:306.6,y:122.6},0).wait(1).to({x:305.6,y:122.7},0).wait(1).to({x:304.6,y:122.8},0).wait(1).to({x:303.7,y:122.9},0).wait(1).to({x:302.8,y:123},0).wait(1).to({x:301.9,y:123.1},0).wait(1).to({x:301,y:123.2},0).wait(1).to({x:300.1},0).wait(1).to({x:299.3,y:123.3},0).wait(1).to({x:298.5,y:123.4},0).wait(1).to({x:297.7,y:123.5},0).wait(1).to({x:296.9,y:123.6},0).wait(1).to({x:296.2},0).wait(1).to({x:295.5,y:123.7},0).wait(1).to({x:294.8,y:123.8},0).wait(1).to({x:294.1,y:123.9},0).wait(1).to({x:293.4},0).wait(1).to({x:292.8,y:124},0).wait(1).to({x:292.1,y:124.1},0).wait(1).to({x:291.6},0).wait(1).to({x:291,y:124.2},0).wait(1).to({x:290.4},0).wait(1).to({x:289.9,y:124.3},0).wait(1).to({x:289.4},0).wait(1).to({x:288.9,y:124.4},0).wait(1).to({x:288.4},0).wait(1).to({x:287.9,y:124.5},0).wait(1).to({x:287.5},0).wait(1).to({x:287.1,y:124.6},0).wait(1).to({x:286.7},0).wait(1).to({x:286.3,y:124.7},0).wait(1).to({x:285.9},0).wait(1).to({x:285.6},0).wait(1).to({x:285.2,y:124.8},0).wait(1).to({x:284.9},0).wait(1).to({x:284.7},0).wait(1).to({x:284.4,y:124.9},0).wait(1).to({x:284.1},0).wait(1).to({x:283.9},0).wait(1).to({x:283.7},0).wait(1).to({x:283.5,y:125},0).wait(1).to({x:283.3},0).wait(1).to({x:283.1},0).wait(1).to({x:283},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,117,16,16);


(lib.patch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(19.1,22,0.613,0.613,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.patch, new cjs.Rectangle(0,0,38,44.1), null);


(lib.layer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.patch();
	this.instance.parent = this;
	this.instance.setTransform(374.4,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_1 = new lib.patch();
	this.instance_1.parent = this;
	this.instance_1.setTransform(322.4,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_2 = new lib.patch();
	this.instance_2.parent = this;
	this.instance_2.setTransform(270.4,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_3 = new lib.patch();
	this.instance_3.parent = this;
	this.instance_3.setTransform(218.4,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_4 = new lib.patch();
	this.instance_4.parent = this;
	this.instance_4.setTransform(400.4,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_5 = new lib.patch();
	this.instance_5.parent = this;
	this.instance_5.setTransform(348.4,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_6 = new lib.patch();
	this.instance_6.parent = this;
	this.instance_6.setTransform(296.4,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_7 = new lib.patch();
	this.instance_7.parent = this;
	this.instance_7.setTransform(244.4,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_8 = new lib.patch();
	this.instance_8.parent = this;
	this.instance_8.setTransform(374.4,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_9 = new lib.patch();
	this.instance_9.parent = this;
	this.instance_9.setTransform(322.4,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_10 = new lib.patch();
	this.instance_10.parent = this;
	this.instance_10.setTransform(270.4,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_11 = new lib.patch();
	this.instance_11.parent = this;
	this.instance_11.setTransform(218.4,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_12 = new lib.patch();
	this.instance_12.parent = this;
	this.instance_12.setTransform(400.4,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_13 = new lib.patch();
	this.instance_13.parent = this;
	this.instance_13.setTransform(348.4,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_14 = new lib.patch();
	this.instance_14.parent = this;
	this.instance_14.setTransform(296.4,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_15 = new lib.patch();
	this.instance_15.parent = this;
	this.instance_15.setTransform(244.4,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_16 = new lib.patch();
	this.instance_16.parent = this;
	this.instance_16.setTransform(374.4,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_17 = new lib.patch();
	this.instance_17.parent = this;
	this.instance_17.setTransform(322.4,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_18 = new lib.patch();
	this.instance_18.parent = this;
	this.instance_18.setTransform(270.4,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_19 = new lib.patch();
	this.instance_19.parent = this;
	this.instance_19.setTransform(218.4,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_20 = new lib.patch();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-378.6,58.2,1,1,0,0,0,31.4,36.4);

	this.instance_21 = new lib.patch();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-378.6,-29.3,1,1,0,0,0,31.4,36.4);

	this.instance_22 = new lib.patch();
	this.instance_22.parent = this;
	this.instance_22.setTransform(167.4,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_23 = new lib.patch();
	this.instance_23.parent = this;
	this.instance_23.setTransform(115.4,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_24 = new lib.patch();
	this.instance_24.parent = this;
	this.instance_24.setTransform(63.4,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_25 = new lib.patch();
	this.instance_25.parent = this;
	this.instance_25.setTransform(11.4,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_26 = new lib.patch();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-40.6,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_27 = new lib.patch();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-92.6,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_28 = new lib.patch();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-144.6,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_29 = new lib.patch();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-196.6,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_30 = new lib.patch();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-248.6,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_31 = new lib.patch();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-300.6,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_32 = new lib.patch();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-352.6,101.9,1,1,0,0,0,31.4,36.4);

	this.instance_33 = new lib.patch();
	this.instance_33.parent = this;
	this.instance_33.setTransform(193.4,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_34 = new lib.patch();
	this.instance_34.parent = this;
	this.instance_34.setTransform(141.4,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_35 = new lib.patch();
	this.instance_35.parent = this;
	this.instance_35.setTransform(89.4,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_36 = new lib.patch();
	this.instance_36.parent = this;
	this.instance_36.setTransform(37.4,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_37 = new lib.patch();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-14.6,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_38 = new lib.patch();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-66.6,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_39 = new lib.patch();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-118.6,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_40 = new lib.patch();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-170.6,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_41 = new lib.patch();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-222.6,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_42 = new lib.patch();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-274.6,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_43 = new lib.patch();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-326.6,57.9,1,1,0,0,0,31.4,36.4);

	this.instance_44 = new lib.patch();
	this.instance_44.parent = this;
	this.instance_44.setTransform(167.4,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_45 = new lib.patch();
	this.instance_45.parent = this;
	this.instance_45.setTransform(115.4,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_46 = new lib.patch();
	this.instance_46.parent = this;
	this.instance_46.setTransform(63.4,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_47 = new lib.patch();
	this.instance_47.parent = this;
	this.instance_47.setTransform(11.4,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_48 = new lib.patch();
	this.instance_48.parent = this;
	this.instance_48.setTransform(-40.6,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_49 = new lib.patch();
	this.instance_49.parent = this;
	this.instance_49.setTransform(-92.6,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_50 = new lib.patch();
	this.instance_50.parent = this;
	this.instance_50.setTransform(-144.6,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_51 = new lib.patch();
	this.instance_51.parent = this;
	this.instance_51.setTransform(-196.6,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_52 = new lib.patch();
	this.instance_52.parent = this;
	this.instance_52.setTransform(-248.6,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_53 = new lib.patch();
	this.instance_53.parent = this;
	this.instance_53.setTransform(-300.6,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_54 = new lib.patch();
	this.instance_54.parent = this;
	this.instance_54.setTransform(-352.6,13.9,1,1,0,0,0,31.4,36.4);

	this.instance_55 = new lib.patch();
	this.instance_55.parent = this;
	this.instance_55.setTransform(193.4,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_56 = new lib.patch();
	this.instance_56.parent = this;
	this.instance_56.setTransform(141.4,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_57 = new lib.patch();
	this.instance_57.parent = this;
	this.instance_57.setTransform(89.4,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_58 = new lib.patch();
	this.instance_58.parent = this;
	this.instance_58.setTransform(37.4,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_59 = new lib.patch();
	this.instance_59.parent = this;
	this.instance_59.setTransform(-14.6,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_60 = new lib.patch();
	this.instance_60.parent = this;
	this.instance_60.setTransform(-66.6,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_61 = new lib.patch();
	this.instance_61.parent = this;
	this.instance_61.setTransform(-118.6,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_62 = new lib.patch();
	this.instance_62.parent = this;
	this.instance_62.setTransform(-170.6,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_63 = new lib.patch();
	this.instance_63.parent = this;
	this.instance_63.setTransform(-222.6,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_64 = new lib.patch();
	this.instance_64.parent = this;
	this.instance_64.setTransform(-274.6,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_65 = new lib.patch();
	this.instance_65.parent = this;
	this.instance_65.setTransform(-326.6,-29.1,1,1,0,0,0,31.4,36.4);

	this.instance_66 = new lib.patch();
	this.instance_66.parent = this;
	this.instance_66.setTransform(167.4,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_67 = new lib.patch();
	this.instance_67.parent = this;
	this.instance_67.setTransform(115.4,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_68 = new lib.patch();
	this.instance_68.parent = this;
	this.instance_68.setTransform(63.4,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_69 = new lib.patch();
	this.instance_69.parent = this;
	this.instance_69.setTransform(11.4,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_70 = new lib.patch();
	this.instance_70.parent = this;
	this.instance_70.setTransform(-40.6,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_71 = new lib.patch();
	this.instance_71.parent = this;
	this.instance_71.setTransform(-92.6,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_72 = new lib.patch();
	this.instance_72.parent = this;
	this.instance_72.setTransform(-144.6,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_73 = new lib.patch();
	this.instance_73.parent = this;
	this.instance_73.setTransform(-196.6,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_74 = new lib.patch();
	this.instance_74.parent = this;
	this.instance_74.setTransform(-248.6,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_75 = new lib.patch();
	this.instance_75.parent = this;
	this.instance_75.setTransform(-300.6,-73.1,1,1,0,0,0,31.4,36.4);

	this.instance_76 = new lib.patch();
	this.instance_76.parent = this;
	this.instance_76.setTransform(-352.6,-73.1,1,1,0,0,0,31.4,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.layer, new cjs.Rectangle(-410,-109.5,817,219.1), null);


// stage content:
(lib.test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var config = {
			canvas: document.getElementById('canvas'),
			target: this.target.t,
			mouse: {x_axis: true, y_axis: true, reset_pos: true, easing: 0.018},
			layers: [
				{mc: this.layer0, width: 817, height: 219, offset: 50, scale: 0.80, easing: 0.17}, 
				{mc: this.layer1, width: 817, height: 219, offset: 55, scale: 0.83, easing: 0.16}, 
				{mc: this.layer2, width: 817, height: 219, offset: 60, scale: 0.86, easing: 0.15}, 
				{mc: this.layer3, width: 817, height: 219, offset: 65, scale: 0.89, easing: 0.14}, 
				{mc: this.layer4, width: 817, height: 219, offset: 70, scale: 0.92, easing: 0.13}, 
				{mc: this.layer5, width: 817, height: 219, offset: 75, scale: 0.95, easing: 0.12}
			]
		}

		window.apx = new AnimateParallax(config);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// target
	this.target = new lib.target();
	this.target.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.target).wait(1));

	// layer0
	this.layer0 = new lib.layer();
	this.layer0.parent = this;
	this.layer0.setTransform(440,125);

	this.timeline.addTween(cjs.Tween.get(this.layer0).wait(1));

	// layer1
	this.layer1 = new lib.layer();
	this.layer1.parent = this;
	this.layer1.setTransform(440,125);
	this.layer1.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
	this.layer1.cache(-412,-111,821,223);

	this.timeline.addTween(cjs.Tween.get(this.layer1).wait(1));

	// layer2
	this.layer2 = new lib.layer();
	this.layer2.parent = this;
	this.layer2.setTransform(440,125);
	this.layer2.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.layer2.cache(-412,-111,821,223);

	this.timeline.addTween(cjs.Tween.get(this.layer2).wait(1));

	// layer3
	this.layer3 = new lib.layer();
	this.layer3.parent = this;
	this.layer3.setTransform(440,125);
	this.layer3.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 0, 0, 0)];
	this.layer3.cache(-412,-111,821,223);

	this.timeline.addTween(cjs.Tween.get(this.layer3).wait(1));

	// layer4
	this.layer4 = new lib.layer();
	this.layer4.parent = this;
	this.layer4.setTransform(440,125);
	this.layer4.filters = [new cjs.ColorFilter(0.4, 0.4, 0.4, 1, 0, 0, 0, 0)];
	this.layer4.cache(-412,-111,821,223);

	this.timeline.addTween(cjs.Tween.get(this.layer4).wait(1));

	// layer5
	this.layer5 = new lib.layer();
	this.layer5.parent = this;
	this.layer5.setTransform(440,125);
	this.layer5.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 0, 0, 0)];
	this.layer5.cache(-412,-111,821,223);

	this.timeline.addTween(cjs.Tween.get(this.layer5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(439,124,882,252);
// library properties:
lib.properties = {
	width: 880,
	height: 250,
	fps: 120,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;