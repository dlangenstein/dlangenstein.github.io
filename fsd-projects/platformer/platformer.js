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
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 710, 600, 30)
    createPlatform(300, 620, 100, 10, "lime"); // bright green or a finished platform
    createPlatform(150, 500, 100, 10, "lime");
    createPlatform(400, 400, 100, 10, "lime");
    createPlatform(100, 150, 150, 10, "lime");
    createPlatform(300, 270, 50, 10, "lime");
    createPlatform(600, 200, 200, 540);
    createPlatform(650, 0, 200, 50);
    createPlatform(850, 0, 20, 500, "purple");
    createPlatform(800, 710, 150, 30, "lime");
    createPlatform(850, 500, 450, 50, "magenta");
    createPlatform(1000, 710, 100, 30, "blue")
    createPlatform(1200, 710, 100, 30, "orange")
    createPlatform(1350, 600, 50, 30, "red")




    // TODO 3 - Create Collectables

    createCollectable("goog", 200, 170, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
    createCannon("left", 680, 230)
    createCannon("top", 1300, 2000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
