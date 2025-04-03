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
5. Додайте scope. Перейдіть cridentails виберіть oAuth 2.0 виберіть dataAccess и добавте scope:https://www.googleapis.com/auth/youtube.force-ssl
6. Перейдіть cridentails нажміть на свій OAuth 2.0 Client IDs и поставть redirect URL к примеру: http://localhost:5501



### 2️⃣ Создайте файл `APIKEY.js`  

Создайте в корне проекта файл **`APIKEY.js`** и добавьте в него свои ключи:  

```js
const APIKEY = 'YOUR API'
const cliendId = 'Your clientId'
const clientSecret = 'Your Client'
const redirectUri = 'your Redirect'

let isVideo = false
```
3️⃣ Установите зависимости
Запустите команду:
```
npm install
```
4️⃣ Запустите проект и в redirect URIs вставить тот localhost который вам выдаст или на котором запускаете проект

```
npm run start
```
