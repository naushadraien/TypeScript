// this type is used as the aliases from the object.ts file i.e employee

type Emoloyee = {
  //this is the custom type that can be used at we needed this type
  id: number;
  name?: string; //using question mark indicates that this type is optional
  retire: (date: Date) => void;
};

let emoloyee1: Emoloyee = {
  id: 1,
  name: "hello",
  retire: (date: Date) => {
    console.log(date);
  },
};
