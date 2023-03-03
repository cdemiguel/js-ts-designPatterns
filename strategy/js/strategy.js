const data = [
  {
    name: "Pikachu",
    country: "Japan",
    info: "Electric",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
  {
    name: "Charmander",
    country: "China",
    info: "Fire",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    name: "Bulbasaur",
    country: "USA",
    info: "Grass",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  }
]

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy); 
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {

  show(data, element) {
    let html = '';
    data.forEach(item => {
      html += `<li>${item.name} - ${item.country}</li>`
    })
    element.innerHTML = html;
  }
}

class DetailedListStrategy {
  show(data, element) {
    let html = '';
    data.forEach(item => {
      html += `
          <div>
            <h3>${item.name}</h3>
            <p>${item.country}</p>
            <p>${item.info}</p>
            <img src="${item.img}" alt="${item.name}" width="20%">
          </div>
      `
    })
    element.innerHTML = html;
  }
}

const strategies = [new ListStrategy(),  new DetailedListStrategy()];

const info1 = new InfoContext(new ListStrategy(), data, content); 
info1.show();

slcOptions.addEventListener("change", (event)=> {
  const strategy = strategies[event.target.value];
  info1.setStrategy(strategy);
  info1.show(); 
})