
//1) написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal

interface IAnimal {
    typeOfMovement: string;
    says: string;

    info(info: string): void;
}

class Cat implements IAnimal {
    public typeOfMovement: string;
    public says: string;

    constructor(typeOfMovement, says) {
        this.typeOfMovement = typeOfMovement;
        this.says = says;
    }

    info(info: string) {
        console.log(info);
    }
}

class Fish implements IAnimal {
    public typeOfMovement: string;
    public says: string;

    constructor(typeOfMovement, says) {
        this.typeOfMovement = typeOfMovement;
        this.says = says;
    }

    info(info: string) {
        console.log(info);
    }
}

class Bird implements IAnimal {
    public typeOfMovement: string;
    public says: string;

    constructor(typeOfMovement, says) {
        this.typeOfMovement = typeOfMovement;
        this.says = says;
    }

    info(info: string) {
        console.log(info);
    }
}

let cat = new Cat('run', 'moev');
let fish = new Fish('swim', 'bul bul');
let bird = new Bird('fly', 'car');
cat.info('cat');
fish.info('fish');
bird.info('bird');
console.log(cat);
console.log(fish);
console.log(bird);


//2) создать абстрактный класс Shape:
// добавить абстрактные методы perimeter() и area()
abstract class Shape {
    a:number;
    b:number;
    c:number;
    constructor(a:number,b:number,c?:number) {
        this.a=a;
        this.b=b;
        this.c=c;
    }
    perimeter() {
        console.log(this.a+this.b+this.c) ;
    }

    area() {

    }
}

//создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры

class Triangle extends Shape{
    r:number;
    constructor(a,b,c,r) {
        super(a,b,c);
        this.r=r;
    }
   perimeter() {
       super.perimeter();
   }

    area() {
       console.log((this.a*this.b*this.c)/4*this.r);
    }
}


 class Rectangle extends Shape{
     constructor(a,b) {
         super(a,b);
     }
     perimeter() {
         console.log((this.a+this.b)*2);
     }

     area() {
         console.log(this.a*this.b);
     }
 }

//кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

 let array=[new Triangle(10,4,5,8),new Rectangle(10,4)];
for (let i = 0; i < array.length; i++) {
    let a=array[i];
    a.area();
    a.perimeter();
}