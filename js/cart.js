// =====================================================
// МОДУЛЬНОЕ ОКНО ДЛЯ РЕЗЮМЕ
// =====================================================
function openModal(id) {
    // Показываем модальное окно
    document.getElementById('modal').style.display = 'block';
    
    // Меняем заголовок на номер вакансии
    document.getElementById('modalTitle').innerText = `Резюме на вакансию #${id}`;
    
    // Меняем подсказку в поле сообщения
    document.getElementById('message1').placeholder = `Укажите ваш опыт для вакансии #${id}`;
}

function closeModal() {
    // Скрываем модальное окно
    document.getElementById('modal').style.display = 'none';
}

// Закрытие модалки при клике ВНЕ её (на затемнённый фон)
window.onclick = function (event) {
    if (event.target.id === 'modal') {  // Клик по самому модальному окну
        closeModal();
    }
}

// =====================================================
// ФУНКЦИЯ ОТПРАВКИ РЕЗЮМЕ НА СЕРВЕР
// =====================================================
async function fetchData(d) {
    // Адрес сервера для сохранения резюме
    const url = `http://localhost/myserver2/vacancy`;
    
    // Отправляем POST запрос с данными резюме
    const response = await fetch(url, {
        method: "POST",  // Отправляем данные
        headers: {
            Accept: "application/json",              // Ожидаем JSON ответ
            "Content-Type": "application/x-www-form-urlencoded",  // Формат формы
        },
        body: new URLSearchParams(d).toString(),  // Данные в формате URL
    });
    
    return response;  // Возвращаем результат для проверки
}

console.log(0);  // Тестовый лог

// =====================================================
// ОБРАБОТЧИКИ КНОПОК ОТПРАВКИ РЕЗЮМЕ (4 вакансии)
// =====================================================

// Форма №1 - первая вакансия
function get_data_form1() {
    const btn_vac = document.querySelector("#btn_vac1");  // Кнопка "Отправить #1"

    btn_vac.addEventListener("click", (event) => {
        // Собираем данные из полей формы №1
        const fam1 = document.querySelector("#fam1").value;     // Фамилия
        const name1 = document.querySelector("#name1").value;   // Имя
        const email1 = document.querySelector("#email1").value; // Email
        const phone1 = document.querySelector("#phone1").value; // Телефон
        const message1 = document.querySelector("#message1").value; // Сообщение/опыт

        // Формируем объект для отправки
        d = {
            fam: fam1,    // Фамилия
            name: name1,  // Имя
            email: email1, // Почта
            phone: phone1, // Телефон
            message: message1 // Текст резюме
        };
        
        try {
            // Отправляем резюме на сервер
            const response = fetchData(d);
            if (response.ok) {
                // СЮДА: успех - показать "Отправлено!"
            } else {
                // СЮДА: ошибка сервера
            }
        } catch (error) {
            // СЮДА: ошибка сети
        }
    });
}

// Форма №2 - вторая вакансия (аналогично)
function get_data_form2() {
    const btn_vac = document.querySelector("#btn_vac2");  // Кнопка "Отправить #2"

    btn_vac.addEventListener("click", (event) => {
        // Собираем данные формы №2
        const fam2 = document.querySelector("#fam2").value;
        const name2 = document.querySelector("#name2").value;
        const email2 = document.querySelector("#email2").value;
        const phone2 = document.querySelector("#phone2").value;
        const message2 = document.querySelector("#message2").value;
        
        d = {
            fam: fam2, name: name2, email: email2, phone: phone2, message: message2
        };
        
        try {
            const response = fetchData(d);  // Отправка
            if (response.ok) {} else {}
        } catch (error) {}
    });
}

// Форма №3 - третья вакансия (аналогично)
function get_data_form3() {
    const btn_vac = document.querySelector("#btn_vac3");

    btn_vac.addEventListener("click", (event) => {
        // Данные формы №3
        const fam3 = document.querySelector("#fam3").value;
        const name3 = document.querySelector("#name3").value;
        const email3 = document.querySelector("#email3").value;
        const phone3 = document.querySelector("#phone3").value;
        const message3 = document.querySelector("#message3").value;
        
        d = {fam: fam3, name: name3, email: email3, phone: phone3, message: message3};
        
        console.log(fetchData(d));  // Отладка
        
        try {
            const response = fetchData(d);
            console.log(fetchData(d));  // Повторная отладка
            if (response.ok) {} else {}
        } catch (error) {}
    });
}

// Форма №4 - четвёртая вакансия (аналогично)
function get_data_form4() {
    const btn_vac = document.querySelector("#btn_vac4");

    btn_vac.addEventListener("click", (event) => {
        // Данные формы №4
        const fam4 = document.querySelector("#fam4").value;
        const name4 = document.querySelector("#name4").value;
        const email4 = document.querySelector("#email4").value;
        const phone4 = document.querySelector("#phone4").value;
        const message4 = document.querySelector("#message4").value;
        
        d = {fam: fam4, name: name4, email: email4, phone: phone4, message: message4};
        
        console.log(fetchData(d));
        
        try {
            const response = fetchData(d);
            console.log(fetchData(d));
            if (response.ok) {} else {}
        } catch (error) {}
    });
}

// =====================================================
// ЗАПУСК ВСЕХ ОБРАБОТЧИКОВ ПОСЛЕ ЗАГРУЗКИ СТРАНИЦЫ
// =====================================================
document.addEventListener("DOMContentLoaded", function () {
    get_data_form1();  // Вакансия 1
    get_data_form2();  // Вакансия 2
    get_data_form3();  // Вакансия 3
    get_data_form4();  // Вакансия 4
});