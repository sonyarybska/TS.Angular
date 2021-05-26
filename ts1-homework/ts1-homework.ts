//Створити такі класи:
// 1) Депутат
//    - імя
//    - вік
//    - стать
//    - ступінь чесності (0-100)
//    - мінімальна сума хабаря
//

class Deputy {
    public name: string;
    public age: number;
    public gender: string;
    public honestly: number;
    public minMoney: number;

    constructor(name: string, age: number, gender: string, honestly: number, minMoney: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honestly = honestly;
        this.minMoney = minMoney;
    }

}

let dep1 = new Deputy('Andrey', 45, 'male', 70, 1000);
let dep2 = new Deputy('Max', 22, 'male', 20, 200);
let dep3 = new Deputy('Anna', 24, 'female', 55, 67456);
let dep4 = new Deputy('Oleg', 37, 'male', 12, 900500);

//     Партія
//    - назва
//    - голова (Депутат)
//    - члени партії (Масив депатутатів)

class Party {
    public name: string;
    public deputy: string;
    public members: Array<Deputy>;

    constructor(name: string, deputy: string, members: Array<Deputy>) {
        this.name = name;
        this.deputy = deputy;
        this.members = members;
    }

//- додати\видалити депутата з фракції

    Deletedeputate = (key:string) => {
        for (let i = 0; i < this.members.length; i++) {
            if (this.members[i].name === key) {
                this.members.splice(i, 1);
                return this.members;
            }
        }
    }
    AddDeputate = (party) => {
        this.members.push(party)
    }

    //- вивести всіх хабарників фракції

    Thieves = () => {
        this.members.forEach((value, index) => {
            if (this.members[index].minMoney > 50000) {
                console.log(this.members[index])
            }

        })
    }

    //- вивести найбільшого хабарника у фрації

    OneThieves=()=>{
        let max;
        for (let i = 0; i < this.members.length-1; i++) {
             max=this.members[0].minMoney;
            if(max<this.members[i+1].minMoney)max=this.members[i+1];
        }
        console.log(max);
    }

    //- спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
    // Дача хабаря має мати 3 стани
    // - не успішна
    // - успішна
    // - вгається

    Vzyatka=(money)=>{
        for (let i = 0; i <this.members.length; i++) {
           if(money<this.members[i].minMoney)console.log('Не успішна');
            if(money>=this.members[i].minMoney*this.members[i].honestly)
            {
                console.log('Успішна');
           }
            else {
                console.log('Вагається')
            }

        }

    }
}

let part1 = new Party('rada', 'Sasha', [dep1, dep2, dep3, dep4]);
let part2 = new Party('ukr', 'Yulya', [dep1, dep3, dep4]);
part1.Thieves();
part1.Deletedeputate('Max');
part2.AddDeputate(new Deputy('Oksana', 21, 'female', 100, 388373))

//    Верхрвна рада
//    - масив партій
//    - решті полів на вибір

class supremeCouncil {
    public parties: Array<Party>;

    constructor(parties: Array<Party>) {
        this.parties = parties;

    }


    // - додати\видалити фракцію

    DeleteParty = (key) => {
        for (let i = 0; i < this.parties.length; i++) {
            if (this.parties[i].name === key) {
                this.parties.splice(i, 1);
                return this.parties;
            }
        }
    }

    AddParty = (party) => {
        this.parties.push(party)
    }

    //- вивести всі фракції

    AllParty = () => {
        this.parties.forEach(value => console.log(value.name))
    }

    //- вивести конкретну фракцію

    OneParty = (name) => {
        for (let i = 0; i < this.parties.length; i++) {
            if (name === this.parties[i].name) {
                console.log(this.parties[i]);
            }
        }

    }
}

let sup = new supremeCouncil([part1, part2])



