# 🛍️ Products API - NestJS

Una API REST robusta construida con NestJS que consume la API de DummyJSON para gestionar productos y mantener un historial de productos visitados.

## ✨ Características

- 📦 **Gestión de Productos**: Obtener, buscar y listar productos desde DummyJSON
- 📚 **Historial**: Seguimiento automático de productos visitados (máximo 5)
- 🔧 **Configuración Global**: Interceptores, filtros de error y configuración de Axios centralizada
- 📖 **Documentación Swagger**: API completamente documentada
- 🔒 **Tipado Fuerte**: TypeScript con interfaces bien definidas
- 🚀 **Arquitectura Modular**: Separación clara de responsabilidades
- ⚡ **Manejo de Errores**: Gestión robusta de timeouts y errores de red

## 🛠️ Tecnologías

- **Framework**: NestJS 10.x
- **Lenguaje**: TypeScript
- **HTTP Client**: Axios
- **Documentación**: Swagger/OpenAPI
- **Validación**: Class Validator
- **Testing**: Jest
- **Linting**: ESLint

## 📋 Requisitos del Sistema

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **Sistema Operativo**: Windows, macOS, Linux

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone <repository-url>
cd prueba
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Verificar instalación

```bash
npm run build
```

## ⚙️ Configuración

La aplicación utiliza la API pública de DummyJSON, por lo que no requiere configuración adicional. La URL base se encuentra en:

```typescript
// src/consts/apiUrl.ts
export const apiUrl = 'https://dummyjson.com/'
```

## 🏃‍♂️ Ejecución

### Desarrollo

```bash
# Modo desarrollo con hot reload
npm run start:dev
```

### Producción

```bash
# Compilar para producción
npm run build

# Ejecutar en producción
npm run start:prod
```

### Modo Debug

```bash
# Ejecutar en modo debug
npm run start:debug
```

La aplicación estará disponible en: **http://localhost:3000**

## 📡 Endpoints API

### 📦 Productos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/products` | Obtener todos los productos |
| `GET` | `/products/:id` | Obtener producto por ID |
| `GET` | `/products/search/:query` | Buscar productos |

### 📚 Historial

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/history` | Obtener historial de productos visitados |

## 📖 Documentación API

La documentación completa de la API está disponible en Swagger:

**URL**: http://localhost:3000/api-prueba

### Características de la documentación:

- ✅ **Modelos completos**: DTOs con ejemplos reales
- ✅ **Respuestas de error**: Documentación de todos los códigos de error
- ✅ **Ejemplos interactivos**: Prueba directa desde la interfaz
- ✅ **Descripciones en español**: Documentación clara y detallada

## 🧪 Testing

### Ejecutar todos los tests

```bash
npm run test
```

### Tests en modo watch

```bash
npm run test:watch
```

### Tests de cobertura

```bash
npm run test:cov
```

### Tests end-to-end

```bash
npm run test:e2e
```

## 📁 Estructura del Proyecto

```
src/
├── common/                     # Elementos compartidos
│   ├── filters/               # Filtros de excepción
│   ├── interceptors/          # Interceptores globales
│   └── interfaces/            # Interfaces compartidas
├── consts/                    # Constantes globales
│   ├── apiUrl.ts             # URL base de la API
│   ├── api-routes.ts         # HTTP methods
│   └── response-messages.ts   # Mensajes generales
├── config/                    # Configuración
│   └── axios.config.ts       # Configuración global de Axios
├── products/                  # Módulo de productos
│   ├── consts/               # Constantes específicas
│   ├── dto/                  # DTOs de Swagger
│   ├── products.controller.ts
│   ├── products.service.ts
│   ├── products.module.ts
│   └── products.models.ts
├── history/                   # Módulo de historial
│   ├── consts/               # Constantes específicas
│   ├── dto/                  # DTOs de Swagger
│   ├── history.controller.ts
│   ├── history.service.ts
│   ├── history.module.ts
│   └── history.models.ts
├── app.module.ts             # Módulo principal
└── main.ts                   # Punto de entrada
```

## 🔧 Configuración Avanzada

### Timeout de Axios

La configuración de timeout se encuentra en:

```typescript
// src/config/axios.config.ts
timeout: 30000, // 30 segundos
```

### Tamaño del Historial

El historial mantiene máximo 5 productos:

```typescript
// src/history/history.service.ts
history = history.slice(0, 5);
```

## 📊 Ejemplos de Respuesta

### Producto Individual

```json
{
  "success": true,
  "message": "Producto obtenido exitosamente",
  "data": {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
  },
  "timestamp": "2023-06-23T15:30:00.000Z",
  "path": "/products/1"
}
```

### Error de Timeout

```json
{
  "success": false,
  "message": "Tiempo de espera agotado - La API está tardando demasiado en responder",
  "timestamp": "2023-06-23T15:30:00.000Z",
  "path": "/products/1"
}
```

## 🚨 Solución de Problemas

### Error de Puerto Ocupado

```bash
# Cambiar puerto en main.ts o usar variable de entorno
PORT=3001 npm run start:dev
```

### Problemas de CORS

La aplicación ya incluye configuración básica de CORS habilitada.

### Timeout de API

Si experimentas timeouts frecuentes, puedes ajustar la configuración en `src/config/axios.config.ts`.

## 📈 Performance

- **Timeout**: 30 segundos para requests HTTP
- **Keep-Alive**: Habilitado para reutilización de conexiones
- **Compresión**: Respuestas gzip automáticas
- **Caching**: Headers apropiados para caching

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 🔗 Enlaces Útiles

- [NestJS Documentation](https://docs.nestjs.com/)
- [DummyJSON API](https://dummyjson.com/)
- [Swagger Documentation](http://localhost:3000/api)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📞 Soporte

Si encuentras algún problema o tienes preguntas:

1. Revisa la documentación de Swagger
2. Consulta la sección de solución de problemas
3. Crea un issue en el repositorio

---

**¡Disfruta usando la Products API!** 🎉
