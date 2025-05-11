"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Representar",
    description:
      "Proteger y representar a la diáspora pakistaní residente en cualquier país de la Unión Europea.",
  },
  {
    icon: AcademicCapIcon,
    title: "Defender",
    description:
      "Defender los derechos humanos en Pakistán, en nombre de una comunidad que, aunque viva lejos, no olvida sus raíces ni a su gente.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Fortalecer",
    description: "Fortalecer la participación política, social y cultural de la diáspora pakistaní en Europa.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Promover",
    description: "Promover campañas de sensibilización, incidencia institucional y cooperación internacional centradas en las necesidades y demandas de nuestra comunidad.",
  }
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/europak.jpg"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          {/* @ts-ignore */}
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Nuestra misión es ser un puente sólido entre Europa y Pakistán, dando visibilidad y representación a una comunidad dinámica, trabajadora y resiliente: la diáspora pakistaní. En un contexto global donde los desafíos sociales, políticos y económicos no conocen fronteras, la diáspora pakistaní necesita estructuras organizadas y fuertes que la representen ante las instituciones europeas y que trabajen por garantizar su dignidad, su participación y sus derechos. EuroPak surge como una voz colectiva e independiente que trabaja para que la diáspora pakistaní no sea ignorada, marginada o silenciada.
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
              {/* @ts-ignore */}
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            La junta directiva de EuroPak está formada por personas de origen pakistaní residentes en diferentes países europeos, con trayectorias personales y profesionales diversas, pero unidas por una causa común: el bienestar y la defensa de la diáspora pakistaní.
            EuroPak es un espacio abierto, plural y participativo. Cualquier persona residente en la Unión Europea que comparta nuestros valores y quiera trabajar por un mundo más justo puede ser miembro. Creemos firmemente que la diáspora pakistaní, organizada, informada y activa, puede ser una fuerza transformadora en Europa y un motor de cambio también en Pakistán.
            La diáspora pakistaní ya no está sola. EuroPak es su voz. <br />  Únete al cambio
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
