import React from "react";
// import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Carousel from 'react-bootstrap/Carousel';
// import ReactPlayer from 'react-player'
// import MyVideoComponent from "../components/VideoComponent";
import Steph from '../assets/Meet-the-owner/MeetStephanie.png';
import Kristen from '../assets/Educators/Kristen/MeetKristen.png';
import Jess from '../assets/Educators/Jess/MeetJess.png';

function CarouselFadeExample() {
      return (
        <div className= "col-md-10 carousel">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {Steph}
              alt="First slide"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {Kristen}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {Jess}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      );
    }
    
    export default CarouselFadeExample;






//   return (
//     <main className="px-3 py-3">
//       <h2 className="fs-1">About Us</h2>
//       <MDBCol lg="4" md="6" className="mb-4">
//         <img
//           src= ''
//           className="img-fluid rounded-circle"
//           alt=""
//         />
//       </MDBCol>

//       <section className="p-2">
//         <blockquote>
//           Latin of persons, “to have discernment, be wise.“
//         </blockquote>

//         <p>
//           Sapien was built on the idea of informed consent, education, personal
//           relationships, and meticulous esthetics practices to make you feel
//           empowered to look and feel the way you want to.
//         </p>

//         <p>
//           Here at Sapien, we care more about peer-reviewed studies and best
//           practices, and less about staying on trend with clean beauty and buzz
//           words designed to make you buy things you don’t need to solve problems
//           that don’t exist. After hundreds of rave reviews and transformations,
//           both inside and out, we are proud of what we have built along with our
//           community of like-minded Homo sapiens.
//         </p>
//       </section>
//     </main>
//   );
// }

// export default AboutUs;
