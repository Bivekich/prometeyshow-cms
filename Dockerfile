FROM node:18-alpine as builder

# Установка зависимостей для сборки
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1

# Создание рабочей директории
WORKDIR /app

# Копирование файлов package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование исходного кода
COPY . .

# Сборка приложения
RUN npm run build

# Продакшн образ
FROM node:18-alpine

# Установка необходимых пакетов
RUN apk add --no-cache vips-dev

# Создание рабочей директории
WORKDIR /app

# Копирование собранного приложения и зависимостей
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/config ./config
COPY --from=builder /app/database ./database
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY --from=builder /app/.env.example ./.env

# Открытие порта
EXPOSE 1337

# Запуск приложения
CMD ["npm", "run", "start"]
