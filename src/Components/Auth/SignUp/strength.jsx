const Numbers=value=>{
   return new RegExp(/[0-9]/).test(value)
}

const Special=value=>{
     return(/[!#@$%^&*)(+=._-]/).test(value)
}

const Alpabets=value=>{
    return new RegExp(/[a-z]/).test(value)&&
           new RegExp(/[A-Z]/).test(value)
}

export const strengthIn=value=>{
   
    let strengths=0;
    
    //if(value.length>5)
    //strengths++;

    if(Numbers(value))
    strengths++;
    if(Special(value))
    strengths++;
    if(Alpabets(value))
    strengths++;

    return strengths;

}