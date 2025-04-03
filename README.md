# 🎬 YouTube Clone  

Этот проект — клон YouTube, использующий [YouTube Data API v3](https://developers.google.com/youtube/v3) для поиска, отображения и воспроизведения видео.  

## 🚀 Функции  

- 🔍 Поиск видео по ключевым словам  
- 📺 Воспроизведение видео через встроенный плеер  
- 📢 Просмотр информации о каналах  
- 🎨 Минималистичный интерфейс  

---

## 📌 Установка и настройка  

### 1️⃣ Получите API-ключ  

1. Перейдите в [Google Cloud Console](https://console.cloud.google.com/).  
2. Создайте новый проект.  
3. Включите **YouTube Data API v3**.  
4. Создайте **OAuth 2.0 Client ID и Client Secret**.  
5. Добавьте **scope**:  https://www.googleapis.com/auth/youtube.force-ssl

### 2️⃣ Создайте файл `APIKEY.js`  

Создайте в корне проекта файл **`APIKEY.js`** и добавьте в него свои ключи:  

```js
const API_KEY = "ВАШ_API_КЛЮЧ";
const CLIENT_ID = "ВАШ_CLIENT_ID";
const CLIENT_SECRET = "ВАШ_CLIENT_SECRET";
const SCOPES = ["https://www.googleapis.com/auth/youtube.force-ssl"];

```
3️⃣ Установите зависимости
Запустите команду:

bash
Копировать
Редактировать
npm install

4️⃣ Запустите проект
bash
Копировать
Редактировать
npm run start
