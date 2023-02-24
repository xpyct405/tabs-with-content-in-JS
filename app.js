// Get all .tablink items
let tabLinks = document.querySelectorAll('.tablink');
// Get all .tabcontent item
let tabContents = document.querySelectorAll('.tabcontent');

// Запускаем цикл для каждой вкладки
for (let i = 0; i < tabLinks.length; i++){
    tabLinks[i].addEventListener('click', function (){

    // Removes all classes 'active' in .tablink items
    for (let i = 0; i < tabLinks.length; i++){
        tabLinks[i].classList.remove('active')
    }
    // Add .active class
    tabLinks[i].classList.add('active')

    // Hide  all .tabcontent items
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    // Show .tabcontent[i] item
    tabContents[i].style.display = "block"; 
    });
}


// Чтобы изначально была открыта первая вкладка
document.querySelector('#default-link').click()