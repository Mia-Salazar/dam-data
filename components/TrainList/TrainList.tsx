import { TrainInterface } from "@/domain/trains.types";
import TrainItem from "../TrainItem/TrainItem";

const NoticeList = ({ trains }: {trains: TrainInterface[]}) => {
    return (
        <>
            <h3 className="mt-6 text-xl">Actualmente estamos mostrando 
                <span className="bg-teal-500 text-white px-2 mx-2 rounded-md">{trains.length}</span> 
                trenes
            </h3>

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