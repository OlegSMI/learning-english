# Frontend: React + TypeScript + Vite

```
npm install
```

### Запустить локально, чтобы можно было использовать с телефона. Это удобно если лень настраивать хостинг.
```
npm run dev -- --host
```

Готово

### Чтобы запустить на хостинге.
```
npm run build
```
Прописать nginx conf

Готово

# Backend: Strapi CMS

1. Скачиваем страпи через ```npx create-strapi-app@latest english-words-learning-strapi-super-backend```;
2. Запускаем командой ```npm run develop```;
3. В открывшемся окне заходим в админку и добавляем админа;
4. Заходим на сайт ```https://strapi.io/``` и читаем доку, как настроить первую таблицу. Но лучше воспользоваться пустым файлом .db, который лежит в директориии **addBackendDB**;
5. Если нужен Swagger для просмотра всех API, то прописываем ```npm run strapi install documentation```. Все другие плагины устанавливаются по аналогии с этой командой;
6. Для того чтобы можно было использовать удаленно пишем ```npm install -g cross-env``` и после чего запускаем в проде ```cross-env NODE_ENV=production npm run start```;
7. Учим что угодно. Я ,например, учу английский.

СУБД - SQLite

> [!WARNING]
> В 6 пункте команда может отличаться, т.к. это Windows. Под Linux может быть иначе.
