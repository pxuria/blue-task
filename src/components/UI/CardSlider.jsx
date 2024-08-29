import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import cardLogo from "../../assets/card-logo.svg";

const CardSlider = () => {
  return (
    <div className="relative">
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
        <SwiperSlide>
          <div className="relative h-full w-full">
            <span className="absolute bottom-[40%] left-1/2 -translate-x-1/2">bank, but lovely</span>
            <img src={cardLogo} alt="cardLogo" width={60} height={40} className="absolute bottom-8 left-8" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <span className="absolute bottom-[50%] tracking-wider text-nowrap bottom-2/5 left-1/2 -translate-x-1/2 font-normal">
              bank, but lovely
            </span>
            <img src={cardLogo} alt="cardLogo" width={60} height={40} className="absolute bottom-8 left-8" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <span className="absolute bottom-2/5 left-1/2 -translate-x-1/2">bank, but lovely</span>
            <img src={cardLogo} alt="cardLogo" width={60} height={40} className="absolute bottom-8 left-8" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSlider;
