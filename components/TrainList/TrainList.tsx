"use client"

import { useEffect, useState } from "react";

import TrainItem from "../TrainItem/TrainItem";
import { getTrainsList } from "@/application/TrainsService";
import { TrainInterface } from "@/domain/trains.types";

const NoticeList = ({ limit }: { limit: number }) => {
    const [trains, setTrains] = useState<TrainInterface[]>([])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(event.currentTarget);
    };

    useEffect(() => {
        const getTrains = async () => {
            const data = await getTrainsList(limit)
            setTrains(data)
        }

        getTrains()

    }, [limit])

    return (
        <>
            <h3 className="mt-6 text-xl">Actualmente estamos mostrando 
                <span className="bg-teal-500 text-white px-2 mx-2 rounded-md">{trains.length}</span> 
                trenes
            </h3>
            <form className="mt-6" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="limit" className="mb-2">
                        Número de resultados deseados
                    </label>
                    <input className="border rounded-md border-teal-500 mb-4 w-3xs" id="limit" name="limit" type="number"  />
                </div>
                <button className="badge px-2">Enviar</button>
            </form>


            <ul className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trains.map((
                    {
                        id,
                        longitude,
                        manufacturer,
                        maxSpeed,
                        model,
                        motor,
                        number,
                        power,
                        purpose,
                        seats,
                        weight,
                    }) => 
                    <TrainItem
                        key={id}
                        longitude={longitude}
                        manufacturer={manufacturer}
                        maxSpeed={maxSpeed}
                        model={model}
                        motor={motor}
                        number={number}
                        power={power}
                        purpose={purpose}
                        seats={seats}
                        weight={weight}
                    />
                )}
            </ul>
        </>
    );
}

export default NoticeList