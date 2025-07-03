import { TrainsResponseInterface } from "@/data/trainsResponse.types";

export interface TrainInterface {
  id?: number;
  longitude: string;
  manufacturer: string;
  maxSpeed: string;
  model:string;
  motor: string;
  number: number;
  power: string;
  purpose: string;
  seats: string;
  weight: string;
}

export function mapApiToTrains(response: TrainsResponseInterface): TrainInterface[] {
  return response.result.records.map((record) => ({
    id: record._id,
    longitude: record["LONGITUD TOTAL"],
    manufacturer: record.CONSTRUCTOR,
    maxSpeed: record["VELOCIDAD MAXIMA"],
    model: record.MODELO,
    motor: record.MOTORES,
    number: record["UNIDADES CONSTRUIDAS"],
    power: record["POTENCIA TOTAL"],
    purpose: record.PROPOSITO,
    seats: record["PLAZAS SENTADAS"],
    weight: record["MASA SIN CARGA"],
  }));
}