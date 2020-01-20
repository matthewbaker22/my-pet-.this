const myPet = {
    name: "Luna",
    species: "Black Lab",
    nicknames: ["Lune", "Big Girl", "Girly"],
    age: 2,
    favoriteToys: [],
    play: function (toy) {
        if (toy.includes("squeaky")) {
            this.favoriteToys.push(toy);
            window.alert(`${this.name} loves her ${this.favoriteToys} toy!`)
        } else {
            window.alert(`${this.name} doesn't like her ${toy} toy!`)
        }
    },
    sniff: function (odor) {
        window.alert(`${this.name} is always sniffing the ${odor}.`)
    },
    bark: function (something) {
        window.alert(`${this.name} barks when she needs to ${something}.`)
    },
    eat: function (food) {
        window.alert(`${this.name}'s favorite food is ${food}.`)
    }
}

myPet.sniff("grass")
myPet.bark("go outside")
myPet.eat("human food")
myPet.play("squeaky santa")
myPet.play("snowman")
