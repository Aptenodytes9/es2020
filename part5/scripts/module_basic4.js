import("./lib/Figure.js").then(fig => {
    console.log(fig.triangle(10, 5));
    console.log(fig.circle(2));
  });

/*
import("./lib/Figure.js").then(({ triangle }) => {
    console.log(triangle(10, 5));
  });
*/

/*
async function main() {
    let fig = await import('./lib/Figure.js');
    console.log(fig.triangle(10, 5));
}
main();
*/