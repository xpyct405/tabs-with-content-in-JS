// Получим все .tablink кнопки
let tabLink = document.querySelectorAll('.tablink');

// Получим все .tabcontent элементы
let tabContent = document.querySelectorAll('.tabcontent');

// Запускаем цикл для каждой кнопки tabLink
for (let i = 0; i < tabLink.length; i++){
    tabLink[i].addEventListener('click', function (){
        // При клике по любой из кнопок, у всех кнопок будет удаляться класс 'active'
        for (let i = 0; i < tabLink.length; i++){
            tabLink[i].classList.remove('active')
    }
    
    // Добавить кнопке по которой кликаем класс .active
    this.classList.add('active')

    // При клике по любой из кнопок проходимся по всем tabContent и меняем стиль 
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    // tabContent с индексом i (как и кнопке) меняем стиль на block
    tabContent[i].style.display = "block"; 
    });
}

// Чтобы изначально была открыта первая вкладка
document.querySelector('#default-link').click()