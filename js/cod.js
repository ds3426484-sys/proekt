// Слайдер
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    const slideWidth = slides[0].clientWidth;
    let autoSlideInterval;
    
    // Функция для перехода к слайду
    function goToSlide(index) {
        if (index < 0) {
            currentSlide = slideCount - 1;
        } else if (index >= slideCount) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
    
    // Автопрокрутка
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 3000); // Смена слайда каждые 3 секунды
    }
    
    // Остановка автопрокрутки при наведении
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    // Возобновление автопрокрутки при уходе курсора
    slider.addEventListener('mouseleave', startAutoSlide);
    
    // Запуск автопрокрутки
    startAutoSlide();
});




// -----------------------------------------------------------
    // рвскрывающийся блок первый
    document.getElementById('myBlock').onclick = function(e) {
        if (e.target.classList.contains('title')) {
            this.classList.toggle('open');
        }
    }
    
    // модельное окно
    function openModal() {
        document.getElementById('modal').style.display = 'block';
    }
    
    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }


// рвскрывающийся блок второй
    document.getElementById('myBloc').onclick = function(e) {
        if (e.target.classList.contains('titl')) {
            this.classList.toggle('open');
        }
    }
    
    // модельное окно
    function openModal() {
        document.getElementById('moda').style.display = 'block';
    }
    
    function closeModal() {
        document.getElementById('moda').style.display = 'none';
    }



// рвскрывающийся блок третий
document.getElementById('myBlo').onclick = function(e) {
    if (e.target.classList.contains('tit')) {
        this.classList.toggle('open');
    }
}

// модельное окно
function closeModal() {
    document.getElementById('moda').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function sendForm() {
    const fam = document.getElementById('fam').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (fam && name && email && phone) {
        alert(' Резюме отправлено!\nМы свяжемся с вами в ближайшее время.');
        closeModal();
    } else {
        alert(' Заполните все обязательные поля!');
    }
}

// Закрытие по клику вне модалки
window.onclick = function(event) {
    if (event.target.id === 'moda') {
        closeModal();
    }
}