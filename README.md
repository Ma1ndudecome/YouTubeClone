Этот проект — клон YouTube, который использует YouTube Data API v3 для загрузки и отображения видео. Позволяет искать ролики, просматривать информацию о каналах и воспроизводить видео.

Установка и настройка
Создайте API-ключ

Перейдите в Google Cloud Console.

Создайте новый проект.

Включите YouTube Data API v3.

Сгенерируйте API Client ID и Client Secret.

Добавьте scope:

arduino
Копировать
Редактировать
https://www.googleapis.com/auth/youtube.force-ssl
Создайте файл APIKEY.js в корне проекта
Вставьте в него свои ключи:

js
Копировать
Редактировать
const API_KEY = "ВАШ_API_КЛЮЧ";
const CLIENT_ID = "ВАШ_CLIENT_ID";
const CLIENT_SECRET = "ВАШ_CLIENT_SECRET";
const SCOPES = ["https://www.googleapis.com/auth/youtube.force-ssl"];

export { API_KEY, CLIENT_ID, CLIENT_SECRET, SCOPES };
Запустите проект

Установите зависимости:

bash
Копировать
Редактировать
npm install
Запустите локальный сервер:

bash
Копировать
Редактировать
npm run start
Теперь клон YouTube готов к работе! 🎬🚀
