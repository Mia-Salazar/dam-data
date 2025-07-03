import { fetchTrains } from "@/data/fetchTrains";
import { TrainsResponseInterface } from "@/domain/trains.types";

export const getNoticesList = async (): Promise<TrainsResponseInterface[]> => {
    const response = await fetchTrains();
    return response;
};