// General Success Messages
export const GENERAL_SUCCESS_MESSAGES = {
  DEFAULT: 'Operación realizada exitosamente',
} as const;

// General Error Messages
export const GENERAL_ERROR_MESSAGES = {
  NETWORK: {
    TIMEOUT: 'Tiempo de espera agotado - La API está tardando demasiado en responder',
    CONNECTION_ERROR: 'Error de conexión con el servidor',
  },
  INTERNAL_SERVER_ERROR: 'Error interno del servidor',
  NOT_FOUND: 'Recurso no encontrado',
  BAD_REQUEST: 'Solicitud incorrecta',
} as const; 