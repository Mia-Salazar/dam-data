import { TrainsResponseInterface } from "@/data/trainsResponse.types";

interface TrainInterface {
  id: number;
  model: string;
  purpose: string;
  maxSpeed: string;
  power: string;
  seats: string;
  manufacturer: string;
}

export function mapApiToTrains(response: TrainsResponseInterface): TrainInterface[] {
  return response.result.records.map((record) => ({
    id: record._id,
    model: record.MODELO,
    purpose: record.PROPOSITO,
    maxSpeed: record["VELOCIDAD MAXIMA"],
    power: record["POTENCIA TOTAL"],
    seats: record["PLAZAS SENTADAS"],
    manufacturer: record.CONSTRUCTOR,
  }));
}
