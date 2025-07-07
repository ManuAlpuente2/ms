
# Prueba técnica MS

  

## 📋 Descripción


Es una aplicación web para el análisis y evaluación de empresas, desarrollada con React. La plataforma permite visualizar información financiera detallada, clasificar empresas y navegar entre diferentes compañías de forma intuitiva.

 ## 🚗 Demo
 [https://manualpuente2.github.io/ms/build/](https://manualpuente2.github.io/ms/build/)


## ✨ Características Principales

  

### 🎯 Página "Lists" - Lista Ordenable

-  **Lista principal de empresas** con funcionalidad de ordenamiento completo

-  **Ordenamiento por columnas**: Nombre, Ubicación, Score, Facturación y EBITDA

-  **Navegación directa** al detalle de cada empresa al hacer clic en cualquier fila

-  **Visualización de datos históricos** integrada en la tabla

-  **Indicadores visuales** de score con códigos de color (A, B, C)

  

### 💾 Persistencia de Datos

-  **Assessment de clasificación** guardado automáticamente en localStorage


  

### 🧭 Navegación Avanzada

-  **Navegación Anterior/Siguiente** en la página de detalle de empresa

-  **Rutas dinámicas** con React Router

  

### 📱 Diseño Responsive y Accesible

-  **Mobile-first** con breakpoints optimizados

-  **Navegación por teclado** completa

-  **Contraste WCAG** cumplido

-  **ARIA labels** y roles semánticos

-  **Iconografía accesible** con descripciones

  

## 🛠 Tecnologías Utilizadas

  

### Frontend

-  **React 19.1.0** - Biblioteca principal de UI

-  **React Router DOM 7.6.1** - Enrutamiento de la aplicación

-  **SASS 1.89.2** - Preprocesador CSS con variables CSS

-  **Recharts 3.0.2** - Gráficos y visualizaciones de datos

-  **@number-flow/react 0.5.10** - Animaciones numéricas

 

  

## 📁 Estructura del Proyecto

  

```

src/

├── assets/

│ ├── icons/ # Iconografía personalizada (icomoon)

│ ├── img/ # Imágenes y logos

│ └── styles/

│ ├── vars.scss # Variables CSS globales

│ └── functions.scss

├── components/ # Componentes reutilizables

│ ├── Accordion/

│ ├── Button/ 

│ ├── CardUser/ 

│ ├── Navigation/ 

│ └── Search/ 

├── modules/ # Módulos principales

│ ├── CompanyFinancials/ # Datos financieros

│ ├── CompanyHistoricalFinancials/ # Histórico

│ ├── CompanyInfo/ # Información de empresa

│ ├── CompanyScore/ # Indicadores de score

│ ├── PageCompany/ # Página de detalle

│ ├── PageLists/ # Página de lista

│ └── Header/ # Cabecera

├── mocks/ # Datos de prueba

└── utils/ # Utilidades y helpers

```

  

## 🎨 Arquitectura de Estilos

  

### Sistema de Diseño

-  **Variables CSS** centralizadas en `vars.scss`

-  **Nomenclatura BEM** para clases CSS

-  **Utility-first** con SASS
 

  

## 🚀 Instalación y Uso

  

### Prerrequisitos

- Node.js 16+

- npm o yarn

  

### Instalación

```bash
# Instalar dependencias

npm  install

# Iniciar servidor de desarrollo

npm  start

```

  

### Scripts Disponibles

```bash

npm  start  # Servidor de desarrollo (puerto 3000)

npm  build  # Build de producción

```

  

## 📊 Funcionalidades Técnicas



### Enrutamiento

-  **HashRouter** para compatibilidad con hosting estático

 
### Persistencia de Datos

-  **localStorage** para assessments de clasificación

  

## 🎯 Características de UX/UI

  

### Interactividad

-  **Tablas ordenables** con indicadores visuales

-  **Acordeones expandibles** para organizar contenido

-  **Botones de evaluación** con feedback visual

-  **Navegación fluida** entre empresas

  

### Accesibilidad

-  **Navegación por teclado** completa

-  **Roles ARIA** apropiados

-  **Textos alternativos** para iconos

  

## 🔧 Configuración y Personalización

### Datos de Prueba

Los datos de empresas se encuentran en `src/mocks/dataCompany.js` y pueden ser modificados para pruebas.

  

## 📝 Notas de Desarrollo

  

-  **Código funcional** sin clases, siguiendo principios de programación funcional

-  **Componentes modulares** con responsabilidades bien definidas

-  **Estilos encapsulados** por componente