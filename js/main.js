// Класс каталог товаров
class productList {
  constructor (container = '.catalog') {
    this.container = container
    this.goods = []
    this._fetchProducts ()
  }

  // метод заполнения массива объектов goods - инкапсуляция, т.к. это только внутренний метод
  // в данном случае просто статично пишем список товаров
  _fetchProducts () {
    this.goods = [
      {id: 1, title: "Ноутбук", price: 2000},
      {id: 2, title: "Монитор", price: 200},
      {id: 3, title: "Процессор", price: 800},
      {id: 4, title: "Принтер", price: 300},
      {id: 5, title: "Клавиатура", price: 100},
      {id: 6, title: "Мышь", price: 10},
      {id: 7, title: "Колонки", price: 20},
      {id: 8, title: "Gamepad", price: 30}    
    ]
  }

  // отрисовка каталога
  render () {
    const block = document.querySelector (this.container)
    for (let product of this.goods) {
      const productObj = new productItem (product)
      //console.log (productObj) // отладка
      block.insertAdjacentHTML ('beforeend', productObj.render ())
    }
  }

  // Д.З. 02 метод, определяющий суммарную стоимость всех товаров
  totalprice () {
    let allPrice = 0
    this.goods.forEach (Element => {
      allPrice += Element.price
    })
    console.log (`Суммарная стоимость всех товаров = ${allPrice}`)
  }
}

// Класс объекта - товара, используется при при создании каталога товаров
class productItem {
  constructor (product, img = 'https://placehold.it/200x150') {
    this.id = product.id
    this.title = product.title
    this.price = product.price
    this.img = img
  }

  // метод отрисовки верстки продукта
  render () {
    return `
      <div class="catalog-item-wrp" data-id="${this.id}">
        <img class="catalog-item-pic" src="https://placehold.it/200x150" alt="${this.title}" width="200" height="150">
        <h3 class="catalog-item-h3">${this.title}</h3>
        <span class="catalog-item-price">${this.price}</span>
        <button class="catalog-item-button"
        data-id="${this.id}"
        data-name="${this.title}"
        data-price="${this.price}"> 
        Купить
        </button>
      </div>
    `
  }
}

// теперь создаем объект list класса productList
let list = new productList ()
// и с помощью метода render вставляем верстку в блок каталога
list.render ()
list.totalprice ()

// Класс товара в корзине
class cartItem {
  constructor (product, img = 'https://placehold.it/100x80') {
    this.id = product.id
    this.title = product.title
    this.price = product.price
    this.cnt = 0
    this.totalprice = this.cnt * this.price
    this.img = img
  }

  // метод создания верстки товара в корзине
  render () {
    return `
      <div class="cart-item-wrp" data-id="${this.id}">
        <img class="cart-item-pic" src="${this.img}" width="100" height="80">
        <div class="cart-item-right">
          <span class="cart-item-h3">${this.img}</span>
          <span class="cart-item-quantity">${this.cnt}</span>
          <span class="cart-item-price">${this.price}</span>
          <button class="cart-item-discard"
          data-id="${this.id}"
          data-name="${this.title}"
          data-price="${this.price}">   
          </button>
        </div>
      </div>
    `
  } 
}

// Класс корзины
class cart {
  constructor (container = '.cart') {
    this.container = container
    //this.goods = []
    this._fetchProducts ()
  }

  // отрисовка корзины
  render () {
  }
  
  // метод добавления товара в корзину

  // метод удаления товара из корзины
}