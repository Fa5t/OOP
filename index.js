class Airplane {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
        this.status = 'at the take-off site';
    }

    takeOffset() {
        this.status = 'takes off';
        console.log(`The plane ${name} takes off at a speed of ${this.speed}`);
    }

    landing() {
        this.status = 'in flight'
        console.log(`The plane ${name} is landing`);
    }
}

class MilitaryAirplane extends Airplane {
    constructor(name, speed) {
        super(name, speed);
    }

    attack() {
        this.status = 'attacking';
        console.log(`The plane ${name} is attacking at a maximum speed of ${this.speed}`);
    }
}

const TU154 = new Airplane('TU-154', '900 km/h');
const MIG31 = new MilitaryAirplane('MIG 31', '3400 km/h');

TU154.takeOffset();
MIG31.landing();
MIG31.attack();
