addEventListener("DOMContentLoaded", () => {
  // let person = {
  //   fName: "Eshmat",
  //   walk: () => {
  //     console.log(this);
  //     setTimeout(() => {
  //       console.log(this);

  //       setTimeout(() => {
  //         console.log(this);
  //       }, 1000);
  //     }, 1000);
  //   },
  // };

  // function Person(fName) {
  //   this.fName = fName;
  // }

  // Person.prototype.talk = function () {
  //   console.log(this);
  // };

  // Person.prototype.walk = () => {
  //   console.log(this);
  // };

  // let eshmat = new Person("Eshmat");

  // eshmat.talk();
  // eshmat.walk();

  // class Animal {
  //   name;
  //   age;
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }

  //   walk() {
  //     console.log(`${this.name} is walking`);
  //   }

  //   sleep() {
  //     console.log(`${this.name} is sleeping`);
  //   }
  // }

  // class Cat extends Animal {
  //   chaseMouse() {
  //     console.log(`${this.name} is chasing a mouse`);
  //   }

  //   speak() {
  //     console.log(`Meow, meow, meow`);
  //   }
  // }

  // class Dog extends Animal {
  //   chain;

  //   constructor(name, age, chain = false) {
  //     super(name, age);
  //     this.chain = chain;
  //   }

  //   gnaw() {
  //     console.log(`${this.name} is gnawing a bone`);
  //   }

  //   speak() {
  //     console.log(`Wow, wow, wow`);
  //   }
  // }

  // let cat = new Cat("mosh");
  // cat.walk();
  // cat.sleep();

  // let dog = new Dog("Rex", 2, true);

  // dog.gnaw();

  // let animals = [dog, cat];
  // animals.forEach((animal) => {
  //   animal.speak();
  // });

  class Ovqat {
    nomi;
    maxsulotlar = [];
    qozonquyilganmi = false;
    gazYoqilganmi = false;
    constructor(nomi) {
      this.nomi = nomi;
    }

    qozonniQuyish() {
      console.log("Qozon qo'yildi");
      this.qozonquyilganmi = true;
    }

    gazniYoqish() {
      if (!this.qozonquyilganmi) {
        console.log("Avval qozonni qo'ying");
        return;
      }
      console.log("Gaz yoqildi");
      this.gazYoqilganmi = true;
    }
  }

  class Osh extends Ovqat {
    mahsulotSolish(maxsulot) {
      if (!this.gazniYoqish) {
        console.log("Avval gazni yoqing!");
        return;
      }

      console.log(`Qozonga ${maxsulot} solindi`);
      this.maxsulotlar.push(maxsulot);
    }

    finish() {
      console.log(
        `${this.nomi} tayyorlash uchun qozonga ${this.maxsulotlar}lar ketma ketlikda solinadi va 1.5 soat da ${this.nomi} tayyor bo'ladi`
      );
    }
  }

  let osh = new Osh("Osh");

  osh.gazniYoqish();
  osh.qozonniQuyish();
  osh.mahsulotSolish("yog'");
  osh.mahsulotSolish("piyoz");
  osh.mahsulotSolish("go'sht");
  osh.mahsulotSolish("sabzi");
  osh.mahsulotSolish("ziravorlar va tabga ko'ra tuz");
  osh.mahsulotSolish("suv");
  osh.mahsulotSolish("guruch");
  osh.finish();
  console.log(osh.maxsulotlar);
});
