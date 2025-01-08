# BACKEND BOLETASPAGO - UNT

<p align="center">
  <a href="http://nestjs.com/" target="blank">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
  </a>
</p>

## Instalación

```bash
npm install
```

## Variables de entorno

1. Renombrar el archivo `.env.sample` a `.env`
2. Cambiar los valores a tus credenciales

## Levantar aplicacion

```bash
# development
$ npm run start:dev
```

## Levantar la base de datos

1. Run docker `npm run docker:start`
2. Run migrations `npm run migrate`
3. Run seeders `npm run seed`

## Bajar la base de datos

1. Run undo migration `npm run migrate:undo`
2. Run undo all migrations `npm run migrate:undo:all`
3. Run undo seeder `npm run seed:undo`
4. Run undo all seeders `npm run seed:undo:all`

## DOCKER

```bash
  docker-compose up --build
```

> [!NOTE]
> Por defecto las variables de entorno usadas en docker, toma las variables
> del archivo `.env`, si desea cambiarlas, modifique el archivo `docker-compose.yaml`
