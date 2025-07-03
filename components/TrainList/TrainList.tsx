import { TrainInterface } from "@/domain/trains.types";
import TrainItem from "../TrainItem/TrainItem";

const NoticeList = ({ trains }: {trains: TrainInterface[]}) => {
    console.log(trains)

    return (
        <>
            <h3 className="mt-6 text-xl">Actualmente estamos mostrando 
                <span className="bg-teal-500 text-white px-2 mx-2 rounded-md">{trains.length}</span> 
                trenes
            </h3>

            <ul className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trains.map(({id, model, purpose, maxSpeed, power, seats, manufacturer}) => 
                    <TrainItem
                        key={id}
                        model={model}
                        purpose={purpose} 
                        maxSpeed={maxSpeed}
                        power={power}
                        seats={seats}
                        manufacturer={manufacturer}
                    />
                )}
            </ul>
        </>
    );
}

export default NoticeList