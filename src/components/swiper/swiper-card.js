import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import range from "../image/Container.png";
import bentley from "../image/Linkbentley.png";
import { CheckCircleOutlined, RiseOutlined } from "@ant-design/icons";
import { Rate } from "antd";

export const SwiperCard = () => {
    return <>
    <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay
      >
        <SwiperSlide>
            <div style={{backgroundColor:"#F9FBFC"}} className="p-3">
            <div className="d-flex align-items-center gap-5">
            <Rate disabled defaultValue={2} />
            <span className="d-flex align-items-center gap-3">
            <CheckCircleOutlined />
            <p className="p-0 m-0">vertified</p>
            </span>
            </div>
            <p className="fw-bold">Sales process was simple and easy</p>
            <p>Sales process was simple and easy.
            Maximillion was friendly and I didn’t feel...</p>
            <p>Ali Tufan</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{backgroundColor:"#F9FBFC"}} className="p-3">
            <div className="d-flex align-items-center gap-5">
            <Rate disabled defaultValue={2} />
            <span className="d-flex align-items-center gap-3">
            <CheckCircleOutlined />
            <p className="p-0 m-0">vertified</p>
            </span>
            </div>
            <p className="fw-bold">Sales process was simple and easy</p>
            <p>Sales process was simple and easy.
            Maximillion was friendly and I didn’t feel...</p>
            <p>Ali Tufan</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{backgroundColor:"#F9FBFC"}} className="p-3">
            <div className="d-flex align-items-center gap-5">
            <Rate disabled defaultValue={2} />
            <span className="d-flex align-items-center gap-3">
            <CheckCircleOutlined />
            <p className="p-0 m-0">vertified</p>
            </span>
            </div>
            <p className="fw-bold">Sales process was simple and easy</p>
            <p>Sales process was simple and easy.
            Maximillion was friendly and I didn’t feel...</p>
            <p>Ali Tufan</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{backgroundColor:"#F9FBFC"}} className="p-3">
            <div className="d-flex align-items-center gap-5">
            <Rate disabled defaultValue={2} />
            <span className="d-flex align-items-center gap-3">
            <CheckCircleOutlined />
            <p className="p-0 m-0">vertified</p>
            </span>
            </div>
            <p className="fw-bold">Sales process was simple and easy</p>
            <p>Sales process was simple and easy.
            Maximillion was friendly and I didn’t feel...</p>
            <p>Ali Tufan</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{backgroundColor:"#F9FBFC"}} className="p-3">
            <div className="d-flex align-items-center gap-5">
            <Rate disabled defaultValue={2} />
            <span className="d-flex align-items-center gap-3">
            <CheckCircleOutlined />
            <p className="p-0 m-0">vertified</p>
            </span>
            </div>
            <p className="fw-bold">Sales process was simple and easy</p>
            <p>Sales process was simple and easy.
            Maximillion was friendly and I didn’t feel...</p>
            <p>Ali Tufan</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
}