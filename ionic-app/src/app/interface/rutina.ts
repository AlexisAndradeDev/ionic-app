import { Ejercicio } from "./ejercicio";

export interface Rutina {
    name: string;
    ejercicios?: Ejercicio[];
}