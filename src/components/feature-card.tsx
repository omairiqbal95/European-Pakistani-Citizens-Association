import React from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}
export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <>
      {/* @ts-ignore */}
      <Card color="transparent" shadow={false}>
        {/* @ts-ignore */}
        <CardBody className="grid place-items-start px-0">
          {/* @ts-ignore */}
          <div className="mb-3 grid place-content-center rounded-lg text-left text-blue-gray-900">
            <Icon className="h-6 w-6" />
          </div>
          {/* @ts-ignore */}
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          {/* @ts-ignore */}
          <Typography className="text-gray-500 font-normal">
            {children}
          </Typography>
        </CardBody>
      </Card>
    </>
  );
}


export default FeatureCard;
