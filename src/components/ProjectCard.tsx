import { ProjectCardTypes } from "@/lib/types";
import Image from "next/image";
import { Badge } from "./ui/badge";

export default function ProjectCard({
  type,
  technologies,
  title,
  year,
  imageSrc,
}: ProjectCardTypes) {
  return (
    <div>
      <Image
        src={imageSrc}
        width={600}
        height={350}
        alt={`${title} picture`}
        className="object-cover object-top w-full rounded-sm aspect-video"
      />
      <div className="flex justify-between mx-1 mt-1">
        <p className="text-sm">{type}</p>
        <div className="flex gap-1">
          {technologies.map((t) => (
            <Badge key={t} variant={"outline"}>
              {t}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex justify-between mx-1 text-xl">
        <p className="">{title}</p>
        <p className="">{year}</p>
      </div>
    </div>
  );
}
