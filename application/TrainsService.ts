import { fetchTrains } from "@/data/fetchTrains";

import { mapApiToTrains, TrainInterface } from "@/domain/trains.types";

export const getTrainsList = async (limit: number): Promise<TrainInterface[]> => {
    const response = await fetchTrains(limit);
    const result = mapApiToTrains(response);
    return result;
};