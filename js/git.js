
/**
 * Загружает новости и создает .news-item
 */
async function fetchAndDisplayNews() {
  try {
    // Шаг 1: AJAX GET-запрос к серверному API
    const url = `http://localhost/myserver2/news`;
    let response = await fetch(url, {
      method: "GET",
      headers: { 'Accept': 'application/json' },
    });

    // Шаг 2: Парсинг JSON из БД news
    let newsData = await response.json();
    console.log('Данные новостей:', newsData);

    // Шаг 3: Очистка контейнера .news-container
    const newsContainer = document.querySelector(".news-container");
    newsContainer.innerHTML = '';

    // Шаг 4: Создание карточек новостей
    newsData.forEach(item => {
      const newsItem = document.createElement('div');
      newsItem.className = 'news-item';
      newsItem.innerHTML = `
        <div class="news-date">${item.date}</div>
        <p>${item.text}</p>
      `;
      newsContainer.appendChild(newsItem);
    });

  } catch (error) {
    // Error: показываем сообщение
    console.error('Ошибка загрузки новостей:', error);
    const newsContainer = document.querySelector(".news-container");
    if (newsContainer) {
      newsContainer.innerHTML = '<p class="error-msg">Ошибка загрузки новостей. Проверьте сервер.</p>';
    }
  }
}

// Автозапуск при загрузке DOM
document.addEventListener("DOMContentLoaded", fetchAndDisplayNews);