import { useEffect, useRef, useState } from "react";

function Navbar(){
    const langRef = useRef<HTMLDivElement>(null);
    const [isScroll,setIsScroll] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [oldScroll,setOldScroll] = useState(0);
    const checkScrollDir=()=>{
        // "false" if direction is up and "true" if down
        if(oldScroll < window.scrollY && window.scrollY > 84){
            navRef.current?.classList.add("scrollingDown");
        }
        else{
            navRef.current?.classList.remove("scrollingDown");
        }
        setOldScroll(window.scrollY);
    }

    const checkForBanner=(bannerEl:any)=>{
        if(bannerEl){
            if(window.scrollY < (bannerEl?.offsetTop + bannerEl?.offsetHeight)){
                navRef.current?.classList.add("inBanner");
            }
            else{
                navRef.current?.classList.remove("inBanner");
            }
        }
    }

    useEffect(()=>{
        const isForm = document.getElementById("FormPage");
        if(isForm){
            navRef.current?.classList.add("isFormPage");
        }
        else{
            navRef.current?.classList.remove("isFormPage");
        }
        checkScrollDir();
        const bannerEl = document.getElementById("Banner");
        checkForBanner(bannerEl);
    },[isScroll])
    window.onscroll = ()=>{
        setIsScroll(!isScroll);
    }

    const OpenLang=()=>{
        langRef.current?.classList.toggle("active");
    }

    const selectLang=(lang:string)=>{
        const placeholder = document.getElementById("langSelectPlaceholder");
        const oldValue:string = placeholder?.innerHTML?placeholder.innerHTML:"";
        const itemSelected = document.getElementById(lang);
        if(itemSelected){ itemSelected.innerHTML = oldValue;}
        if(placeholder){ placeholder.innerHTML = lang;}
        }

    return(
        <div ref={navRef} id="Navbar">
            <div className="navbarContainer">
                <a href="/" title="logo" className="logo">
                    Picturing you
                </a>
                <div className="menus">
                    <div ref={langRef} className="langSelect"><div onClick={()=>OpenLang()} className="langSelectPlaceholder">PT</div><div className="langOptions"><div onClick={()=>selectLang("EN")} id="EN" className="option">En</div></div></div>
                    <a title="aboutUs" className="menu">Sobre nós</a>
                    <a href="/formulario" title="form" className="menu">Agende uma sessão</a>
                    <a title="contacts" className="menu">Contactos</a>
                    <a title="portefolio" className="menu">portefolio</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;