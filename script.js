import {data as emoji} from './data .js'
 
let input = document.querySelector(".main__input");

renderEmoji(emoji);

// передать данные из  БД 
function renderEmoji(data){
    data.forEach(el => {
       createEmojiCard(el); 
    });
}
function createEmojiCard(obj){
    const main = document.querySelector('.cards');
    const card = document.createElement('article');
    card.className = 'card';
    
    // создем символы
    const card__title = document.createElement('h3');
    card__title.className = "card__title";
    card__title.innerText = obj.symbol;

    // название символов
    const emoji__name = document.createElement('p');
    emoji__name.className = "card__subtitle";
    emoji__name.innerText = obj.title;

    // контент карточки
    const card__content = document.createElement('p');
    card__content.className = 'card__content';
    card__content.innerText = remuveDublicate(obj.keywords);// фильтрируем keywords
  
    // выводим карточки
    main.append(card);
    // выводим содержание карточек
    card.append(card__title, emoji__name,card__content);
}

// ф-я ищет emoji с данным названием или emoji с таким  ключевым словом 
function searchEmoji(obj, str) {   
    let searchResult = obj.filter(el => el.title.toLowerCase()=== str || el.keywords.includes(str.toLowerCase()) )
    document.querySelector('.cards').innerHTML='';
    return renderEmoji(searchResult);
}
// ф-я убирает слова дубликаты из keywords БД 
function remuveDublicate(obj){
   let arr =  obj.split(' ');
   let newarr = [];
    for(let i = 0; i<arr.length; i++){    
                 if(!newarr.includes(arr[i])){
              newarr.push(arr[i])
          }  
    
    }
    return newarr.join(' '); 
  }

//  срабатывает ф-я searchEmoji при каждом изминении значения инпут (событие "input")
input.addEventListener('input',function(e){
    searchEmoji(emoji, input.value );      
    // let key = e.key || String.fromCharCode(e.keyCode)
    // if(key = 'Enter'){
    //     searchEmoji(emoji, input.value );       
    // }
 }
)

