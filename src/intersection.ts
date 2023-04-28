//this intersection type is another type in the type script

type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type Intersection = Draggable & Resizable; // this & for intersection type

let UImethod : Intersection = {
    drag: () => {},
    resize: () => {}
}

