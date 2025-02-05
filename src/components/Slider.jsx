import Images from "./Images";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle';

function Sslider() {
    return (  
        <Swiper className="main__card"
        modules={[Navigation, Pagination, Scrollbar, A11y,]}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{980:
            {slidesPerView: 3},
            768:{slidesPerView: 2}
        }}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
            <div className="card--container">
                <h4>
                    {Images[4].title}
                </h4>
                <img src={Images[4].fish} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card--container">
                <h4>
                    {Images[14].title}
                </h4>
                <img src={Images[14].soup} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card--container">
                <h4>
                    {Images[2].title}
                </h4>
                <img src={Images[2].dessert} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card--container">
                <h4>
                    {Images[9].title}
                </h4>
                <img src={Images[9].salad} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card--container">
                <h4>
                    {Images[6].title}
                </h4>
                <img src={Images[6].meat} alt="" />
            </div>
        </SwiperSlide>
        </Swiper>
    );
}

export default Sslider;