import {
  AndroidOutlined,
  AppleOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import "./home-page.css";
import { Swiper2 } from "../swiper";
import f1 from "../image/f1.svg fill.png";
import linkAudi from "../image/LinkAudi.png";
import bmw from "../image/Bmw.jpg.png";
import mers from "../image/Mers.png";
import volvo from "../image/volvo.jpg.png";
import etron from "../image/eTron.jpg.png";
import audiLogo from "../image/audiLogo.png";
import bmwLogo from "../image/BmwLogo.png";
import fordLogo from "../image/fordLogo.png";
import mersLogo from "../image/fordLogo.png";
import peugeotLogo from "../image/PeugeotLogo.png";
import WolksWagen from "../image/WolksWagenLogo.png";
import { SwiperCard } from "../swiper/swiper-card";
import person1 from "../image/person1.jpg.png";
import person2 from "../image/person2.png";
import person3 from "../image/person3.png";
import person4 from "../image/person4.png";
import volvoCard from "../image/volvoCard.png";
import bentleyCard from "../image/bentleyCard.png";
import audiCard from "../image/audiCard.png";
import { Footer } from "../footer";

export const HomePage = () => {
  return (
    <>
      <div className="header">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand text-white fw-bold" href="#">
             BOXCARS
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active text-white" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Listing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Pages
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <button class="navbar-text bg-transparent text-white border-white rounded-4 btn">
                Submit Listing
              </button>
            </div>
          </div>
        </nav>

        {/* <div className="d-flex align-items-center justify-content-between my-5 py-5">
          <div>
            <p>$165.000</p>
            <h3> Volvo x90 - 2021</h3>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-fuel-pump"
                viewBox="0 0 16 16"
              >
                <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z" />
                <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8z" />
              </svg>
              <h5 className="p-0 m-0">Fuel Type</h5>
              <p className="p-0 m-0">Petrol</p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-speedometer"
                viewBox="0 0 16 16"
              >
                <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                <path
                  fill-rule="evenodd"
                  d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"
                />
              </svg>
              <h5 className="p-0 m-0 ">250 Miles</h5>
              <p className="p-0 m-0">Millage</p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
              </svg>
              <h5 className="p-0 m-0 ">Transmission</h5>
              <p className="p-0 m-0">Manual </p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar3"
                viewBox="0 0 16 16"
              >
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
              <h5 className="p-0 m-0 ">Year</h5>
              <p className="p-0 m-0">2021</p>
            </div>
          </div>
        </div> */}
      </div>

      <div className="d-flex align-items-center justify-content-between py-5 container">
        <h3 className="fw-bold p-0 m-0">Explore All Vehicles</h3>
        <button className="btn border-0">
          View All <RiseOutlined />
        </button>
      </div>

      <div className="container d-flex align-items-center gap-2 border-bottom pb-3">
        <button className="btn border-0">In Stock</button>
        <button className="btn border-0">New Cars</button>
        <button className="btn border-0">Used Cars</button>
      </div>

      <div className="">
        <Swiper2 />
      </div>

      <div
        style={{ backgroundColor: "#F9FBFC" }}
        className="container-fluid mx-auto my-5 pb-4"
      >
        <h3 className="fw-bold p-0 m-0 container mx-auto my-5 pt-5">
        Why Choose Us?
        </h3>
        <div className="row container mx-auto text-black">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="">
              <img
                style={{ width: "51px", height: "60px" }}
                className="mb-3"
                src={f1}
                alt="#"
              />
              <p
                style={{
                  fontSize: "20px",
                  color: "#050B20",
                  fontWeight: "bold",
                }}
              >
                Special Financing Offers
              </p>
              <p style={{ fontSize: "15px" }}>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="">
              <img
                style={{ width: "51px", height: "60px" }}
                className="mb-3"
                src={f1}
                alt="#"
              />
              <p
                style={{
                  fontSize: "20px",
                  color: "#050B20",
                  fontWeight: "bold",
                }}
              >
                Special Financing Offers
              </p>
              <p style={{ fontSize: "15px" }}>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="">
              <img
                style={{ width: "51px", height: "60px" }}
                className="mb-3"
                src={f1}
                alt="#"
              />
              <p
                style={{
                  fontSize: "20px",
                  color: "#050B20",
                  fontWeight: "bold",
                }}
              >
                Special Financing Offers
              </p>
              <p style={{ fontSize: "15px" }}>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="">
              <img
                style={{ width: "51px", height: "60px" }}
                className="mb-3"
                src={f1}
                alt="#"
              />
              <p
                style={{
                  fontSize: "20px",
                  color: "#050B20",
                  fontWeight: "bold",
                }}
              >
                Special Financing Offers
              </p>
              <p style={{ fontSize: "15px" }}>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between py-5 container">
        <h3 className="fw-bold p-0 m-0">Browse by Type</h3>
        <button className="btn border-0">
          View All <RiseOutlined />
        </button>
      </div>

      <div className="row container mx-auto">
        <div className="col-lg-6 col-12 mt-2">
          <img className="w-100" src={linkAudi} />
        </div>
        <div className="col-lg-6 mt-2">
          <img className="w-100" src={bmw} />
        </div>
      </div>

      <div className="row container mx-auto my-2">
        <div className="col-lg-4">
          <img className="w-100" src={mers} />
        </div>
        <div className="col-lg-4 mt-2">
          <img className="w-100" src={volvo} />
        </div>
        <div className="col-lg-4 mt-2">
          <img className="w-100" src={etron} />
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between py-5 container">
        <h3 className="fw-bold p-0 m-0">Shop BoxCar Your Way</h3>
        <button className="btn border-0">
          View All <RiseOutlined />
        </button>
      </div>
      <div className="container d-flex align-items-center gap-2 border-bottom pb-3 mb-5">
        <button className="btn border-0">New Cars For Sale</button>
        <button className="btn border-0">Used Cars For Sale</button>
        <button className="btn border-0">Browse By Type</button>
        <button className="btn border-0">Browse By Brand</button>
      </div>

      <div className="row container mx-auto">
        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
          <ul>
            <li className="text-black">Ford Cars</li>
            <li className="text-black">Honda Cars</li>
            <li className="text-black">Hyundai Cars</li>
            <li className="text-black">Infiniti Cars</li>
            <li className="text-black">Jaguar Cars</li>
            <li className="text-black">Jeep Cars</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
          <ul>
            <li className="text-black">Ford Cars</li>
            <li className="text-black">Honda Cars</li>
            <li className="text-black">Hyundai Cars</li>
            <li className="text-black">Infiniti Cars</li>
            <li className="text-black">Jaguar Cars</li>
            <li className="text-black">Jeep Cars</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-6" >
          <ul>
            <li className="text-black">Ford Cars</li>
            <li className="text-black">Honda Cars</li>
            <li className="text-black">Hyundai Cars</li>
            <li className="text-black">Infiniti Cars</li>
            <li className="text-black">Jaguar Cars</li>
            <li className="text-black">Jeep Cars</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
          <ul>
            <li className="text-black">Ford Cars</li>
            <li className="text-black">Honda Cars</li>
            <li className="text-black">Hyundai Cars</li>
            <li className="text-black">Infiniti Cars</li>
            <li className="text-black">Jaguar Cars</li>
            <li className="text-black">Jeep Cars</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
          <ul>
            <li className="text-black">Ford Cars</li>
            <li className="text-black">Honda Cars</li>
            <li className="text-black">Hyundai Cars</li>
            <li className="text-black">Infiniti Cars</li>
            <li className="text-black">Jaguar Cars</li>
            <li className="text-black">Jeep Cars</li>
          </ul>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between py-5 container">
        <h3 className="fw-bold p-0 m-0">Explore Our Premium Brands</h3>
        <button className="btn border-0">
          View All <RiseOutlined />
        </button>
      </div>

      <div className="row container mx-auto mb-5">
        <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-2">
          <img className="w-100" src={audiLogo} />
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-2">
          <img className="w-100" src={bmwLogo} />
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-2">
          <img className="w-100" src={fordLogo} />
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-2">
          <img className="w-100" src={mersLogo} />
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-2">
          <img className="w-100" src={peugeotLogo} />
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-2">
          <img className="w-100" src={WolksWagen} />
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between py-5 container">
        <h3 className="fw-bold p-0 m-0">What our customers say</h3>
        <button className="btn border-0">
          View All <RiseOutlined />
        </button>
      </div>

      <div>
        <SwiperCard />
      </div>

      <div className="d-flex align-items-center justify-content-between py-5 container">
        <h3 className="fw-bold p-0 m-0">Our Team</h3>
        <button className="btn border-0">
          View All <RiseOutlined />
        </button>
      </div>
      <div className="row container mx-auto">
        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div>
            <img className="rounded-3 w-100" src={person1} />
            <p className="fw-bold m-0 pt-3">Courtney Henry</p>
            <p className="p-0 m-0">Development Manager</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div>
            <img className="rounded-3 w-100" src={person2} />
            <p className="fw-bold m-0 pt-3">Courtney Henry</p>
            <p className="p-0 m-0">Development Manager</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div>
            <img className="rounded-3 w-100" src={person3} />
            <p className="fw-bold m-0 pt-3">Courtney Henry</p>
            <p className="p-0 m-0">Development Manager</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div>
            <img className="rounded-3 w-100" src={person4} />
            <p className="fw-bold m-0 pt-3">Courtney Henry</p>
            <p className="p-0 m-0">Development Manager</p>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#405FF2", color: "white" }}
        className="container-fluid p-5 my-5"
      >
        <div className="row container mx-auto">
          <div className="col-lg-8">
            <h5>Shop used cars, whether you're on the lot or on the go</h5>
            <p>
              {" "}
              Download our app to save cars and create alerts, scan window
              stickers on our lot for more details, and even call dibs on a car
              by holding it for up to 7 days.
            </p>

            <div className="d-flex align-items-center gap-3">
              <button className="btn bg-white text-black border-0 rounded-3">
                <span className="border-end pe-2">
                  <AppleOutlined />
                </span>
                <span className="ps-2">Download on the App Store</span>
              </button>
              <button className="btn bg-white border-0 rounded-3 text-black">
                <span className="border-end pe-2">
                  <AndroidOutlined />
                </span>
                <span className="ps-2">Get in on Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between py-5 container">
        <h3 className="fw-bold p-0 m-0">Latest Blog Posts</h3>
        <button className="btn border-0">
          View All <RiseOutlined />
        </button>
      </div>

      <div className="row container mx-auto">
        <div className="col-lg-4 col-6">
          <div className="card border-0">
            <img className="w-100" src={volvoCard} />
            <p className="m-0 py-2">Admin / November 22.2023</p>
            <p className="fw-bold">2024 BMW ALPINA XB7 with exclusive details, extraordinary</p>
          </div>
        </div>
        <div className="col-lg-4 col-6">
          <div className="card border-0">
            <img className="w-100" src={bentleyCard} />
            <p className="m-0 py-2">Admin / November 22.2023</p>
            <p className="fw-bold">2024 BMW ALPINA XB7 with exclusive details, extraordinary</p>
          </div>
        </div>
        <div className="col-lg-4 col-6">
          <div className="card border-0">
            <img className="w-100" src={audiCard} />
            <p className="m-0 py-2">Admin / November 22.2023</p>
            <p className="fw-bold">2024 BMW ALPINA XB7 with exclusive details, extraordinary</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
