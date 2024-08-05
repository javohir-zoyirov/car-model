import { AndroidOutlined, AppleOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, TwitterOutlined } from "@ant-design/icons";
import './footer.css'
export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#050B20" }}>
      <div className="row container mx-auto text-white py-5 border-bottom">
        <div className="col-lg-6 mt-2">
          <h5>BOXCARS</h5>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es
          </p>
          <div className="d-flex align-items-center gap-4">
            <button
              style={{ border: "1px solid white" }}
              className="rounded-4 btn text-white px-4"
            >
              <PhoneOutlined /> +76 956 09 999
            </button>
            <button
              style={{ border: "1px solid white" }}
              className="rounded-4 btn text-white px-4"
            >
              <MailOutlined /> ali@BoxCars.com
            </button>
          </div>
        </div>
        <div className="col-lg-6 mt-2">
          <h3>Join BoxCar</h3>
          <p>Receive pricing updates, shopping tips & more!</p>
          <input
            placeholder="Your email address"
            className="rounded bg-secondary w-75 form-control my-4 border-0"
          />
          <button
            style={{ backgroundColor: "#405FF2" }}
            className="btn text-white w-75"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="row mx-auto container py-5">
        <div className="col-lg-2 col-md-3 col-6">
          <ul>
            <li style={{fontSize:"20px"}} className="fw-bold">Company</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Services</li>
            <li>FAQs</li>
            <li>Terms</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-3 col-6">
          <ul>
            <li style={{fontSize:"20px"}} className="fw-bold">Quick Links</li>
            <li>Get in touch</li>
            <li>Help center</li>
            <li>Live chat</li>
            <li>How it works</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 col-6">
          <ul>
            <li style={{fontSize:"20px"}} className="fw-bold">Our Brands</li>
            <li>Toyota</li>
            <li>Porsche</li>
            <li>Audi</li>
            <li>BMW</li>
            <li>Ford</li>
            <li>Nissan</li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-3 col-6">
          <ul>
            <li style={{fontSize:"20px"}} className="fw-bold">Vehicles Type</li>
            <li>Sedan</li>
            <li>Hatchback</li>
            <li>SUV</li>
            <li>Hybrid</li>
            <li>Electric</li>
            <li>Coupe</li>
            <li>Truck</li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-3 col-6">
            <h5 className="text-white">Our Mobile App</h5>
        <div className="d-flex align-items-center flex-column my-3 gap-3">
              <button className="btn bg-secondary border-0 rounded-3">
                <span className="border-end  pe-2">
                  <AppleOutlined />
                </span>
                <span className="ps-2">Download on the App Store</span>
              </button>
              <button className="btn bg-secondary border-0 rounded-3">
                <span className="border-end pe-2">
                  <AndroidOutlined />
                </span>
                <span className="ps-2">Get in on Google Play</span>
              </button>
            </div>
        <h5 className="text-white">Connect With Us</h5>
        <div className="text-white d-flex gap-4 fs-4">
        <FacebookOutlined />
        <TwitterOutlined/>
        <InstagramOutlined />
        <LinkedinOutlined />
        </div>

       
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between container text-white mt-5 border-top pt-3 ">
            <p>© 2024 exemple.com. All rights reserved.</p>
            <p>Terms & Conditions
            Privacy Notice</p>
        </div>
      </div>
    </div>
  );
};
