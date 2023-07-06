import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style/testmonial.css";

const sliderImageUrl = [
  {
    url: "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Fantasy.webp?updatedAt=1685900046954",
  },
  {
    url: "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Fantasy.webp?updatedAt=1685900046954",
  },
  {
    url: "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Fantasy.webp?updatedAt=1685900046954",
  },
  {
    url: "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Fantasy.webp?updatedAt=1685900046954",
  },
  {
    url: "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Fantasy.webp?updatedAt=1685900046954",
  },
  {
    url: "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Fantasy.webp?updatedAt=1685900046954",
  },
  {
    url: "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Fantasy.webp?updatedAt=1685900046954",
  },
  {
    url: "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/Categories/Fantasy.webp?updatedAt=1685900046954",
  },
];

function Testimonial() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className="AA">
        <div className="parent">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            arrows={false}
            dotListClass="custom-dot-list-style"
            transitionDuration={5000}
          >
            {sliderImageUrl.map((imageUrl, index) => {
              return (
                <div className="slider" key={index}>
                  <img
                    src={imageUrl.url}
                    alt="movie"
                    className="testmonimage mx-0"
                    style={{ minWidth: "80px" }}
                  />
                </div>
              );
            })}
          </Carousel>
          <br />
        </div>
      </div>
    </>
  );
}

export default Testimonial;
