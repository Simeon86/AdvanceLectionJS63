export function greetUser(name) {
    alert(`Hello!`)
}

export function greetUser1(name) {
    alert(`Hello, ${name}!`)
}

export function goodbyeUser(name) {
    alert(`Goodbye, ${name}!`)
}

export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default class User {
    constructor(name){
        this.name = name
    }
}


// export { greetUser, greetUser1, goodbyeUser, days, User}
    