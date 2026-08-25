class ParkingSystem {
    big = { cars: [], size: 0 }
    medium = { cars: [], size: 0 }
    small = { cars: [], size: 0 }
    constructor(big: number, medium: number, small: number) {
        this.big.size = big;
        this.medium.size = medium;
        this.small.size = small;
    }

    addCar(carType: number): boolean {
        const map = new Map([
            [1, this.big],
            [2, this.medium],
            [3, this.small]
        ]);
        const val = map.get(carType);
        if(val.cars.length >= val.size) return false;
        val.cars.push(carType);
        return true;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
