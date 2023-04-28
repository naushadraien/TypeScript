function greet(name: string | null) {
    if (name){
       console.log(name.toLocaleUpperCase());
    }
    else{
        console.log('Hello');
    }
}
greet (null); //here null value is can't passed before defining the type of the name of null which is done above