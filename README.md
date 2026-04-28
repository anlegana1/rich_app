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
- **Reservas**: Ver y gestionar mis reservas activas
- **Chat**: Comunicación con dueños de canchas
- **Perfil**: Configuración y datos del usuario

**Navegación adicional:**
- Detalle de cancha (desde Explorar)
- Reservar cancha (desde Detalle)

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
# Exportar para web (Metro bundler)
npx expo export -p web

# Deploy a Vercel (automático con git push)
# La app usa vercel.json para configuración
git push

# Output directory: dist/
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
rich_app/
├── app/                    # Rutas de la aplicación
│   ├── owner/             # Pantallas del dueño (4 tabs)
│   ├── client/            # Pantallas del cliente (4 tabs + 2 navegación)
│   └── index.tsx          # Home selector de rol
├── constants/             # Colores y constantes
├── data/                  # Datos mock (sin backend real)
├── types/                 # TypeScript types
└── vercel.json            # Configuración deploy
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
