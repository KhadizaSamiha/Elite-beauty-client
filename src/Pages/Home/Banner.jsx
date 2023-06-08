import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";



const Banner = () => {
    return (
        <section >
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
               
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                   <img  className="h-80 " src="https://i.ibb.co/LQwLqQw/24492894-6941009.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                   <img className="h-72 mt-5" src="https://i.ibb.co/5TTvBcM/24492893-6940918.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="mt-9" src="https://i.ibb.co/S3CwLVN/10014723-4283914.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                   <img className="mt-9" src="https://i.ibb.co/VHVY6zC/10014715-4283912.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;