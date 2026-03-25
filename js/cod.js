async function fetchData(fam, name, ote, username, email, phone, password) {
    let url = `http://localhost/myserver/?fam=${encodeURIComponent(fam)}&name=${encodeURIComponent(name)}&ote=${encodeURIComponent(ote)}&username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&password=${encodeURIComponent(password)}`
    
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: { Accept: 'application/json' },
        })
        let data = await response.json()
        
        if (data.status === 'success') {
            alert(data.message)
            
        } else {
            alert(data.message)
        }
    } catch (error) {
        console.error('Ошибка:', error)
        alert('Ошибка соединения с сервером')
    }
}

function get_data_form() {
    // Регистрация
    const regForm = document.querySelector('#registration-form')
    if (regForm) {
        regForm.addEventListener('submit', function(event) {
            event.preventDefault()

            const fam = document.querySelector('#reg-fam').value
            const name = document.querySelector('#reg-name').value
            const ote = document.querySelector('#reg-ote').value
            const username = document.querySelector('#reg-username').value
            const email = document.querySelector('#reg-email').value
            const phone = document.querySelector('#reg-phone').value
            const password = document.querySelector('#reg-password').value
            const passwordConfirm = document.querySelector('#reg-password-confirm').value

            if (password !== passwordConfirm) {
                alert('Пароли не совпадают')
                return
            }

            console.log('Отправка данных:', { fam, name, ote, username, email, phone }) 
            fetchData(fam, name, ote, username, email, phone, password)
        })
    }
    
}

document.addEventListener('DOMContentLoaded', function () {
    get_data_form()
})




