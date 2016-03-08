var ATTACK_POINT_DEF = 100;
var ENEMY_LIFE_DEF = 400;

$( function() {
	var Player = function() {
		this.attackPoint = ATTACK_POINT_DEF;
	};

	var Enemy = function( player){
		this.player = player;
		this.maxLife = ENEMY_LIFE_DEF;
		this.life = this.maxLife;
	};

	Enemy.prototype.hit = function() {
		this.life -= this.player.attackPoint;
		console.log( "enlife : ", this.life);
	};

	var LifeBar = function( charactor) {
		this.bar = $( "#EnemyLifeBar");
		this.maxWidth = this.bar.width();
		this.charactor = charactor;
	};

	LifeBar.prototype.update = function() {
		var percent = 100 / ( this.charactor.maxLife / this.charactor.life);
		var currentWidth = percent / 100 * this.maxWidth;
		var shiftWidth = ( this.maxWidth - currentWidth) / 2;
		console.log( currentWidth, shiftWidth);

		this.bar.width( currentWidth);
		this.bar.css( 'left', -shiftWidth);
	};

	var player = new Player();
	var enemy = new Enemy( player);
	var lifeBar = new LifeBar( enemy);

	$( window).on( 'click', function( eve) {
		console.log( "hit");
		enemy.hit();
		lifeBar.update();
	});

});