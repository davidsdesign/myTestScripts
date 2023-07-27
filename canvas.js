(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.text = new cjs.Text("Click button to\nproceed", "12px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 136;
	this.text.parent = this;
	this.text.setTransform(29.9,-14.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#333333").beginStroke().moveTo(-77.5,22.5).lineTo(-77.5,-22.5).lineTo(77.5,-22.5).lineTo(77.5,22.5).closePath();
	this.shape.setTransform(30.45,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-22.5,155,45);


// stage content:
(lib.Untitled11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.my_btn.addEventListener("click", function () {
			window.open("http://www.adobe.com", '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// Animated Button
	this.my_btn = new lib.Symbol1();
	this.my_btn.name = "my_btn";
	this.my_btn.setTransform(47,41.5);
	new cjs.ButtonHelper(this.my_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.my_btn).wait(1).to({regX:30.5,x:78.5},0).wait(1).to({x:81.1},0).wait(1).to({x:85.3},0).wait(1).to({x:90.85},0).wait(1).to({x:97.85},0).wait(1).to({x:106.1},0).wait(1).to({x:115.6},0).wait(1).to({x:126.2},0).wait(1).to({x:137.95},0).wait(1).to({x:150.65},0).wait(1).to({x:164.35},0).wait(1).to({x:178.85},0).wait(1).to({x:194.15},0).wait(1).to({x:210.15},0).wait(1).to({x:226.8},0).wait(1).to({x:244.05},0).wait(1).to({x:261.8},0).wait(1).to({x:279.95},0).wait(1).to({x:298.5},0).wait(1).to({x:317.35},0).wait(1).to({x:336.4},0).wait(1).to({x:355.65},0).wait(1).to({x:375},0).wait(1).to({x:394.35},0).wait(1).to({x:413.7},0).wait(1).to({x:432.95},0).wait(1).to({x:452},0).wait(1).to({x:470.9},0).wait(1).to({x:489.45},0).wait(1).to({x:507.7},0).wait(1).to({x:525.5},0).wait(1).to({x:542.85},0).wait(1).to({x:559.65},0).wait(1).to({x:575.9},0).wait(1).to({x:591.5},0).wait(1).to({x:606.35},0).wait(1).to({x:620.5},0).wait(1).to({x:633.8},0).wait(1).to({x:646.25},0).wait(1).to({x:657.8},0).wait(1).to({x:668.35},0).wait(1).to({x:677.85},0).wait(1).to({x:686.3},0).wait(1).to({x:693.6},0).wait(1).to({x:699.7},0).wait(1).to({x:704.6},0).wait(1).to({x:708.2},0).wait(1).to({x:710.5},0).wait(1).to({x:711.4},0).wait(1).to({x:710.6},0).wait(1).to({x:708.45},0).wait(1).to({x:705.05},0).wait(1).to({x:700.45},0).wait(1).to({x:694.6},0).wait(1).to({x:687.6},0).wait(1).to({x:679.45},0).wait(1).to({x:670.25},0).wait(1).to({x:659.95},0).wait(1).to({x:648.7},0).wait(1).to({x:636.4},0).wait(1).to({x:623.2},0).wait(1).to({x:609.15},0).wait(1).to({x:594.3},0).wait(1).to({x:578.7},0).wait(1).to({x:562.35},0).wait(1).to({x:545.4},0).wait(1).to({x:527.85},0).wait(1).to({x:509.85},0).wait(1).to({x:491.35},0).wait(1).to({x:472.55},0).wait(1).to({x:453.4},0).wait(1).to({x:434},0).wait(1).to({x:414.5},0).wait(1).to({x:394.9},0).wait(1).to({x:375.3},0).wait(1).to({x:355.75},0).wait(1).to({x:336.35},0).wait(1).to({x:317.2},0).wait(1).to({x:298.3},0).wait(1).to({x:279.75},0).wait(1).to({x:261.65},0).wait(1).to({x:244.05},0).wait(1).to({x:227},0).wait(1).to({x:210.6},0).wait(1).to({x:194.85},0).wait(1).to({x:179.9},0).wait(1).to({x:165.75},0).wait(1).to({x:152.5},0).wait(1).to({x:140.15},0).wait(1).to({x:128.75},0).wait(1).to({x:118.45},0).wait(1).to({x:109.15},0).wait(1).to({x:101},0).wait(1).to({x:94},0).wait(1).to({x:88.2},0).wait(1).to({x:83.6},0).wait(1).to({x:80.25},0).wait(1).to({x:78.2},0).wait(1).to({x:77.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(364,45.3,424.9,146.60000000000002);
// library properties:
lib.properties = {
	id: 'A3199E069036994A8B06FF76EDE4BECB',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A3199E069036994A8B06FF76EDE4BECB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;