import Image from "next/image";

import { Title, TrainList } from "@/components";
import { PageProps } from "./trains.types";

const Trains = ({ searchParams }: PageProps) => {
    const limit = Number(searchParams.limit) || 15;

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
            <TrainList limit={limit} />
        </section>
    );
}

export default Trains