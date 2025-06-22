// Movimento e clique no círculo interativo da seção #extra
window.addEventListener('DOMContentLoaded', () => {
  const circle = document.getElementById('moving-circle');
  const area = document.getElementById('moving-area');

  if (!circle || !area) return;

  const circleSize = 60;
  let posX = 0;
  let posY = 0;
  let velX = 1.5;
  let velY = 1;

  function animate() {
    const areaWidth = area.clientWidth;
    const areaHeight = area.clientHeight;

    posX += velX;
    posY += velY;

    if (posX + circleSize > areaWidth || posX < 0) velX *= -1;
    if (posY + circleSize > areaHeight || posY < 0) velY *= -1;

    circle.style.left = posX + 'px';
    circle.style.top = posY + 'px';

    requestAnimationFrame(animate);
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++) {
      color += letters[Math.floor(Math.random()*16)];
    }
    return color;
  }

  circle.addEventListener('click', () => {
    circle.style.backgroundColor = getRandomColor();
  });

  animate();
});
