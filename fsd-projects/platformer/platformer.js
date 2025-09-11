$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 710, 600, 30, "#22556D")
    createPlatform(300, 620, 100, 10, "#22556D"); // bright green or a finished platform
    createPlatform(150, 500, 100, 10, "#22556D");
    createPlatform(400, 400, 100, 10, "#22556D");
    createPlatform(100, 150, 150, 10, "#22556D");
    createPlatform(300, 270, 50, 10, "#22556D");
    createPlatform(600, 200, 200, 540, "#22556D");
    createPlatform(650, 0, 200, 50, "#22556D");
    createPlatform(850, 0, 20, 500, "#22556D");
    createPlatform(800, 710, 150, 30, "#22556D");
    createPlatform(850, 500, 450, 50, "#22556D");
    createPlatform(1000, 710, 100, 30, "#22556D");
    createPlatform(1200, 710, 100, 30, "#22556D");
    createPlatform(1350, 600, 50, 10, "#22556D");
    createPlatform(870, 450, 50, 10, "#22556D");
    createPlatform(960, 100, 20, 300, "#22556D");
    createPlatform(910, 300, 50, 10, "#22556D");
    createPlatform(870, 150, 50, 10, "#22556D");
    createPlatform(980, 100, 370, 10, "#22556D");
    createPlatform(1030, 200, 370, 10, "#22556D")
    createPlatform(980, 300, 370, 10, "#22556D");
    createPlatform(960, 400, 440, 10, "#22556D")





    // TODO 3 - Create Collectables

    createCollectable("goog", 150, 70, .3, 1);
    createCollectable("moring", 875, 70, .3, 1)
    createCollectable("twin", 1000, 335, .3, 1)

    
    // TODO 4 - Create Cannons
    createCannon("left", 680, 230)
    createCannon("top", 1150, 1000)
    createCannon("top", 1350, 1000)
    createCannon("top", 950, 3000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
