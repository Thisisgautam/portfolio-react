import meter1 from "../assets/img/icons8-react-js-500.svg";
import node1 from "../assets/img/icons8-node-js.svg";
import express1 from "../assets/img/icons8-express-js.svg";
import java1 from "../assets/img/icons8-java.svg";
import javascript1 from "../assets/img/icons8-javascript.svg";
import git1 from "../assets/img/icons8-git.svg";
import aws1 from "../assets/img/icons8-aws.svg";
import tail1 from "../assets/img/icons8-tailwind-css.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
I’m a passionate web developer skilled in the MERN stack, building full-stack applications with React, Node.js, Express, and MongoDB. I also have experience with AWS, Git/GitHub, SQL, Java, and C++, enabling me to deliver efficient and scalable solutions.
</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={node1} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={javascript1} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={aws1} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={express1} alt="Image" />
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <img src={git1} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={java1} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={tail1} alt="Image" />
                                <h5>Tailwind CSS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}