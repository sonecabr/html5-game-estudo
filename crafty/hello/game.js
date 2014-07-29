Game = (function(){
	var global = {},		
		functions = {};
	
	global.screen = {};
	global.grid = {
		width:24,
		height:16,
		tile:{
			width:16,
			height:16
		}
	};


	functions.initContext = function(callback){
		Crafty.init(Game.width(), Game.height());
		Crafty.background('rgb(249,223,125)');		

		if(typeof callback != 'undefined'){
			callback();
		}

	};

	functions.initTerrain = function(callback){
		// Place a tree at every edge square on our grid of 16x16 tiles
	    for (var x = 0; x < global.grid.width; x++) {
	      for (var y = 0; y < global.grid.height; y++) {
	        var at_edge = x == 0 || x == global.grid.width - 1 || y == 0 || y == global.grid.height - 1;
	 
	        if (at_edge) {
	          // Place a tree entity at the current tile
	          Crafty.e('Tree').at(x, y);
	        } else if (Math.random() < 0.06) {
	          // Place a bush entity at the current tile
	          Crafty.e('Bush').at(x, y);
	        }
	      }
	    }
	};


	//screen functions
	global.screen.width = function(){
		return global.grid.width * global.grid.tile.width;
	};

	global.screen.height = function(){
		return global.grid.height * global.grid.tile.height;
	};


	//game interaction functions
	functions.start = function(){
		console.log('init game...');
		functions.initContext(function(){
			console.log('context loaded');
			functions.initTerrain(function(){
				console.log('game loaded');
			});	
		});
		
	};

	return {
		start: functions.start,
		map_grid: global.grid,
		height: global.screen.height,
		width: global.screen.width
	};
})();

