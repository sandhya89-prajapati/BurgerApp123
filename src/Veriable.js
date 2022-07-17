//ES6
class Human {

    constructor() {
        this.gender = 'male'
    }

    printGender() {
        console.log(this.gender)
    }
}

class Person extends Human {

    constructor() {
        super()
        this.name = 'Alia'
        this.gender = 'female'
    }
}