Aquí tienes una versión en formato markdown de tu perfil y la explicación de los comandos para correr el proyecto en local:

---

# Ignacio Navarrete

**Desarrollador Frontend especializado en Angular y tecnologías web**

---

## Acerca de

¡Hola! Soy Ignacio Navarrete, desarrollador de software web con más de 8 años de experiencia en el campo. Originario de Mérida, Yucatán, he estado inmerso en el mundo del desarrollo desde mi graduación en la Universidad Tecnológica Metropolitana en 2013.

Mi especialización en desarrollo frontend avanzado con Angular me ha permitido contribuir significativamente al éxito de numerosos proyectos. Desde las versiones iniciales hasta la última Angular 17, he dominado esta tecnología clave para la creación de aplicaciones web modernas e intuitivas.

Además de mi experiencia en Angular, tengo sólidos conocimientos en HTML, CSS3, JavaScript y frameworks como Bootstrap y Tailwind. Mi capacidad para trabajar con herramientas como TypeScript, Docker y Angular Material ha sido fundamental para el desarrollo eficiente y escalable de aplicaciones.

He colaborado en proyectos que requieren el consumo de REST APIs, la implementación de patrones de gestión de estado como NGRX, y la manipulación de flujos de datos con RxJS. Mi experiencia en la gestión de dependencias con NPM y en el desarrollo de aplicaciones backend con NestJS complementan mi perfil como desarrollador frontend versátil y completo.

Estoy comprometido con la excelencia en cada proyecto que emprendo, y mi enfoque meticuloso en la calidad del código y la experiencia del usuario ha sido reconocido por colegas y supervisores en el pasado.

Estoy emocionado por nuevas oportunidades para colaborar en proyectos desafiantes y contribuir al éxito de equipos dinámicos. Si buscas un profesional comprometido y apasionado por la innovación en el desarrollo de software web, estaré encantado de ser parte de tu equipo.

---

## Experiencia profesional

### Desarrollador Sr front end en Neoris

**abril 2022 - marzo 2024**

- Desarrollé módulos para el sistema de garantías SIGADE de Telcel, utilizando Angular y Angular Material.
- Implementé tablas con paginadores y filtros, y desarrollé la parte de registro con diferentes tipos de roles.
- Trabajé en módulos internos encargados del análisis de la información, finalizando y entregando el proyecto satisfactoriamente.
- Participé en Cemex como desarrollador frontend, implementando nuevas características y mejoras para el área de cemento.
- Colaboré en nuevas características para UK, GB y CZ en el proceso de envío de pedidos online utilizando Angular 7 y NGRX.

### Desarrollador front end Sr en Nova Solutions Systems

**noviembre 2021 - abril 2022**

- Participé en el proyecto de Bursanet de Actinver, migrando de AngularJs a Angular 12.
- Creé código base y agregué un widget dinámico para controlar y monitorear ETFs y su cotización en la bolsa.
- Utilicé Figma para la revisión de diseño y maquetación, y GitLab para el manejo de repositorios.
- Trabajé con los principios de desarrollo Agile (SCRUM) para sprints cortos y resultados visibles.

### Desarrollador front end en Relappro

**octubre 2017 - septiembre 2021**

- Desarrollé desde cero un panel de administración en Angular y Angular Material.
- Gestioné información de agencias, campañas, publishers, pagos, usuarios, sitios, proveedores, revenue, y otros.
- Implementé y mejoré un script en TypeScript para la versión estable y rápida del panel.

### Desarrollador Web en Simetrical

**marzo 2016 - octubre 2017**

- Desarrollé sistemas front y back utilizando Symfony como backend y JavaScript con patrón modular para el front.
- Trabajé con Jira y Bitbucket para el control de versiones.
- Mantuve y mejoré dos sistemas internos de la empresa.

---

## Skills

- **Lenguajes y Frameworks**: HTML, CSS3, JavaScript, TypeScript, PHP, MySQL, Symfony, Node.js, Express, NestJS.
- **Frameworks y Librerías Frontend**: AngularJs [1.6], Angular [4, 7, 8, 9, 11, 12, 13, 14, 17], Angular Material, Bootstrap [2, 3, 4, 5], Tailwind CSS.
- **Herramientas y Tecnologías**: Docker, NPM, NGRX, RxJS, Git, GitLab, Bitbucket, Figma, Jira, Azure.
- **Diseño y Multimedios**: Photoshop, Illustrator, Video.js.
- **Sistemas Operativos**: Ubuntu, SSH.

---

## Cursos

- Docker, from Beginner to Expert
- Visual Studio Code: Improve Your Coding Speed
- ReactiveX - RxJs: From Zero to Details
- Advanced Angular: Take Your Basics to the Next Level - MEAN
- NGRX in Angular: From Basics to Practice

---

## Idiomas

- Español (Lengua nativa)
- Inglés (Básico, preparación en curso)

---

## Comandos para Correr el Proyecto en Local

### `ng`

```json
"ng": "ng"
```

- **Descripción**: Este comando es un alias para ejecutar el Angular CLI (`ng`). Permite acceder a todos los comandos proporcionados por Angular CLI, como `ng serve`, `ng build`, `ng test`, etc.

### `start`

```json
"start": "ng serve"
```

- **Descripción**: Inicia el servidor de desarrollo de Angular.
- **Uso**:
  - Ejecuta el servidor en `http://localhost:4200/` por defecto.
  - Utilizado para el desarrollo local y la prueba rápida de cambios.

### `build`

```json
"build": "ng build"
```

- **Descripción**: Compila la aplicación Angular para producción.
- **Uso**:
  - Genera los archivos de distribución en la carpeta `dist/`.
  - Optimiza los archivos para un rendimiento óptimo.

### `deploy`

```json
"deploy": "mv dist/personal-cv/browser/* docs/ && ngh --dir=docs/"
```

- **Descripción**: Despliega los archivos compilados del proyecto `personal-cv` a GitHub Pages.
- **Detalles**:
  - `mv dist/personal-cv/browser/* docs/`: Mueve los archivos compilados a la carpeta `docs/`.
  - `ngh --dir=docs/`: Utiliza `angular-cli-ghpages` (`ngh`) para publicar el contenido de `docs/` en GitHub Pages.

### `watch`

```json
"watch": "ng build --watch --configuration development"
```

- **Descripción**: Compila la aplicación en modo desarrollo y observa los cambios en los archivos.
- **Uso**:
  - Ideal para desarrollo continuo, ya que recompila automáticamente los cambios realizados en el código.

### `test`

```json
"test": "ng test"
```

- **Descripción**: Ejecuta las pruebas unitarias configuradas para el proyecto.
- **Uso**:
  - Utiliza `Karma` como test runner por defecto.
  - Ejecuta todas las pruebas y muestra los resultados en la consola.

### `serve:ssr:personal-cv`

```json
"serve:ssr:personal-cv": "node dist/personal-cv/server/server.mjs"
```

- **Descripción**: Inicia el servidor para la aplicación renderizada en el servidor (SSR) del proyecto `personal-cv`.
- **Uso**:
  - Ejecuta la aplicación compilada para SSR utilizando Node.js.

---

### Cómo Correr el Proyecto en Local

1. **Clonar el Repositorio**:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd personal-cv
   ```

2. **Instalar Dependencias**:

   ```bash
   npm install
   ```

3. **Iniciar el Servidor de Desarrollo**:

   ```bash
   npm start
   ```

4. **Compilar para Producción**:

   ```bash
   npm run build
   ```

5. **Desplegar a GitHub Pages**:

   ```bash
   npm run deploy
   ```

6. **Ejecutar Pruebas**:
   ```bash
   npm test
   ```

---

git flow init
git flow feature start create-docs
git branch
git status
git flow feature publish create-docs
git branch
