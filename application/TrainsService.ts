import { fetchTrains } from "@/data/fetchTrains";

import { mapApiToTrains, TrainInterface } from "@/domain/trains.types";

export const getTrainsList = async (): Promise<TrainInterface[]> => {
    const response = await fetchTrains();
    const result = mapApiToTrains(response);
    return result;
};