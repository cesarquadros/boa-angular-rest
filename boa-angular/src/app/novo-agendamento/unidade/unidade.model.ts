import { Sala } from './sala.model';
export interface Unidade {

    id?: number
    nomeUnidade: string
    listaSala?: Sala[]
}