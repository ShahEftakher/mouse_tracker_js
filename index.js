document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const anchor = document.getElementById('anchor');
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  //was is suppposed to rotate?
  //need to /**learn more**/
  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  console.log(angleDeg);
  const ball = document.getElementById('ball');
  // balls.forEach((ball) => {
  //   ball.style.transform = `rotate(${90 + angleDeg}deg)`;
  //   // anchor.style.filter = ``
  // });

  ball.style.transform = `rotate(${90 + angleDeg}deg)`;
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
