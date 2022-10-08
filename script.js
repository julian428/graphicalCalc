const graph = document.getElementsByClassName("graph")[0];
const S = { x: graph.clientWidth / 2, y: graph.clientHeight / 2 };

const f = (x, ...values) => {
  let y = 0;

  //calculate y
  for (let i = values.length - 1; i > 0; i--) {
    y += values[i] * Math.pow(x, i);
  }

  y += values[0];

  const point = document.createElement("div");
  point.classList.add("point");
  point.style.left = S.x + x + "px";
  point.style.bottom = S.y + y + "px";
  graph.appendChild(point);
};

for (let i = -200; i < 200; i += 0.01) {
  f(i, 0, 0, 1, 0.1);
}
