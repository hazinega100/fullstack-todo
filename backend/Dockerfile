# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем весь код проекта
COPY . .

# Указываем порт, который будет использовать контейнер
EXPOSE 5000

# Запуск сервера
CMD ["npm", "start"]
