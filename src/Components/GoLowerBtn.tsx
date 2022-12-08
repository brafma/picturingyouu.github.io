import resource from "../Assets/resourcesPT.json";

function GoLowerBtn(props:{areaID:string,text?:string, areaTitle?:string}){
const {areaID,text,areaTitle} = props;
const scrollDown = () => {
    const section = document.querySelector( '#'+areaID );
    if(section){
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }
};
return(
    <div className="goLowerBtn">
        <div className="myTooltip">{text}</div>
        <div className="link" onClick={()=>scrollDown()} title={resource.goTo + " " + areaTitle?areaTitle:areaID}><span className="fa fa-angle-double-down"></span></div>
    </div>
);
}

export default GoLowerBtn;