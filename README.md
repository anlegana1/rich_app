# CanchasApp

Aplicación para alquiler de canchas sintéticas con React Native + Expo.

## 🚀 Características

### Rol Dueño
- **Dashboard**: Vista general de reservas, ingresos y calificaciones
- **Mi Cancha**: Gestión de información de la cancha con mapa embebido
- **Agenda**: Calendario de reservas con vista detallada
- **Mensajes**: Sistema de chat con modal overlay (IDs no expuestos en URL)

### Rol Cliente
- **Explorar**: Buscar canchas cercanas con filtros
- **Reservas**: Ver y gestionar mis reservas activas
- **Chat**: Sistema de chat con modal overlay (IDs no expuestos en URL)
- **Perfil**: Configuración y datos del usuario

**Navegación adicional:**
- Detalle de cancha con mapa de ubicación (desde Explorar)
- Reservar cancha con selección de horarios (desde Detalle)

## 🛠️ Tech Stack

- **React Native** - Framework móvil
- **Expo** - Tooling y desarrollo
- **Expo Router** - Navegación file-based
- **TypeScript** - Type safety
- **React Native Web** - Soporte web
- **Google Maps** - Mapas embebidos (iframe web, WebView mobile)

## 🔒 Características de Seguridad

### Sistema de Chat con Modal
- **URL Segura**: Las conversaciones no exponen IDs en la URL (`/client/chat` siempre igual)
- **Estado Local**: Chat se maneja con `useState` y Modal overlay
- **Sin Navegación Dinámica**: Elimina rutas `[chatId]` para evitar IDs adivinables
- **UX Fluida**: Animación slide con `presentationStyle="pageSheet"`

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
├── app/                    # Rutas de la aplicación (Expo Router)
│   ├── owner/             # Pantallas del dueño
│   │   ├── index.tsx      # Dashboard
│   │   ├── agenda.tsx     # Calendario de reservas
│   │   ├── mensajes.tsx   # Lista de chats + Modal de conversación
│   │   ├── cancha.tsx     # Gestión de cancha + Mapa embebido
│   │   └── _layout.tsx    # Tabs layout
│   ├── client/            # Pantallas del cliente
│   │   ├── index.tsx      # Explorar canchas
│   │   ├── reservas.tsx   # Mis reservas
│   │   ├── chat.tsx       # Lista de chats + Modal de conversación
│   │   ├── perfil.tsx     # Perfil del usuario
│   │   ├── detalle.tsx    # Detalle de cancha + Mapa
│   │   ├── reservar.tsx   # Formulario de reserva
│   │   └── _layout.tsx    # Tabs layout
│   └── index.tsx          # Home selector de rol
├── components/            # Componentes reutilizables
│   └── MapView.tsx        # Mapa multiplataforma (iframe/WebView)
├── constants/             # Colores y constantes
│   └── Colors.ts
├── data/                  # Datos mock (sin backend real)
│   └── mockData.ts
├── types/                 # TypeScript types
│   ├── index.ts
│   └── jsx.d.ts           # Declaraciones JSX
└── vercel.json            # Configuración deploy
```

## 🎨 Diseño

La app usa datos hardcodeados (mockData.ts) para desarrollo. Los colores principales:
- Verde primario: `#10B981`
- Azul secundario: `#3B82F6`

## 📝 Convenciones de Código

### Idiomas
- **Código** (funciones, variables, comentarios): 🇬🇧 **Inglés**
  ```tsx
  export default function Explore() {
    const getLastMessage = () => { ... }
    const openChat = ...
  }
  ```
- **UI visible** (textos, placeholders, títulos): 🇪🇸 **Español**
  ```tsx
  <Text style={styles.title}>Canchas cerca de ti</Text>
  placeholder="Buscar cancha o sector..."
  title: 'Explorar'
  ```

### Beneficios
- ✅ **Código internacional** - Desarrolladores de cualquier país pueden contribuir
- ✅ **UX localizada** - Usuarios ven todo en español
- ✅ **Mantenible** - Facilita internacionalización (i18n) en el futuro

## 🔄 Siguiente Fase

### Backend & Autenticación
- Integrar Supabase o Firebase
- Sistema de autenticación (email/password, OAuth)
- Base de datos real para canchas, reservas y chats

### Funcionalidades
- Envío de mensajes real-time en chat
- Sistema de pagos (Stripe, Mercado Pago)
- Notificaciones push para reservas confirmadas
- Geocodificación real con API de Google Maps
- Carga de imágenes a cloud storage
- Sistema de calificaciones y reviews

### UX Improvements
- Modo oscuro
- Internacionalización (i18n) multi-idioma
- Animaciones mejoradas con Reanimated
- Optimización de rendimiento

## 📄 Licencia

MIT
