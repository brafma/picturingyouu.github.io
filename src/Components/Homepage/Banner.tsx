// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import CommonBtn from '../CommonBtn';
import CommonImage from "../CommonImage";
import resources from "../../Assets/resourcesPT.json";
import GoLowerBtn from '../GoLowerBtn';
import { Autoplay } from 'swiper';
import { useEffect } from 'react';

function Banner(props:{instaPics:any}){
const {instaPics} = props;
Swiper.use([Autoplay]);
const swiper = new Swiper(
    "#instaSwiper",{
        loop:true,
        slidesPerView:1,
        grabCursor:true,
        allowTouchMove:true,
        observer:true,
        observeParents:true,
        autoplay:{delay:5000}
        });
useEffect(()=>{
    swiper.init();
},[])

const hoverItem = (index:number)=>{
    const element = document.getElementById("id-"+index);
    element?.classList.add("active");
}

const closeHoverItem = (index:number) =>{
    const element = document.getElementById("id-"+index);
    element?.classList.remove("active");
}

return(
    <div id="Banner">
        <div id="instaSwiper" className='instaSwiper swiper swiper-container'>
            <div className='instaSwiperWrapper swiper-wrapper'>
                {instaPics.map((item:any,index:number)=>{
                    return(
                        <div id={"id-"+index} key={index} className="instaItem swiper-slide">
                            <div className='mobileInfoToggler'><div onClick={()=>hoverItem(index)} className="i">i</div><div onClick={()=>closeHoverItem(index)} className='close'>i</div></div>
                            <CommonImage src={item.image} title={item.description} />
                            <div className='info'>
                                <div className='infoContainer'>
                                <div className='description'>{item.description}</div>
                                {item.link && <CommonBtn link={item.link} text={resources.seePublication} />}   
                                </div>
                            </div>
                            <GoLowerBtn areaID='FormModule' text={resources.makeAppointement} areaTitle="formulario de sessão" />
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
)
}

export default Banner;