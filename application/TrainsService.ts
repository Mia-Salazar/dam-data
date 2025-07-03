import { fetchTrains } from "@/data/fetchTrains";
import { TrainsResponseInterface } from "@/domain/trains.types";

export const getTrainsList = async (): Promise<TrainsResponseInterface> => {
    const response = await fetchTrains();
    return response;
};