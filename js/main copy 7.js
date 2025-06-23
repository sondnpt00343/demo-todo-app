// Constructor function
function Character(name, hp, atk) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.attack = (target) => {
        console.log(this);
        // target.hp -= this.atk;
    };
    this.isAlive = () => {
        return this.hp > 0;
    };
}

// #x00hn
const tom = new Character("Tom", 1000, 100);
const jerry = new Character("Jerry", 5000, 10);

// #x00hn
const tomCopy = tom;

tom.address = "TP. HCM";

console.log(tomCopy);
