const fireworks = new Fireworks({
  speed: 5, // Adjust speed of fireworks
  minOpacity: 0.1, // Minimum opacity of fireworks
  maxOpacity: 1, // Maximum opacity of fireworks
  trailWidth: 5, // Width of firework trail
  numParticles: 200, // Number of particles per firework
  explosion: 'circle', // Firework shape (circle, stars, etc.)
});

fireworks.start();

if (window.console && console.clear) {
    console.clear();
}
