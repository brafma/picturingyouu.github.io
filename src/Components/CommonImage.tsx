import blank from '../Assets/Images/blank.jpg';

function CommonImage(props:{src:string, title?:string, className?:string}){
const {src,title,className} = props;
if(src){
    return(
        <img 
        src={src} 
        alt={title?title:src} 
        className={className} 
        onError={
            ({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src=blank;
              }}/>
    );
}
else{
    return(
        <img 
        src={blank}
         alt={title?title:src} 
        className={className} 
         />);
}
}

export default CommonImage;