import { Unidade } from './../unidade/unidade.model';
export interface Sala {
    id: number
    idUnidade?: number
    unidade?: Unidade
    numero: number
    detalhes?: string
    
}