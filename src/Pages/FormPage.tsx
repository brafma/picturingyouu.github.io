import resources from "../Assets/resourcesPT.json";
import CommonSelect from "../Components/CommonSelect";
import emailjs from "emailjs-com";
import { useEffect, useRef, useState } from "react";
import moment from 'moment';
import 'moment/locale/pt';
import bgImg from "../Assets/Images/bgImg.svg"
import staticInfo from '../Assets/staticInfo.json';


function FormPage(){

const formLocals = staticInfo.formLocals;
const nameInputRef = useRef<HTMLInputElement>(null);
const dateInputRef = useRef<HTMLInputElement>(null);
const hourInputRef = useRef<HTMLInputElement>(null);
const emailInputRef = useRef<HTMLInputElement>(null);
const telInputRef = useRef<HTMLInputElement>(null);
const otherInputRef = useRef<HTMLInputElement>(null);
const localInputRef = useRef<HTMLInputElement>(null);
const ideaInputRef = useRef<HTMLTextAreaElement>(null);
const errorRef = useRef<HTMLDivElement>(null);
const[name,setName] = useState<string>("");
const[date,setDate] = useState<string>("");
const[hour,setHour] = useState<string>("");
const[email,setEmail] = useState<string>("");
const[tel,setTel] = useState<string>("");
const[other,setOther] = useState<string>("");
const[local,setLocal] = useState<string>("");
const[localSelectValue,setLocalSelectValue] = useState<string>("");
const[idea,setIdea] = useState<string>("");
const[btnClick,setBtnClick] = useState<boolean>(false);
const [firstClick,setFirstClick] = useState<boolean>(true);
const[showPopup,setShowPopup] = useState<boolean>(false);

let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const throwError = (error:string) =>{
    if(errorRef.current)
        errorRef.current.innerHTML = error;
}

const sendEmail = () =>{
    let templocal = local;
    if(localSelectValue != ""){
        if(local != ""){
           templocal =  local + ' <font color="red">ou</font> ' + localSelectValue;
        }
        else{
            if(localSelectValue){ templocal = localSelectValue;}
        }
    }
    let formatedDate = date==""?"":moment(date).locale("pt").format('DD/MMMM/YYYY').toLocaleUpperCase().replaceAll('/'," de ");
    const finalDate = (formatedDate==""?hour:(formatedDate + (hour==""?"":" às "+hour))).toString();
    let params = {
        "name":name,
        "date":(finalDate==""?"":"<b>Data e Hora:</b> "+finalDate),
        "tel":(tel==""?"":"<li>Telefone/Telemovel: "+tel+"</li>"),
        "email":(email==""?"":"<li>Email: "+email+"</li>"),
        "other":(other==""?"":"<li>Outro: "+other+"</li>"),
        "Local":(templocal==""?"":"<b>Local:</b> "+templocal),
        "idea":(idea==""?"":"<b>Ideia/Recomendação/Opinião:</b> "+idea)
    };
    emailjs.send("service_rz6i5an","template_446axp9", params,"Re4Y8dO8BwPree8_x")
    .then((result:any) => {
        setShowPopup(true);
    },
    (error:any) => {
        alert("An error occurred, Please try again");
        console.log(error);
    });
} 

useEffect(()=>{
    if(!firstClick){
        if((name != "") && (email != "" || tel != "" || other != "")){
            let caughtError = false;
            if (email!="") {
                if(!emailRegex.test(email)){
                    //Throw Error
                    caughtError = true;
                    throwError("O email está no formato errado.");
                }
            }
            if(tel!=""){
                if(isNaN(+tel)){
                    //Throw Error
                    caughtError = true;
                    throwError("O campo telefon/telemovel contem caracteres não numericos.");
                }
            }
            if(!caughtError){
                sendEmail();
                throwError("");
            }
        }
        else{
            //Throw error
            throwError("É obrigatório preencher o campo Nome e um campo dos contactos.")            
        }
    }
    else{
        setFirstClick(false);
    }
},[btnClick])

return(
    <>
        {showPopup && (<div className="myFormPopup"><div className="popupContainer"><span onClick={()=>setShowPopup(false)} className="fa fa-times"></span>Foi agendada uma sessão. Entraremos em contacto consigo em breve.</div></div>)}
        <div id="FormPage">
        <img src={bgImg} alt="bgImg" className="bgImg" />
        <div className="formaArea row">
            <div className="formTitle col-12">{resources.FormTitle}</div>
            <div className="formField name col-12 col-lg-4">
                <div className="label">Nome: *</div>
                <input onChange={(e) => setName(e.target.value)} ref={nameInputRef}></input>
            </div>
            <div className="formField date col-12 col-lg-8">
                <div className="label">Data e hora da sessão:</div>
                <input onChange={(e) => setDate(e.target.value)} ref={dateInputRef} className="date" max="9999-12-31" type="date"></input> <input onChange={(e) => setHour(e.target.value)} ref={hourInputRef} type="time"></input>
            </div>
            <div className="contacts col-12 row">
                <div className="contactsLabel col-12">Contactos: * (é necessário pelo menos 1)</div>
                {/* Email, telemovel/telefone, outro */}
                <div className="formField col-12 col-lg-3">
                    {/* <div ref={labelRef} className="label email">Email</div> */}
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} ref={emailInputRef}></input>
                </div>
                <div className="formField col-12 col-lg-3">
                    {/* <div ref={label2Ref} className="label telemovel/telefone">Telemovel/Telefone</div> */}
                    <input placeholder="Telemovel/Telefone" onChange={(e) => setTel(e.target.value)} ref={telInputRef}></input>
                </div>
                <div className="formField col-12 col-lg-3">
                    {/* <div ref={label3Ref} className="label outro">Outro</div> */}
                    <input placeholder="Outro" onChange={(e) => setOther(e.target.value)} ref={otherInputRef}></input>
                </div>
            </div>
            <div className="formField local col-12 row">
                <div className="label col-12">Local:</div>
                <input className="col-12 col-lg-4" onChange={(e) => setLocal(e.target.value)} ref={localInputRef} placeholder="Escolha você proprio/a"></input>
                <span className="orlabel col-12 col-lg-1">{resources.or}</span>
                <div className="col-12 col-lg-7">
                    <CommonSelect value={localSelectValue} setValue={setLocalSelectValue} list={formLocals} placeholder={resources.localPlaceholder} id={"formLocals"} />
                </div>
            </div>
            <div className="formField idea col-12">
                <div className="label">Ideia/Recomendação/Opinião:</div>
                {/* Caixa grande de texto */}
                <textarea onChange={(e) => setIdea(e.target.value)} ref={ideaInputRef} rows={5}></textarea>
            </div>
            <div ref={errorRef} className="errorMsg col-12"></div>
            <div className="formBtnContainer col-12">
                <button className="formBtn" onClick={() => setBtnClick(!btnClick)}>Agendar</button>
            </div>
        </div>
        </div>
    </>
);    
}

export default FormPage;