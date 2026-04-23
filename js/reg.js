// =====================================================
// ФУНКЦИЯ ОТПРАВКИ ДАННЫХ НА СЕРВЕР РЕГИСТРАЦИИ
// =====================================================
async function fetchData(d) {
	//адрес сервера для регистрации
	const url = `http://localhost/myserver2/reg`;
	
	// Отправляем POST запрос с данными пользователя
	const response = await fetch(url, {
		method: "POST", // Тип запроса - отправка данных
		headers: {
			Accept: "application/json", // Сервер вернет JSON
			"Content-Type": "application/x-www-form-urlencoded", // Формат данных как в обычной форме
		},
		body: new URLSearchParams(d).toString(), // Превращаем объект в строку для формы
	});
	
	return response; // Возвращаем ответ сервера для проверки
}

// =====================================================
// ОБРАБОТЧИК КНОПКИ РЕГИСТРАЦИИ
// =====================================================
function get_data_form() {
	// Находим кнопку "Зарегистрироваться" по её ID
	const btn_reg = document.querySelector("#btn-register");

	// При клике на кнопку выполняем регистрацию
	btn_reg.addEventListener("click", (event) => {
		// === СОБИРАЕМ ВСЕ ДАННЫЕ ИЗ ПОЛЕЙ ФОРМЫ ===
		const fam = document.querySelector("#fam").value;        // Фамилия
		const name = document.querySelector("#name").value;      // Имя
		const ote = document.querySelector("#ote").value;        // Отчество
		const username = document.querySelector("#username").value; // Имя пользователя
		const email = document.querySelector("#email").value;    // Электронная почта
		const phone = document.querySelector("#phone").value;    // Телефон
		const password = document.querySelector("#password").value; // Пароль

		// Создаем объект со всеми данными для отправки
		d = {
			fam: fam,      // Фамилия
			name: name,    // Имя
			ote: ote,      // Отчество
			username: username, // Логин
			email: email,  // Почта
			phone: phone,  // Телефон
			password: password // Пароль
		};

		try {
			// === ОТПРАВЛЯЕМ ДАННЫЕ НА СЕРВЕР ===
			const response = fetchData(d);
			
			// Проверяем статус ответа сервера
			if (response.ok) {
				// СЮДА добавить: успешная регистрация
				// Например: alert("Регистрация успешна!");
			} else {
				// СЮДА добавить: ошибка сервера
				// Например: alert("Ошибка регистрации");
			}
		} catch (error) {
			// СЮДА добавить: ошибка сети или сервера
			// Например: console.error("Ошибка:", error);
		}
	});
}

// =====================================================
// ЗАПУСК КОДА ПОСЛЕ ЗАГРУЗКИ СТРАНИЦЫ
// =====================================================
document.addEventListener("DOMContentLoaded", function () {
	// Когда страница полностью загрузилась - подключаем обработчики
	get_data_form();
});