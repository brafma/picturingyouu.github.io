import resources from "../../Assets/resourcesPT.json";
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { useEffect } from "react";
import CommonImage from "../CommonImage";
import CommonBtn from "../CommonBtn";
// import required modules
import { Navigation } from "swiper";

function PresetsMoudule(props:{homePresets:any}){
    const {homePresets} = props;
    const swiper = new Swiper(
        "#presetsSwiper",{
            loop:true,
            slidesPerView:1,
            grabCursor:false,
            navigation:true,
            modules:[Navigation]
            });
    useEffect(()=>{
        swiper.init();
    },[])

    return(
    <div id="PresetsModule">
        <div id="presetsSwiper" className="presetsSwiper swiper">
            <div className='presetsSwiperWrapper swiper-wrapper'>
                {homePresets.map((item:any,index:number) => {
                    return(
                    <div id={item.index} key={index} className="presetsItem swiper-slide">
                        <div className="presetsPreview">
                            <div className="ovalShape"></div>
                            <CommonImage src={item.image} title={item.title} />
                        </div>
                        <div className="presetInfo">
                            <div className="shape2">
                                <div>
                                <div className="presetTitle">{item.title}</div>
                                <div className="presetPrice">Preço:<p>&nbsp;&nbsp;&nbsp;&nbsp;{item.price} €</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="presetInfo2">
                            <div className="shape3">
                                <div>
                                <div className="presetDescription">{item.description}</div>
                                <div className="btnContainer">
                                <CommonBtn text="Comprar" title={"buy "+item.title} link={"/preset?id="+item.index} />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export default PresetsMoudule;