
function makeStars(countries) {
  const rotation = 360 / countries.length;
  const radius = 300;
  const circleDiv = document.getElementById('circle');
  const offsetToParentCenter = Number(circleDiv.offsetWidth / 2);
  const offsetToChildCenter = 20;
  const totalOffset = offsetToParentCenter - offsetToChildCenter;
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const starElement = document.createElement('a');
    starElement.className = 'star';
    starElement.href = country.href;
    starElement.target = "_blank";
    const radians = (rotation * i) * (Math.PI / 180);
    const y = Math.sin(radians) * radius;
    const x = Math.cos(radians) * radius;
    starElement.style.top = `${y + totalOffset}px`;
    starElement.style.left = `${x + totalOffset}px`;
    circleDiv.appendChild(starElement);
  }
}

const countries = [
  { name: "Belgium", href: 'https://en.wikipedia.org/wiki/Belgium' },
  { name: "France", href: 'https://en.wikipedia.org/wiki/France' },
  { name: "Germany", href: 'https://en.wikipedia.org/wiki/Germany' },
  { name: "Italy", href: 'https://en.wikipedia.org/wiki/Italy' },
  { name: "Luxembourg", href: 'https://en.wikipedia.org/wiki/Luxembourg' },
  { name: "Netherlands", href: 'https://en.wikipedia.org/wiki/Netherlands' },
  { name: "Denmark", href: 'https://en.wikipedia.org/wiki/Denmark' },
  { name: "Ireland", href: 'https://en.wikipedia.org/wiki/Republic_of_Ireland' },
  { name: "Greece", href: 'https://en.wikipedia.org/wiki/Greece' },
  { name: "Portugal", href: 'https://en.wikipedia.org/wiki/Portugal' },
  { name: "Spain", href: 'https://en.wikipedia.org/wiki/Spain' },
  { name: "Austria", href: 'https://en.wikipedia.org/wiki/Austria' },
  { name: "Finland", href: 'https://en.wikipedia.org/wiki/Finland' },
  { name: "Sweden", href: 'https://en.wikipedia.org/wiki/Sweden' },
  { name: "Cyprus", href: 'https://en.wikipedia.org/wiki/Cyprus' },
  { name: "Czechia", href: 'https://en.wikipedia.org/wiki/Czech_Republic' },
  { name: "Estonia", href: 'https://en.wikipedia.org/wiki/Estonia' },
  { name: "Hungary", href: 'https://en.wikipedia.org/wiki/Hungary' },
  { name: "Latvia", href: 'https://en.wikipedia.org/wiki/Latvia' },
  { name: "Lithuania", href: 'https://en.wikipedia.org/wiki/Lithuania' },
  { name: "Malta", href: 'https://en.wikipedia.org/wiki/Malta' },
  { name: "Poland", href: 'https://en.wikipedia.org/wiki/Poland' },
  { name: "Slovakia", href: 'https://en.wikipedia.org/wiki/Slovakia' },
  { name: "Slovenia", href: 'https://en.wikipedia.org/wiki/Slovenia' },
  { name: "Bulgaria", href: 'https://en.wikipedia.org/wiki/Bulgaria' },
  { name: "Romania", href: 'https://en.wikipedia.org/wiki/Romania' },
  { name: "Croatia", href: 'https://en.wikipedia.org/wiki/Croatia' },
]

makeStars(countries)
