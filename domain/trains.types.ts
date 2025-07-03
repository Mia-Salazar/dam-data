

interface FieldsInterface {
    type: string;
    id: string;
}

interface TrainInterface {
    _id: number;
    MODELO: string;
    PROPOSITO: string;
    "ANCHO VIA": string;
    "VELOCIDAD MAXIMA": string;
    MOTORES: string;
    "POTENCIA TOTAL": string;
    TENSION: string;
    "MASA SIN CARGA": string;
    "LONGITUD TOTAL": string;
    "PLAZAS SENTADAS": string;
    SEÑALIZACION: string;
    CONSTRUCTOR: string;
    "UNIDADES CONSTRUIDAS": number;
    FOTOS: string;
    VIDEO: string;
    PRESTACIONES: string;
    "FICHA TECNICA": string;

}

export interface TrainsResponseInterface {
    help: string;
    result: {
        fields: FieldsInterface[]
        include_total: boolean;
        limit: number;
        records: TrainInterface[];
        records_format: string;
        resource_id: string;
        total: number;
        _links: {
            next: string;
            start: string;
        }
    };
    success: boolean;
}