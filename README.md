# CanchasApp

Aplicación para alquiler de canchas sintéticas con React Native + Expo.

## 🚀 Características

### Rol Dueño
- **Dashboard**: Vista general de reservas, ingresos y calificaciones
- **Mi Cancha**: Gestión de información de la cancha (fotos, precios, amenidades)
- **Agenda**: Calendario de reservas con vista detallada
- **Mensajes**: Chat con clientes

### Rol Cliente
- **Explorar**: Buscar canchas cercanas con filtros
- **Detalle**: Ver información completa de cada cancha
- **Reservar**: Sistema de reservas con calendario y horas
- **Chat**: Comunicación con dueños de canchas
- **Mis Reservas**: Gestión de reservas activas

## 🛠️ Tech Stack

- **React Native** - Framework móvil
- **Expo** - Tooling y desarrollo
- **Expo Router** - Navegación file-based
- **TypeScript** - Type safety
- **React Native Web** - Soporte web

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en web
npm run web

# Ejecutar en iOS
npm run ios

# Ejecutar en Android
npm run android
```

## 🌐 Deploy Web

```bash
# Exportar para web
npx expo export:web

# Deploy a Vercel
vercel deploy

# O a Netlify
netlify deploy --dir web-build
```

## 📱 Deploy Móvil (Futuro)

```bash
# Configurar EAS
eas login
eas build:configure

# Build iOS
eas build --platform ios

# Build Android
eas build --platform android

# Submit a stores
eas submit --platform ios
eas submit --platform android
```

## 📂 Estructura del Proyecto

```
richapp/
├── app/                    # Rutas de la aplicación
│   ├── owner/             # Pantallas del dueño
│   ├── client/            # Pantallas del cliente
│   └── index.tsx          # Home selector de rol
├── constants/             # Colores y constantes
├── data/                  # Datos mock
├── types/                 # TypeScript types
└── README.md
```

## 🎨 Diseño

La app usa datos hardcodeados (mockData.ts) para desarrollo. Los colores principales:
- Verde primario: `#10B981`
- Azul secundario: `#3B82F6`

## 🔄 Siguiente Fase

- Backend con Supabase/Firebase
- Autenticación de usuarios
- Mapas con ubicación real
- Pagos integrados
- Notificaciones push

## 📄 Licencia

MIT
