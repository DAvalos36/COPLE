export type pantallaConsejos = {
    titulo: string,
    contenido?: string,
    tipo: 'identifica' | 'conoce' | 'previene' | 'concentrate' | 'acepta'
}

export type Calendario_Notas = {
    id: number,
    created_at: Date,
    fecha: string,
    animo: number,
    nota: string,
    usuario: string
}