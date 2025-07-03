import Image from "next/image";

import { getTrainsList } from "@/application/TrainsService";
import { Title, TrainList } from "@/components";

const Trains = async () => {
    const result = await getTrainsList()

    return (
        <section>
            <Title>Trenes en uso</Title>
                <figure className="mt-8 w-full h-100 object-cover">
                    <Image 
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt=""
                        src="/trains.jpg" 
                        className="max-w-full max-h-full object-cover"
                    />
                </figure>
            <TrainList trains={result} />
        </section>
    );
}

export default Trains