import Image from "next/image";
const detailsFooter = () => {
  return (
    <div className="flex flex-col lg:flex md:flex  sm:flex  lg:flex-row md:flex-row sm:flex-col bg-[#e03a3a] w-full   justify-center max-h-full ">
      <div className="flex lg:flex md:flex sm:flex flex-col md:flex-col sm:flex-col text-white m-auto pb-4   ">
        <div className=" text-2xl">
          <h1>
            <strong>Take jobs in Pockets with you!</strong>
            <br />
            Stay updated with new jobs on the go
            <br />
            with our official apps on Android and iOS
          </h1>
        </div>
        <div className="flex flex-row pt-3 justify-evenly ">
          <Image src="/ios.png" height={100} width={200} alt="ios" />
          <Image src="/google.png" alt="google" height={0} width={170} />
        </div>
      </div>
      <div
        className="
        
    m-auto  "
      >
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

        {/* <div>
          <Image src="/qr.jpg" width={130} height={1} alt="code" />
        </div> */}
      </div>
    </div>
  );
};
export default detailsFooter;
