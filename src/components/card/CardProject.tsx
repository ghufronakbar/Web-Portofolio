import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const CardProject = ({
    id,
    name,
    heading,
    date,
    images = [],
    onClick,
    className
  }: {
    id?: number;
    name?: string;
    heading?: string;
    images?: string[];
    date?: string;
    onClick?: () => void;
    className?: string
  }) => {
    return (
      <>
        <div key={id} onClick={onClick}>
          <CardContainer className={className}>
            <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold  text-white"
              >
                {name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm max-w-sm mt-2 text-neutral-300"
              >
                {heading}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={images[0]}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={"Project Image" || name}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  {date}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl  bg-white text-black text-xs font-bold"
                >
                  Show Detail
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </>
    );
  };
  
  export default CardProject;