const person ={
    name : 'Kim',
    walk() {
        console.log(this);
    }
};

// person.walk();

//  bind methode est basé sur l'argument du bind
const walk = person.walk.bind(person);

walk();