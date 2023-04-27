let emoloyee :{
    id: number,
    name?: string, //using question mark indicates that this type is optional
    retire: (date: Date) => void
} = {id : 1, name: 'hello', retire: (date: Date) =>{
    console.log(date);
}}