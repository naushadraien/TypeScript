//this union is a type in type script
function KGtoGM (weight: number | string) : number //this number is for return type that is number and here in this line or operator'|' is used as a union that can be a number or string
{
    if(typeof weight === 'number'){
        return weight*2.2;
    }else{
        return parseInt(weight)*2.4;
    }
}

KGtoGM(20);
KGtoGM('20kg');