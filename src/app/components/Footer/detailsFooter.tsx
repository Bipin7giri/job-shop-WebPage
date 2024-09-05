import Image from "next/image";
const detailsFooter = () => {
  return (
    <div className="flex flex-col lg:flex md:flex  sm:flex  lg:flex-row md:flex-row sm:flex-col bg-[#e03a3a] w-full  h-[17.5rem]  justify-around mt-3 ">
      <div
        className="flex flex-col text-white w-[50%]  left-[-10]
        right-0
        top-0
      m-auto  "
      >
        <h4>
          <strong>Take jobs in Pockets with you!</strong>
          <br />
          Stay updated with new jobs on the go
          <br />
          with our official apps on Android and iOS
        </h4>
        <div className="flex flex-row justify-start h-20 w-50">
          <Image src="/ios.png" height={120} width={250} alt="ios" />
          <Image src="/google.png" alt="ios" height={10} width={220} />
        </div>
      </div>
      <div className="ml-10 flex flex-row mr-8  ">
        <div className="pr-1">
          <video
            src="/jobshopvideo.mp4"
            width="130"
            height="1"
            autoPlay
            loop
            controls
            muted
            preload="auto"
            playsInline
          />
        </div>
        <div>
          <Image src="/qr.jpg" width={130} height={1} alt="code" />
        </div>
      </div>
    </div>
  );
};
export default detailsFooter;
