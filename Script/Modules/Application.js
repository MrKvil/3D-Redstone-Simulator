var gui, world, player, performancer;

const Application = (function() {
	// let gui, world, player, performancer;
	let lastTimeStamp = 0;
	let leftOver = 0;
	let lagCount = 0;
	let paused = true;
	let config = {};

	function loadFinish() {
		paused = true;
		gui.setState("help");
		update();
	}

	function setup() {
		gui = new GUI(this);
		Settings.performance.ignoreExcessiveLag.attach(config, "ignoreLag");
		LoadingProgresser.setDelayed(Settings.performance.delayedLoading.value);
		LoadingProgresser.setGame(this).setGUI(gui).begin().then(()=>loadFinish.call(this));
	}

	function halt() {
		if (config.ignoreLag)
			return;
		paused = true;
		gui.setState("halted");
	}

	let difference, timeStamp;
	function update() {
		timeStamp = performance.now();
		difference = timeStamp - lastTimeStamp + leftOver;
		lastTimeStamp = timeStamp;
		gui.performancer.update(difference);
		if (difference > 256 && !paused) {
			if (difference > 1024) {
				halt();
				difference = 0;
			} else if (lagCount < 2) {
				lagCount++;
				difference = 256;
			} else {
				halt();
				difference = 32;
			}
		} else {
			lagCount = 0;
		}
		if (!paused) {
			while (difference >= 16) {
				difference -= 16;
				player.update();
			}
			leftOver = difference;
		}
		gui.renderer.render(gui.scene, gui.camera);
		window.requestAnimationFrame(update);
	}

	function onMouseDown(ev) {
		gui.onMouseDown(ev);
	}

	function onMouseMove(ev) {
		//gui.onMouseMove(ev);
	}

	function onMouseUp(ev) {
		gui.onMouseUp(ev);
	}

	function parseInput(input) {
		window.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
	}

	return {
		pause: function() {
			return (paused = true);
		},
		resume: function() {
			return (paused = false);
		},
		init: function(input) {
			parseInput(input);
			setup.call(this);
			this.init = undefined;
		},
		setupWorld: function() {
			this.world = new WorldHandler(gui.scene, this.textureStitcher);
			world = this.world;
		},
		setupPlayer: function() {
			player = new Player(gui.scene, gui.camera, true);
			player.parent = this;
			player.controls.onRelease = () => {
				gui.showInventory();
			}
		},
		render: function() {
			gui.renderer.render(gui.scene, gui.camera);
		}
	}
}());
