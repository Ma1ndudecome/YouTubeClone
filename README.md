🎬 YouTube Clone
Клон YouTube, использующий YouTube Data API v3 для поиска, отображения и воспроизведения видео.

🚀 Функции
✅ Поиск видео по ключевым словам
✅ Просмотр информации о каналах
✅ Воспроизведение видео через встроенный плеер
✅ Интерактивный интерфейс

📌 Установка и настройка
1️⃣ Получите API-ключ
🔹 Перейдите в Google Cloud Console
🔹 Создайте новый проект
🔹 Включите YouTube Data API v3
🔹 Создайте OAuth 2.0 Client ID и Client Secret
🔹 Добавьте scope:

arduino
Копировать
Редактировать
https://www.googleapis.com/auth/youtube.force-ssl
2️⃣ Создайте файл APIKEY.js
Создайте в корне проекта файл APIKEY.js и добавьте свои ключи:

js
Копировать
Редактировать
const API_KEY = "ВАШ_API_КЛЮЧ";
const CLIENT_ID = "ВАШ_CLIENT_ID";
const CLIENT_SECRET = "ВАШ_CLIENT_SECRET";
const SCOPES = ["https://www.googleapis.com/auth/youtube.force-ssl"];

export { API_KEY, CLIENT_ID, CLIENT_SECRET, SCOPES };
3️⃣ Установите зависимости
Выполните команду:

bash
Копировать
Редактировать
npm install
4️⃣ Запустите проект
bash
Копировать
Редактировать
npm start
