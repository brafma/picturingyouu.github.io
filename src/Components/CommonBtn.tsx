import resources from "../Assets/resourcesPT.json";

function CommonBtn(props:{link:string,className?:string,title?:string,text?:string}){
    const {link,className,title,text} = props;
    const goTo = resources.goTo;
    return(
        <a 
        href={link} 
        title={title?title:(text?goTo + " " +text:goTo + " " + link)} 
        className={"commonBtn "+className}>
            {text}
        </a>
    );
}

export default CommonBtn;