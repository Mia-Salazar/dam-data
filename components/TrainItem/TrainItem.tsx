import { TrainInterface } from "@/domain/trains.types"

const TrainItem = (
    {
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
    }: TrainInterface) => {
    return (
        <li className="p-4 rounded-lg border border-teal-500">
            <h4 className="badge w-fit px-2 mb-1">{model}</h4>
            <p className="font-bold text-gray-500 text-lg2">{purpose}</p>
            <p className="mt-4 font-bold text-gray-500 uppercase text-xs mb-1">Medidas</p>
            <p>Longitud: {longitude}</p>
            <p>Peso: {weight}</p>

            <p className="mt-4 font-bold text-gray-500 uppercase text-xs mb-1">Especificaciones técnicas</p>
            <p>Velocidad máxima: {maxSpeed}</p>
            <p>Fabricante: {manufacturer}</p>
            <p>Motor: {motor}</p>
            <p>Número de asientos: {seats}</p>
            <p>Potenia: {power}</p>
            <p>Unidades contruidas: {number}</p>
        </li>
    )

}

export default TrainItem