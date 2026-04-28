import { Cancha, Reserva, Chat, Mensaje } from '../types';

export const canchas: Cancha[] = [
  {
    id: '1',
    nombre: 'Canchas del Norte',
    direccion: 'Cra 13 #45-67, Chapinero, Bogotá',
    precio: 80000,
    telefono: '310 555 0123',
    tipo: 'Fútbol 5',
    dimensiones: '40 x 20 m',
    fotos: ['#10B981', '#3B82F6'],
    amenidades: ['Duchas', 'Parqueadero', 'Iluminación', 'Alquiler chimpunes'],
    calificacion: 4.8,
    disponible: true,
    ownerId: 'owner1'
  },
  {
    id: '2',
    nombre: 'Cancha sintética',
    direccion: 'Calle 80 #15-20, Bogotá',
    precio: 70000,
    telefono: '310 555 0124',
    tipo: 'Fútbol 5',
    dimensiones: '40 x 20 m',
    fotos: ['#3B82F6', '#8B5CF6'],
    amenidades: ['Duchas', 'Iluminación'],
    calificacion: 4.5,
    disponible: false,
    ownerId: 'owner2'
  },
  {
    id: '3',
    nombre: 'Cancha sintética',
    direccion: 'Av 68 #50-10',
    precio: 90000,
    telefono: '310 555 0125',
    tipo: 'Fútbol 11',
    dimensiones: '60 x 40 m',
    fotos: ['#84CC16', '#10B981'],
    amenidades: ['Duchas', 'Parqueadero', 'Iluminación', 'Cafetería'],
    calificacion: 4.9,
    disponible: true,
    ownerId: 'owner3'
  }
];

export const reservasHoy: Reserva[] = [
  {
    id: '1',
    canchaId: '1',
    canchaName: 'Cancha 1',
    clienteNombre: 'Carlos M.',
    fecha: '2026-04-22',
    horaInicio: '10:00',
    horaFin: '11:00',
    precio: 80000,
    estado: 'Confirmada',
    cancha: 'Cancha 1'
  },
  {
    id: '2',
    canchaId: '1',
    canchaName: 'Cancha 2',
    clienteNombre: 'Andrés R.',
    fecha: '2026-04-22',
    horaInicio: '11:00',
    horaFin: '12:00',
    precio: 80000,
    estado: 'Confirmada',
    cancha: 'Cancha 2'
  },
  {
    id: '3',
    canchaId: '1',
    canchaName: 'Cancha 1',
    clienteNombre: 'Luisa P.',
    fecha: '2026-04-22',
    horaInicio: '14:00',
    horaFin: '15:00',
    precio: 80000,
    estado: 'Pendiente',
    cancha: 'Cancha 1'
  }
];

export const reservasAgenda: Reserva[] = [
  {
    id: '4',
    canchaId: '1',
    canchaName: 'Cancha 1',
    clienteNombre: 'Carlos M.',
    fecha: '2026-04-22',
    horaInicio: '08:00',
    horaFin: '10:00',
    precio: 160000,
    estado: 'Confirmada',
    cancha: 'Cancha 1'
  },
  {
    id: '5',
    canchaId: '1',
    canchaName: 'C2',
    clienteNombre: 'Luisa P.',
    fecha: '2026-04-22',
    horaInicio: '11:00',
    horaFin: '12:00',
    precio: 80000,
    estado: 'Confirmada',
    cancha: 'C2'
  },
  {
    id: '6',
    canchaId: '1',
    canchaName: '',
    clienteNombre: 'Mantenimiento',
    fecha: '2026-04-22',
    horaInicio: '13:00',
    horaFin: '14:00',
    precio: 0,
    estado: 'Confirmada'
  }
];

export const mensajesMock: Mensaje[] = [
  {
    id: '1',
    senderId: 'cliente1',
    senderName: 'Carlos',
    mensaje: '¿La cancha 2 tiene iluminación completa el sábado?',
    timestamp: '9:12 am',
    isOwner: false
  },
  {
    id: '2',
    senderId: 'owner1',
    senderName: 'Admin',
    mensaje: 'Sí, la cancha 2 tiene iluminación LED full el sábado. ¿Quieres reservar?',
    timestamp: '9:13 am',
    isOwner: true
  },
  {
    id: '3',
    senderId: 'cliente1',
    senderName: 'Carlos',
    mensaje: 'Perfecto, ¿puedo pagar contra entrega?',
    timestamp: '9:14 am',
    isOwner: false
  },
  {
    id: '4',
    senderId: 'owner1',
    senderName: 'Admin',
    mensaje: 'Claro, también aceptamos Nequi y Daviplata 👍',
    timestamp: '9:15 am',
    isOwner: true
  }
];

export const chatsMock: Chat[] = [
  {
    id: '1',
    canchaId: '1',
    canchaName: 'Canchas del Norte',
    clienteId: 'cliente1',
    clienteNombre: 'Carlos M.',
    mensajes: mensajesMock,
    online: true
  },
  {
    id: '2',
    canchaId: '2',
    canchaName: 'Cancha sintética',
    clienteId: 'cliente2',
    clienteNombre: 'Andrés R.',
    mensajes: [
      {
        id: '5',
        senderId: 'cliente2',
        senderName: 'Andrés',
        mensaje: 'Hola, ¿tienen disponibilidad para el domingo?',
        timestamp: '2:30 pm',
        isOwner: false
      },
      {
        id: '6',
        senderId: 'owner2',
        senderName: 'Admin',
        mensaje: 'Sí, tenemos horarios de 8am a 10pm',
        timestamp: '2:35 pm',
        isOwner: true
      }
    ],
    online: false
  },
  {
    id: '3',
    canchaId: '1',
    canchaName: 'Canchas del Norte',
    clienteId: 'cliente3',
    clienteNombre: 'Luisa P.',
    mensajes: [
      {
        id: '7',
        senderId: 'cliente3',
        senderName: 'Luisa',
        mensaje: '¿Incluye balón en la reserva?',
        timestamp: 'Ayer',
        isOwner: false
      }
    ],
    online: false
  }
];

export const horasDisponibles = [
  '08:00', '09:00', '10:00', '11:00', '12:00', 
  '13:00', '14:00', '15:00', '16:00', '17:00', 
  '18:00', '19:00', '20:00', '21:00', '22:00'
];
