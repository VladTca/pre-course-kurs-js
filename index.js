// data
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: [
        {title: 'Front', id: 111},
        {title: 'Back', id: 222},
        {title: 'DevOps', id: 333}
    ]
}

// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);

const techSelectElement = document.createElement('select');

// Создание первого варианта (option) для выпадающего списка
const techSelectOption0Element = document.createElement('option');
techSelectOption0Element.value = '1';
techSelectOption0Element.append(info.technologies[0].title); // Добавление текст к первому варианту
techSelectElement.append(techSelectOption0Element); // Добавление первого варианта в выпадающий список


// Создание второго варианта (option) для выпадающего списка
const techSelectOption1Element = document.createElement('option');
techSelectOption1Element.value = '2';
techSelectOption1Element.append(info.technologies[1].title); // Добавление текста  ко второму варианту
techSelectElement.append(techSelectOption1Element); // Добавление второго варианта в выпадающий список
techSelectElement.append(techSelectOption1Element);


// third
const techSelectOption2Element = document.createElement('option');
techSelectOption2Element.value = '3';
techSelectOption2Element.append(info.technologies[2].title); // Добавление текста 'HTML' ко второму варианту
techSelectElement.append(techSelectOption2Element); // Добавление второго варианта в выпадающий список
techSelectElement.append(techSelectOption2Element);

document.body.append(techSelectElement);

