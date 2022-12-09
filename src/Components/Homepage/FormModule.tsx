import resources from "../../Assets/resourcesPT.json";
import CommonBtn from "../CommonBtn";
import GoLowerBtn from "../GoLowerBtn";

function FormMoudule(){
    return(
    <div id="FormModule">
        <div className="formContainer">
            <div className="formTitle">{resources.FormTitle}</div>
            <div className="formArea">
                <div className="formAreaText">Agende a sua sessão através do nosso Formulário.</div>
                <div className="formAreaText2">Nos entraremos em contacto consigo.</div>
                <CommonBtn className="formBtn" link="/formulario" title="formulário" text="Ir para o Formulário" />
            </div>
            <div className="or"><span className="line"></span>{resources.or}<span className="line"></span></div>
            <div className="ContactUsArea">
                Contacte-nos:
                <span className="fa fa-at"></span>
                <div className="contactTitle">{resources.email}</div>
                <div className="contactLabel">joao.manta12@gmail.com</div>
                <div className="socialArea">
                    <a className="socialItem" href="" title="Facebook" >
                        <span className="fa fa-facebook-f"></span>
                    </a>
                    <a className="socialItem" href="" title="Instagram" >
                        <span className="fa fa-instagram"></span>
                    </a>
                    <a className="socialItem" href="" title="Linkedin" >
                        <span className="fa fa-linkedin"></span>
                    </a>
                </div>
            </div>
        </div>
        <GoLowerBtn areaID="PresetsModule" text={resources.buyPresets} areaTitle="Compre um preset" />
    </div>
    )
}

export default FormMoudule;