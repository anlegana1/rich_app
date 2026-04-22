export interface Cancha {
  id: string;
  nombre: string;
  direccion: string;
  precio: number;
  telefono: string;
  tipo: 'Fútbol 5' | 'Fútbol 11';
  dimensiones: string;
  fotos: string[];
  amenidades: string[];
  calificacion: number;
  disponible: boolean;
  ownerId: string;
}

export interface Reserva {
  id: string;
  canchaId: string;
  canchaName: string;
  clienteNombre: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  precio: number;
  estado: 'Confirmada' | 'Pendiente' | 'Cancelada';
  cancha?: string;
}

export interface Usuario {
  id: string;
  nombre: string;
  tipo: 'owner' | 'cliente';
  telefono: string;
  email: string;
}

export interface Mensaje {
  id: string;
  senderId: string;
  senderName: string;
  mensaje: string;
  timestamp: string;
  isOwner: boolean;
}

export interface Chat {
  id: string;
  canchaId: string;
  canchaName: string;
  clienteId: string;
  clienteNombre: string;
  mensajes: Mensaje[];
  online: boolean;
}
