// ---------------------модульное окно--------------------------------------
        function openModal(id) {
            document.getElementById('modal').style.display = 'block';
            document.getElementById('modalTitle').innerText = `Резюме на вакансию #${id}`;
            document.getElementById('message').placeholder = `Укажите ваш опыт для вакансии #${id}`;
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        function sendForm() {
            const fam1 = document.getElementById('fam1').value;
            const name1 = document.getElementById('name1').value;
            const email1 = document.getElementById('email1').value;
            const phone1 = document.getElementById('phone1').value;

            if (fam1 && name1 && email1 && phone1) {
                alert('Резюме отправлено! Скоро свяжемся.');
                closeModal();
                // Очистка формы
                document.getElementById('fam1').value = '';
                document.getElementById('name1').value = '';
                document.getElementById('email1').value = '';
                document.getElementById('phone1').value = '';
                document.getElementById('message1').value = '';
            } else {
                alert('Заполните все поля!');
            }
        }

        // Закрытие по клику вне модалки
        window.onclick = function(event) {
            if (event.target.id === 'modal') {
                closeModal();
            }
        }


            // Отправка на бд

async function fetchData(d) {
	const url = `http://localhost/myserver2/reg`;
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
function get_data_form() {

	const btn_reg = document.querySelector("#btn-register");

	btn_reg.addEventListener("click", (event) => {
		// Сбор данных формы
		const fam1 = document.querySelector("#fam1").value;
		const name1 = document.querySelector("#name1").value;
        const email1 = document.querySelector("#email1").value;
        const phone1 = document.querySelector("#phone1").value;
        const message1 = document.querySelector("#message1").value;
		d = {
			fam1: fam1,
			name1: name1,
            email1: email1,
            phone1: phone1,
            message1: message1,
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
// Инициализация при загрузке DOM
document.addEventListener("DOMContentLoaded", function () {
	get_data_form();
});




