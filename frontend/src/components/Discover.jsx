import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import image6 from "../assets/discover/image6.jpg";
import image7 from "../assets/discover/image7.jpg";
import image8 from "../assets/discover/image8.jpg";
import image9 from "../assets/discover/image9.jpg";

export default function Discover() {
  return (
    <div>
      <div className="px-10 sm:px-20">
        <h1 className="text-2xl sm:text-4xl font-serif text-center mb-5">
          Discover More Topics
        </h1>
        <hr className="my-1 sm:my-2 border-2 border-gray-500 font-bold" />

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 mx-auto justify-center p-0 my-10">
          <Card className="relative grid sm:h-[30rem] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center">
            <CardHeader
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            >
              <img src={image6} alt="card-image" className="w-full h-auto" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography variant="h5" className="mb-4 text-gray-400">
                Missions
              </Typography>
            </CardBody>
          </Card>

          <Card className="relative grid sm:h-[30rem]  w-full max-w-[24rem] items-end justify-center overflow-hidden text-center">
            <CardHeader
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            >
              <img src={image7} alt="card-image" className="w-full h-auto" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography variant="h5" className="mb-4 text-gray-400">
                Citizen Science
              </Typography>
            </CardBody>
          </Card>

          <Card className="relative grid sm:h-[30rem] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center">
            <CardHeader
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            >
              <img src={image8} alt="card-image" className="w-full h-auto" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography variant="h5" className="mb-4 text-gray-400">
                Value of NASA
              </Typography>
            </CardBody>
          </Card>

          <Card className="relative grid sm:h-[30rem]  w-full max-w-[24rem] items-end justify-center overflow-hidden text-center">
            <CardHeader
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            >
              <img src={image9} alt="card-image" className="w-full h-auto" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography variant="h5" className="mb-4 text-gray-400">
                Humans in Space
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
