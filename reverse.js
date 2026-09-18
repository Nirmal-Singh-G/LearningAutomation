class A{
    name(){
        console.log("Nirmal");
    }
}

class B extends A{
    name(){
        console.log("Nirmal Singh");
    }
}

let b = new B()

b.name()