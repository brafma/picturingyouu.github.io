import { useRef, useState } from "react";

function CommonSelect(props:{list:string[],placeholder:string,id:string,value:string,setValue:any}){
    const {list,placeholder,id,value,setValue} = props;
    const selectRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);
    const toggleSelect = () => {
        selectRef.current?.classList.toggle("active");
        
    }
    const chooseCategory = (item:string) =>{
        if(placeholderRef.current){
            if(item != ""){
                placeholderRef.current.innerHTML = item;
                setValue(item);
            }
            else{
                placeholderRef.current.innerHTML = placeholder;
                setValue("");
            }
            toggleSelect();
        }
    }
return(
    <div ref={selectRef} id={id} data-value={value} className="select">
        <div onClick={()=>toggleSelect()} id={id+"selectTop"} className="selectTop">
            <div ref={placeholderRef} id="placeholder" className="placeholder">{placeholder}</div>
            <span className="fa fa-chevron-down"></span>
        </div>
        <div id={id+"selectContent"} className="selectContent">
            <div className="contentContainer">
                <span onClick={()=>toggleSelect()} className="close fa fa-times"></span>
                <div onClick={()=>chooseCategory("")} className="choice">--Escolha um--</div>
                {list.map((item:string,index:number)=>{
                    return(<div onClick={()=>chooseCategory(item)} key={index} className="choice">{item}</div>);
                })}
            </div>
        </div>
    </div>
);
}

export default CommonSelect;