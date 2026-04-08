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
		const fam = document.querySelector("#fam").value;
		const name = document.querySelector("#name").value;
		const ote = document.querySelector("#ote").value;
		const username = document.querySelector("#username").value;
		const email = document.querySelector("#email").value;
		const phone = document.querySelector("#phone").value;
		const password = document.querySelector("#password").value;

		d = {
			fam: fam,
			name: name,
			ote: ote,
			username: username,
			email: email,
			phone: phone,
			password: password,
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