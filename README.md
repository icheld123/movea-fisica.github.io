# 🌎 MOVEA - Módulos Virtuales de Enseñanza y Aprendizaje en Física Atmosférica

**MOVEA** es una plataforma educativa interactiva desarrollada con **Angular** que permite explorar y comprender fenómenos físicos asociados a la atmósfera, como los **fluidos**, la **presión**, la **temperatura** y la **circulación global**.

Su objetivo es fortalecer el aprendizaje de la física atmosférica mediante recursos visuales, simulaciones interactivas y evaluaciones autogestionadas, promoviendo el pensamiento científico y crítico.

---

## 🧠 Proyecto desarrollado por

**Grupo de Investigación en Ambientes Virtuales de Aprendizaje – VIRTUS**  
**Universidad Distrital Francisco José de Caldas – Bogotá, Colombia**

**Desarrolladores:**
- 👩‍💻 **Ichel Alejandra Delgado Morales** – 20202020029  
- 👨‍💻 **Edgar Andrés Umaña** – 20181020152  
- 👨‍💻 **Dilan Guisseppe Triana Jiménez** – 20221020100  

---

## 🚀 Tecnologías utilizadas

| Herramienta | Versión |
|--------------|---------|
| **Angular CLI** | 18.2.21 |
| **Node.js** | 18.20.8 |
| **NPM** | 10.8.2 |

---

## 🧱 Estructura del proyecto

```bash
src/
 ├── app/                  # Componentes principales y módulos
 │    ├── core/            # Servicios, guardias y configuración
 │    ├── shared/          # Componentes reutilizables
 │    ├── modules/         # Módulos del MOVEA (ej. Módulo 1 - Fluidos)
 │    └── app.component.ts # Componente raíz
 ├── assets/               # Recursos estáticos (imágenes, videos, simuladores)
 ├── environments/         # Archivos de configuración
 └── index.html            # Entrada principal
```

---

## ⚙️ Instalación y ejecución

1️⃣ **Clona el repositorio**

```bash
git clone git@github.com:icheld123/movea-fisica.github.io.git
cd movea-fisica
```

2️⃣ **Instala las dependencias**

```bash
npm install
```

3️⃣ **Ejecuta el servidor de desarrollo**

```bash
ng serve
```

4️⃣ **Abre el navegador**

👉 [http://localhost:4200](http://localhost:4200)

El proyecto se recargará automáticamente cuando realices cambios en los archivos fuente.

---

## 🧩 Scripts útiles

| Comando | Descripción |
|----------|--------------|
| `ng serve` | Inicia el servidor de desarrollo |
| `ng build` | Genera la compilación optimizada para producción |
| `ng test` | Ejecuta las pruebas unitarias con Karma |
| `ng lint` | Analiza el código y verifica buenas prácticas |
| `ng generate component <nombre>` | Crea nuevos componentes Angular |

---

## 🧭 Estructura modular

Cada módulo representa una unidad temática del MOVEA.  
Ejemplo:

- **Módulo 1:** *Fluidos y circulación global atmosférica*  
  - HU1: Introducción al fenómeno  
  - HU2: Concepto de “Tape Recorder”  
  - HU3: Definición de conceptos físicos  
  - HU4: Laboratorio virtual (simuladores PhET)  
  - HU5: Autoevaluación  
  - HU6: Encuesta de satisfacción  

---

## 💡 Flujo de trabajo (GitFlow)

1. Crear una nueva rama a partir de `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/modulo-1-hu1
   ```
2. Realizar los cambios y commits.
3. Subir la rama:
   ```bash
   git push -u origin feature/modulo-1-hu1
   ```
4. Crear un **Merge Request / Pull Request** hacia `develop`.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia [MIT](LICENSE).

---