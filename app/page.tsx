import Image from "next/image";

import { Card } from "@/components";

export default function Home() {
  return (
    <section className="">
      <h2 className="text-center text-3xl">¡Le damos la bienvenida a 
        <span className="text-teal-500 font-bold ml-1">Trenes Chuchu</span>
      !</h2>
      <figure className="mt-8 w-full h-100 object-cover">
        <Image 
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt=""
          src="/hero.jpg" 
          className="max-w-full max-h-full"
        />
      </figure>
      <div className="grid grid-cols-2 gap-4 mt-8 flex mx-auto max-w-2xl">
        <Card 
          link="/warning"
          linkText="Avisos"
          title="Consulta los últimos avisos de Renfe. Podrás conocer las fechas y los lugares afectados por dichas situaciones." 
        />
        <Card 
          link="/trains"
          linkText="Trenes"
          title="Consulta todos los detalles de los trenes que están en circulación actualmente." 
        />
      </div>
    </section>
  );
}
