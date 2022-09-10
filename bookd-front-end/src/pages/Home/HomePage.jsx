import Carousel from "react-bootstrap/Carousel";
import classes from "./HomePage.module.css";
import k1 from "../../assets/k1.jpg";
import bowling from "../../assets/bowling.jpg";
import escape from "../../assets/escape.jpg";
const HomePage = () => {
  return (
    <div className={classes.pageContainer}>
      <Carousel key="bob">
        <Carousel.Item interval={1000} key="steve">
          <img className="d-block w-100" src={k1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000} key="jim">
          <img className="d-block w-100" src={bowling} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000} key="cop">
          <img className="d-block w-100" src={escape} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
