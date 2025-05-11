"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        {/* @ts-ignore */}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        {/* @ts-ignore */}
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="flex justify-center px-4 py-10">
  <div className="max-w-4xl text-center">
    {/* Heading */}
    {/* @ts-ignore */}
    <Typography
      variant="h2"
      className="text-center mb-4"
      color="blue-gray"
    >
      Actividades
    </Typography>

    {/* Body Text */}
    {/* @ts-ignore */}
    <Typography
      variant="lead"
      className="font-normal !text-gray-500 space-y-6 text-center"
    >
      {/* Date Line */}
      <p>
        07/05/2025 – Reunión de EuroPak en el Parlamento Europeo
      </p>

      {/* Paragraph 1 */}
      <p>
        El pasado 7 de mayo de 2025, miembros de la junta directiva de EuroPak se reunieron en el Parlamento Europeo con eurodiputados de diferentes países para abordar la preocupante situación de los derechos humanos en Pakistán. Durante el encuentro, se expusieron casos concretos de represión política, violencia institucional y ataques a la libertad de expresión, así como la necesidad urgente de una respuesta firme por parte de las instituciones europeas.
      </p>

      {/* Paragraph 2 */}
      <p>
        Desde EuroPak se insistió en la importancia de que la diáspora pakistaní en Europa tenga un papel activo en la defensa de los derechos fundamentales, tanto dentro como fuera de la UE. Los eurodiputados presentes mostraron su disposición a colaborar y a dar seguimiento a las demandas planteadas, abriendo así un espacio de diálogo permanente.
      </p>

      {/* Closing Paragraph */}
      <p>
        Este encuentro representa un paso más en el compromiso de EuroPak con la justicia, la dignidad y la defensa de los derechos humanos para el pueblo pakistaní.
      </p>
    </Typography>
  </div>
</section>
  );
}

export default WhyChooseUs;
