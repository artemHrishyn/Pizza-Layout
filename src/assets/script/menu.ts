const products = [
    {
        "id": 1,
        'title': 'Пепероні',
        'description': 'Гострий різновид салямі італо-американського походження, приготований з в"яленого м"яса і приправлений паприкою або різновидами перцю чилі, а також назва піци американського походження.',
        "price": 120
    },
    {
        "id": 2,
        'title': 'Цезар',
        'description': 'Вершкова основа, сир сулугуні, шпондер, курка печена, айсберг, чері, сир пармезан, соус цезар',
        "price": 247
    },
    {
        "id": 3,
        'title': 'З оливками',
        'description': 'Склад: моцарелла, буженина, салямі, мисливські ковбаски, шинка, бекон, маслини, орегано, томатний соус',
        "price": 150
    },
    {
        "id": 4,
        'title': 'З перцем',
        'description': 'Піца з болгарським перцем та шматочками копченого м"яса – комбінована начинка з моцарелою, пармезаном та оливками.',
        "price": 125
    },
    {
        "id": 5,
        'title': 'З шинкою та грибами',
        'description': 'Виріб з дріжджового тіста трикутної форми з начинкою з шинки, печериць, твердого сиру та соусу',
        "price": 130
    },
    {
        "id": 6,
        'title': 'Пепероні',
        'description': 'Гострий різновид салямі італо-американського походження, приготований з в"яленого м"яса і приправлений паприкою або різновидами перцю чилі, а також назва піци американського походження.',
        "price": 140
    },
    {
        "id": 7,
        'title': 'З печеною картоплею',
        'description': 'Ситна та незвичайна піца з картоплею, часником, копченим беконом та кропом, в якій виразно відчуваються українські мотиви.',
        "price": 180
    },
    {
        "id": 8,
        'title': 'Мексиканська',
        'description': 'Оберіть розмір Вашої піци 25 см або 40 см Середньо гостра. Томатний соус, салямі, балик, помідор, солодкий перець, маринована цибуля марс, кукурудза. моцарелла',
        "price": 95
    },
    {
        "id": 9,
        'title': '4 сезона',
        'description': 'Італійська піца, яка розділена на чотири частини з чотирма різними начинками, кожна з яких представляє один сезон року. Артишоки символізують весну, помідори чи базилік символізують літо, гриби символізують осінь, а шинка, прошутто та оливки символізують зиму.',
        "price": 90
    }
];

const catalog: HTMLElement = document.querySelector('.catalog')!;

products.forEach(product => {
    const item: HTMLElement = document.createElement('div');
    item.classList.add('catalog__item');
    
    const imgValue: HTMLImageElement = document.createElement('img');
    imgValue.src = `./assets/image/pizza-${product.id}.svg`;
    imgValue.alt = 'pizza';
    item.append(imgValue);
    
    const title: HTMLElement = document.createElement('h6');
    title.textContent = product.title;
    item.append(title);
    
    const text: HTMLElement = document.createElement('p');
    text.textContent = product.description;
    text.classList.add('catalog__item__text');
    item.append(text);
    
    const price: HTMLElement = document.createElement('p');
    price.textContent = product.price.toString();
    price.classList.add('catalog__item__price');
    item.append(price);
    
    catalog.append(item);
});