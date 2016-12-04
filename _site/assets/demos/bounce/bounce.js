

window.onload = function () {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    

    
    var movers = [];
    var moverCount = 10;
    
    for(var i = 0; i < moverCount; i++){
        var m = new Mover(Math.random()*100, Math.random()*100);
        m.velocity = new Vector(Math.random()*15, Math.random()*15);
        movers.push(m);
    }
    
    function loop() {
        clear();
        update();
        draw();
        queue();
    }

    function clear() {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function update() {
        movers.map(function(m){
            m.update();
            m.checkBounds();
        });
    }
    

    function draw() {
       movers.map(function(m){
           m.draw(ctx);
       });
    }

    function queue() {
        window.requestAnimationFrame(loop);
    }
    
    loop();
}