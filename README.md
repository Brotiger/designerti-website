# Designerti
## Зависимости

* docker compose - 2.12.2
* node - 18.12.1
* npm - 8.19.2

## Запуск проекта
Установка зависимостей:

    npm i

Сборка:

    npm run build (для продакшена)
    npm run dev (для стейджа)
    npm run watch (пересборка проекта при внесении изменений)    

Запуск локального web сервера с проектом:

    npm run start

## Сборка под WP

Сборка под wp осуществляется в ручную путем разбиения сгенерированного кода (полученного в результате выполнения команды "npm run build") на элементы для темы WP.

Тема для WP располагается по следующему пути [./wp/themes/designerti](./wp/themes/designerti).

Так же необходимо перенести в соответствующие директории [css](./wp/themes/designerti/assets/css) и [js](./wp/themes/designerti/assets/js) файлы.

Авто сборка zip архива для темы WP:

    make

## Запуск WP

    docker compose build
    docker compose up