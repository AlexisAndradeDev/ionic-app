import { Ejercicio } from "./ejercicio";

export interface Rutina {
    nombre: string;
    ejercicios: Ejercicio[];
    fecha_creacion?: string;
    uid: string;
}
