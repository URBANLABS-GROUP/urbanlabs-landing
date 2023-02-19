# 🏢 URBANLABS Landing Page 🖼

Посадочная страница системы URBANLABS.

## Стек

Чистый HTML/CSS/JS стек.

## Локальный запуск

Открыть `./scr/index.html` файл в веб-браузере.

## Сборка

Сборка docker образа и запуск контейнера:

```bash
$ docker build -t urbanlabs-landing .
$ docker run \
    --name urbanlabs-landing \
    --restart=always \
    -p 80:80 \
    -d urbanlabs-landing
```
