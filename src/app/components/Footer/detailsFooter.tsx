import Image from "next/image";
const detailsFooter = () => {
  return (
    <div className="flex flex-col lg:flex md:flex  sm:flex  lg:flex-row md:flex-row sm:flex-col bg-[#e03a3a] w-full   justify-center max-h-full ">
      <div
        className="flex lg:flex md:flex sm:flex flex-col md:flex-col sm:flex-col text-white m-auto pb-4 lg:ml-[10.5rem]
      md:ml-[10.5rem] sm:ml-4 ml-4  "
      >
        <div className=" text-2xl">
          <h1>
            <strong>Jobs on the Go!</strong>
            <br />
            Stay up-to-date with the
            <br />
            latest job opportunities
            <br />
            with our Android and iOS apps.
          </h1>
        </div>
        <div className="flex flex-row pt-3 justify-start ">
          <Image src="/ios.png" height={0} width={140} alt="ios" />
          <Image src="/google.png" alt="google" height={0} width={140} />
        </div>
      </div>
      <div
        className="
        lg:m-auto md:m-auto sm:ml-4 ml-4 
      "
      >
        <video
          src="/jobshop.mp4"
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
