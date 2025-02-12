# JOSEPH GUTIERREZ - PRUEBA TÉCNICA (BACKEND)

<p align="center">
  <img src="https://www.cvmatcher.app/images/shortlogo.webp"
  width="300" alt="CVMatcher Logo" />
  </a>
</p>

## ✅ PASOS PARA LEVANTAR LA APLICACION

### 🔹CON DOCKER

1. Renombrar el archivo `.env.sample` a `.env`
2. Reemplazar las variables de entorno de la base de datos por las que desee
3. Levantar la aplicacion en modo desarrollo con el comando

  ```bash
  docker compose up --build
  ```

> [!NOTE]
> No es necesario reemplazar la variable de entorno `DB_HOST`, ya que la
> base de datos se ejecuta en la red interna de Docker y tomará automáticamente
> el valor del nombre del servicio cvmatcher-db.

### 🔹MANUAL

#### Instalar dependencias

- Instalar las dependencias

  ```bash
  npm install
  ```

> [!NOTE]
> Observar la versión de node en el archivo `.nvmrc`

#### Variables de entorno

- Renombrar el archivo `.env.sample` a `.env`

#### Base de datos (Docker)

1. Reemplazar las variables de entorno de la base de datos por las que desee
2. Levantar docker

   ```bash
   npm run docker:dev
   ```

3. Correr migraciones

   ```bash
   npm run db:migrate
   ```

4. Correr seeders

   ```bash
   npm run db:seed
    ```

#### Base de datos (Supabase)

1. En el correo se adjuntaron las credenciales
2. Reemplazar las variables de entorno de la base de datos por las credenciales brindadas

#### Levantar aplicacion

```bash
npm run start:dev
```

## ✅ DOCUMENTACIÓN DE LOS ENDPOINTS

| MÉTODO | ENDPOINT                | DESCRIPCIÓN                                                         |
| ------ | ----------------------- | ------------------------------------------------------------------- |
| POST   | `/api/v1/auth/login`    | Iniciar sesión.                                                     |
| GET    | `/api/v1/jobs/find-all` | Obtiene las ofertas laborales según el rol del usuario autenticado. |

> [!NOTE]
> Para el endpoint de obtener las ofertas laborales, es necesario colocar en los
> headers de authorizacion el bearer token brindando por el endpoint de iniciar
> sesión

### 🔹Credenciales por roles

- Rol de usuario

  ```json
  {
    "username": "user",
    "password": "user"
  }
  ```

- Rol de pro

  ```json
  {
    "username": "pro",
    "password": "pro"
  }
  ```

- Rol de administrador

  ```json
  {
    "username": "admin",
    "password": "admin"
  }
  ```

> [!NOTE]
> Documentacion en [POSTMAN](https://documenter.getpostman.com/view/29145466/2sAYXCixwe) usando la aplicación desplegada en [Vercel](https://joseph-gutierrez-prueba-tecnica-cvmatcher-back.vercel.app) y la base
> de datos en **Supabase**

> [!NOTE]
> La documentación en **SWAGGER** está disponible en [Local](http://localhost:3160/documentation) usando el puerto `3160` y en [Vercel](https://joseph-gutierrez-prueba-tecnica-cvmatcher-back.vercel.app/documentation).
> *No olvidar colocar el token brindado en la parte superior, dando click al boton con nombre "Authorize"*

## ✅ DESCRIPCIÓN DEL PROCESO DE SCRAPING

### 🔹Código fuente

- Repositorio de [GITHUB](https://github.com/bjgonzalesg/https-github.com-bjgonzalesg-joseph-gutierrez-prueba-tecnica-cvmatcher-web-scraping.git)

### 🔹Importar Dependencias

- Se importa `chromium` de **Playwright** para controlar el navegador.
- Se importa `fs` para manejar archivos en el sistema.

### 🔹Abrir un Navegador Chromium

- Se lanza un navegador con `headless: false` (para ver la ejecución en pantalla).
- Se crea un nuevo **contexto** y una nueva **página**.

### 🔹Navegar a la Página de una Oferta Laboral

- Se accede a una URL específica de Laborum (detallada en `url`).
- Se espera a que cargue la lista de trabajos (`#listJobs`).

### 🔹Extraer Información de las Ofertas de Trabajo

- Se seleccionan los elementos dentro de `#listJobs` que contienen las ofertas.
- Para cada oferta, se extrae:
  - **Título del trabajo** (`h6`)
  - **Empresa** (`h6 + p`)
  - **Ubicación** (primer elemento dentro de `ul > li`)
  - **Fecha de publicación** (`ul + p`)
  - **Descripción** (se hace click en la oferta y se extrae de `h4 + div`)

### 🔹Guardar la Información en un Archivo JSON

- Se llama a `saveFile()`, que guarda los datos en `data.json`.

### 🔹Cerrar el Navegador

- Se cierran la página, el contexto y el navegador.

#### Ejemplo de los datos extraidos (data.json)

```json
   [
      {
        "title": "Practicante Pre Profesional",
        "enterprise": "BCP - Otras posiciones",
        "location": "Calle Centenario 156 La Molina",
        "publishedAt": "Hace 5 días",
        "description": "Válido para Perú¡Únete al Equipo BCP!..."
      },
      ...
   ]
```
