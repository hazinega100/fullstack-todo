# Используем Node.js для сборки React-приложения
FROM node:18 as build

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем весь код и собираем приложение
COPY . .
RUN npm run build

# Используем Nginx для раздачи фронтенда
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Прокидываем порт
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
