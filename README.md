# JOSEPH GUTIERREZ - PRUEBA TÉCNICA (CVMATCHER)

<p align="center">
  <img src="https://www.cvmatcher.app/images/shortlogo.webp"
  width="300" alt="CVMatcher Logo" />
  </a>
</p>

## PASOS PARA LEVANTAR LA APLICACION

### CON DOCKER

1. Renombrar el archivo `.env.sample` a `.env`
2. Reemplazar las variables de entorno de la base de datos por las que desee
3. Levantar la aplicacion en modo desarrollo con el comando `docker compose up --build`

> [!NOTE]
> La variable de entorno `DB_HOST` no es necesario reemplazarla, dado que la
> base de datos se ejecuta en la red interna de docker, en este caso, tomaria
> el valor del nombre del servicio `cvmatcher-db`

### MANUAL

#### Variables de entorno

1. Renombrar el archivo `.env.sample` a `.env`
2. Reemplazar las variables de entorno de la base de datos por las que desee

#### Base de datos (Docker)

1. Levantar docker `npm run docker:dev`
2. Correr migraciones `npm run db:migrate`
3. Correr seeders `npm run db:seed`

#### Levantar aplicacion

```bash
# development
$ npm run start:dev
```
