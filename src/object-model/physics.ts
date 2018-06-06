/**
 * A distance as measured in meters.
 * One meter is also 1 tile.
 */
export class Distance {
    constructor(private _meters: number) { }
    static fromMeters(n: number) {
        return new Distance(n);
    }

    get meters() {
        return this._meters;
    }

    add(n: Distance) {
        return Distance.fromMeters(n.meters + this.meters);
    }

    times(n: number) {
        return Distance.fromMeters(n + this.meters);
    }
}

export class Speed {
    
}

export class Frequency {

}

/**
 * An interval of time, measured natively in ticks.
 * There are 60 ticks per second
 */
export class Time {
    private constructor(private _ticks: number) { }
    static fromTicks(n: number) {
        return new Time(n);
    }
    static fromSeconds(n: number) {
        return new Time(n * 60);
    }

    get ticks() {
        return this._ticks;
    }
    get seconds() {
        return this._ticks / 60;
    }
}

/**
 * An amount of energy, measure natively in joules.
 */
export class Energy {
    private constructor(private _joules: number) { }

    get joules() {
        return this._joules;
    }
}

/**
 * An amount of power, measure natively in watts.
 */
export class Power {
    private constructor(private _watts: number) { }
    get watts() {
        return 0;
    }
}

