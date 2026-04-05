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








class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.submitBtn = document.getElementById('submit-btn');
        this.init();
    }

    init() {
        // Валидация при вводе (особенно для email)
        this.form.addEventListener('input', (e) => {
            this.validateField(e.target);
        });

        // Валидация при отправке
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                this.handleSubmit();
            }
        });

        // Очистка ошибок при фокусе
        this.form.addEventListener('focusin', (e) => {
            this.clearFieldError(e.target);
        });

        // Проверка при потере фокуса (blur) - дополнительная для email
        this.form.addEventListener('blur', (e) => {
            if (e.target.name === 'email') {
                this.validateField(e.target);
            }
        }, true);
    }

    // 🔥 СТРОГАЯ ВАЛИДАЦИЯ EMAIL для русских сервисов
    validateEmail(email) {
        if (!email || email.length < 5) return false;

        // Поддерживаемые домены: gmail, yandex, mail.ru, rambler, bk, ya
        const allowedDomains = [
            'gmail.com', 'yandex.ru', 'ya.ru', 'mail.ru', 'bk.ru', 
            'rambler.ru', 'list.ru', 'inbox.ru'
        ];

        const emailLower = email.toLowerCase().trim();
        const domain = emailLower.split('@')[1];

        // Проверяем точное совпадение домена
        return allowedDomains.includes(domain);
    }

    validatePassword(password) {
        return password.length >= 6;
    }

    validateField(field) {
        const isValid = this.validateSingleField(field);
        
        if (isValid) {
            this.clearFieldError(field);
            field.classList.add('input-success');
        } else {
            // 🔥 КРАСНАЯ РАМКА + ОШИБКА для НЕПРАВИЛЬНОГО EMAIL
            field.classList.add('input-error');
            this.showFieldError(field);
        }
        
        this.toggleSubmitButton();
    }

    validateSingleField(field) {
        const value = field.value.trim();
        const fieldName = field.name;

        switch(fieldName) {
            case 'email':
                return this.validateEmail(value);
            case 'password':
                return this.validatePassword(value);
            default:
                return value.length > 0;
        }
    }

    validateForm() {
        let isValid = true;
        const fields = this.form.querySelectorAll('input[required]');

        fields.forEach(field => {
            if (!this.validateSingleField(field)) {
                this.showFieldError(field);
                field.classList.add('input-error');
                isValid = false;
            }
        });

        return isValid;
    }

    showFieldError(field) {
        const errorElement = this.form.querySelector(`#${field.name}-error`);
        field.classList.add('input-error');
        field.classList.remove('input-success');
        
        if (errorElement) {
            errorElement.style.display = 'block';
        }
    }

    clearFieldError(field) {
        const errorElement = this.form.querySelector(`#${field.name}-error`);
        field.classList.remove('input-error', 'input-success');
        
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    toggleSubmitButton() {
        const fields = this.form.querySelectorAll('input[required]');
        const allValid = Array.from(fields).every(field => 
            this.validateSingleField(field)
        );
        
        this.submitBtn.disabled = !allValid;
        this.submitBtn.style.opacity = allValid ? '1' : '0.6';
    }

    handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        console.log('✅ Успешная отправка:', data);
        
        this.submitBtn.innerHTML = '⏳ Отправка...';
        this.submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('🎉 Вход выполнен успешно!');
            this.form.reset();
            this.submitBtn.textContent = 'Вход';
            this.submitBtn.disabled = true;
        }, 1500);
    }
}

// 🚀 Автозапуск
document.addEventListener('DOMContentLoaded', () => {
    new FormValidator('registration-form');
});


