const checkbox = document.getElementById('checkbox');
const label = document.querySelector('label');
const ball = document.querySelector('.ball');
const themeStyle = document.getElementById('theme-style');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');

  const currentColor = label.style.getPropertyValue('background-color');

  
  if (currentColor === 'rgb(255, 255, 255)') {
    themeStyle.href = 'main.css';
    label.style.setProperty('background-color', '#242B33');
    ball.style.setProperty('background-color', '#ffffff');
    
  } else {
    themeStyle.href = 'mainLight.css';
    label.style.setProperty('background-color', '#ffffff');
    ball.style.setProperty('background-color', '#242B33');
  }
});
