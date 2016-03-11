var ATTACK_POINT_DEF = 100;
var ENEMY_LIFE_DEF = 400;
var ENEMY_IMG_URL = "img/milkSake.png";

$( function() {
	var Player = function() {
		this.attackPoint = ATTACK_POINT_DEF;
	};

	var Enemy = function( player, imageUrl){
		$( "#enemy").append( '<img id="enemyImg" src="' + imageUrl + '">');
		this.player = player;
		this.maxLife = ENEMY_LIFE_DEF;
		this.image = $( "#enemyImg");
		this.life = this.maxLife;
		this.dead = false;
	};

	Enemy.prototype.hit = function() {
		this.life -= this.player.attackPoint;
		console.log( "enlife : ", this.life);

		if ( this.life <= 0) {
			this.dead = true;
		}
	};

	var LifeBar = function( charactor) {
		this.bar = $( "#enemyLifeBar");
		this.maxWidth = this.bar.width();
		this.charactor = charactor;
	};

	LifeBar.prototype.update = function() {
		var percent = 100 / ( this.charactor.maxLife / this.charactor.life);
		var currentWidth = percent / 100 * this.maxWidth;
		var shiftWidth = ( this.maxWidth - currentWidth) / 2;

		// View
		this.bar.animate( {
			width: currentWidth,
			left: -shiftWidth
		}, 300);
		//this.bar.width( currentWidth);
		//this.bar.css( 'left', -shiftWidth);
	};

	// Image preloading
	var enemyImage = "images/milkShake.png";
	$("<img>").attr("src", enemyImage);

	var player = new Player();
	var enemy = new Enemy( player, enemyImage);
	var lifeBar = new LifeBar( enemy);

	$( window).on( 'click', function( eve) {
		enemy.hit();
		lifeBar.update();
		if ( enemy.dead) {
			enemy.image.fadeOut( 2000);
		}
	});

});