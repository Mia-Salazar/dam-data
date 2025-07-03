import { TrainsResponseInterface } from "./trainsResponse.types";

export const fetchTrains = async (limit = 15): Promise<TrainsResponseInterface> => {
  try {

    const response = await fetch(
      `https://data.renfe.com/api/3/action/datastore_search?resource_id=4877096a-160f-4fb2-925d-d261b51a065f&limit=${limit}`
    );

    
    if (!response.ok) throw new Error('Error al obtener los datos');
    
    const json = await response.json();

    return json;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('Error desconocido');
  }
};