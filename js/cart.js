// ---------------------модульное окно--------------------------------------
function openModal(id) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modalTitle').innerText = `Резюме на вакансию #${id}`;
    document.getElementById('message1').placeholder = `Укажите ваш опыт для вакансии #${id}`;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}


// Закрытие по клику вне модалки
window.onclick = function (event) {
    if (event.target.id === 'modal') {
        closeModal();
    }
}


// Отправка на бд

async function fetchData(d) {
    const url = `http://localhost/myserver2/vacancy`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(d).toString(),
    });
    return response; // Возвращаем response для обработки
}



console.log(0)
// ? Обработчик формы регистрации
function get_data_form1() {

    const btn_vac = document.querySelector("#btn_vac1");

    btn_vac.addEventListener("click", (event) => {
        // Сбор данных формы
        const fam1 = document.querySelector("#fam1").value;
        const name1 = document.querySelector("#name1").value;
        const email1 = document.querySelector("#email1").value;
        const phone1 = document.querySelector("#phone1").value;
        const message1 = document.querySelector("#message1").value;
        d = {
            fam: fam1,
            name: name1,
            email: email1,
            phone: phone1,
            message: message1,
        }
        try {
            // Отправка на сервер
            const response = fetchData(d);
            if (response.ok) {
            } else {
            }
        } catch (error) {
        }
    });
}

function get_data_form2() {
    const btn_vac = document.querySelector("#btn_vac2");

    btn_vac.addEventListener("click", (event) => {
        // Сбор данных формы
        const fam2 = document.querySelector("#fam2").value;
        const name2 = document.querySelector("#name2").value;
        const email2 = document.querySelector("#email2").value;
        const phone2 = document.querySelector("#phone2").value;
        const message2 = document.querySelector("#message2").value;
        d = {
            fam: fam2,
            name: name2,
            email: email2,
            phone: phone2,
            message: message2,
        }
        try {
            // Отправка на сервер
            const response = fetchData(d);
            if (response.ok) {
            } else {
            }
        } catch (error) {
        }
    });
}
function get_data_form3() {

    const btn_vac = document.querySelector("#btn_vac3");
    btn_vac.addEventListener("click", (event) => {
        // Сбор данных формы
        const fam3 = document.querySelector("#fam3").value;
        const name3 = document.querySelector("#name3").value;
        const email3 = document.querySelector("#email3").value;
        const phone3 = document.querySelector("#phone3").value;
        const message3 = document.querySelector("#message3").value;
        d = {
            fam: fam3,
            name: name3,
            email: email3,
            phone: phone3,
            message: message3,
        }
        console.log(fetchData(d))
        try {
            // Отправка на сервер
            const response = fetchData(d);
            console.log(fetchData(d))
            if (response.ok) {
            } else {
            }
        } catch (error) {
        }
    });
}
function get_data_form4() {

    const btn_vac = document.querySelector("#btn_vac4");

    btn_vac.addEventListener("click", (event) => {
        // Сбор данных формы
        const fam4 = document.querySelector("#fam4").value;
        const name4 = document.querySelector("#name4").value;
        const email4 = document.querySelector("#email4").value;
        const phone4 = document.querySelector("#phone4").value;
        const message4 = document.querySelector("#message4").value;
        d = {
            fam: fam4,
            name: name4,
            email: email4,
            phone: phone4,
            message: message4,
        }
        console.log(fetchData(d))
        try {
            // Отправка на сервер
            const response = fetchData(d);
            console.log(fetchData(d))
            if (response.ok) {
            } else {
            }
        } catch (error) {
        }
    });
}
// Инициализация при загрузке DOM
document.addEventListener("DOMContentLoaded", function () {
    get_data_form1();
    get_data_form2();
    get_data_form3();
    get_data_form4();
});