// // Sylvester-Divine definition
class Human {
    hasHands: boolean;
    hasHead: boolean;
    hasLegs: boolean;
    hasBrain: boolean;
    canReason: boolean;
}

class Vehicle {
    canTransport: boolean


    move() {
        console.log("Vehicle is moving")
    }
}

class Car extends Vehicle {
    name: string;
    model: string;
    productionYear: Date;
    hasFourTyres: boolean


    accelerate() {
        console.log("Car is accelerating")
    }

    move() {
        console.log("Car is moving")
    
    }

}

class Plane extends Vehicle {
    name: string;
    model: string;
    productionYear: Date;
    hasWings: boolean

    fly() {
        console.log("Plane is flying")
    }

    
    move(): void {
        console.log("o gbe mi fo")
    }
}

class Boat {
    name: string;
    model: string;
    productionYear: Date;
    hasSails: boolean

    sail() {
        console.log("Boat is sailing")
    }

}

const BMW = new Car();
BMW.name = "BMW";
BMW.model = "X6";
BMW.productionYear = new Date("2020-09-10")
BMW.hasFourTyres = true;
BMW.move()

const v =  new Vehicle();
v.move();


// const airpeace = new Plane();
// airpeace.name = "Airpeace";
// airpeace.model = "Boeing 747";
// airpeace.productionYear = new Date("2020-09-10")
// airpeace.hasWings = true;
// airpeace.move()


// // console.log(airpeace)
// // console.log(BMW)



// class Art {
//     colors: Array<string>
// }


// const monalisa = new Art();
// monalisa.colors = ['red', 'blue', 'green'];	


// const vangogh = new Art();
// vangogh.colors = ["pink", "orange", "purple"]

// // console.log("Vangogh", vangogh)
// // console.log("monalisa", monalisa)

// class HatchDevClass {
//     private pupils: string[] = [];

//     constructor(student: string[]) {
//         this.pupils = student;
//     }

//     getStudentNames(): string[]{
//         return this.pupils
//     }

//     private getTotalNumberOfStudents() {
//         return this.pupils.length;
//     }
// }

// const excelSheet = ["Ife", "Jide", "Kemi", "Lola", "Mide", "Ngozi", "Ola", "Fiope"]
// const HC = new HatchDevClass(excelSheet);
// console.log(HC['getTotalNumberOfStudents']())

// The code of writing code below is imperative and not declarative. Imperative: How to do something. Declarative: What to do.

// const chl = ["arsenal", "bayern", "real-madrid", "man-city"];
// const disPeaople: string[] = [];

// for (let i = 0; i < chl.length; i++) {
//     const club = chl[i];
//     if (club === "arsenal" || club === "man-city") {
//         disPeaople.push(club);
//     }
// }

// console.log(disPeaople)