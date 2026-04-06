console.log(111)

function myfanc() {
	console.log(111)
	// функция отправки и приема данных (ajax)
	var formData = new FormData(document.forms.registration)
	console.dir(formData) // что там отправляем то?
	var xhr = new XMLHttpRequest() //создаем объект
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			//проверяем ответ на ошибки
			// если норм то выводим
			alert('Ошибка')
		} else {
			alert('Зарегистрировался')
			// если нет сообщаем об ошибке

		}
	}
	xhr.open('POST', 'http://localhost/myserver/reg') // post запрос на конкретный контроллер
	xhr.send(formData) //отпраляем данные
}

 
