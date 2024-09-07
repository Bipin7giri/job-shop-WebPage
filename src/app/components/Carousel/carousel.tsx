import { Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
const images = ["/a.jpg", "/b.webp", "/c.jpg", "/d.jpg", "/e.jpg", "/f.jpg"];

const carousel = () => {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} alt="image" />
    </Carousel.Slide>
  ));

  return (
    <div className="w-9 h-40 object-fill">
      <Carousel withIndicators orientation="horizontal">
        {slides}
      </Carousel>
    </div>
  );
};
export default carousel;
