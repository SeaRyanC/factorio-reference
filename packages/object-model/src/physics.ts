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

/**
 * How often something happens.
 * Measured in counts per given unit of time; this is not automatically reduced
 */
export class Frequency {
    private constructor(private _count: number, private _interval: Time) { }

    static perTick(count: number) {
        return new Frequency(count, Time.fromTicks(1));
    }
    static perSecond(count: number) {
        return new Frequency(count, Time.fromSeconds(1));
    }
    static perMinute(count: number) {
        return new Frequency(count, Time.fromMinutes(1));
    }

    get perTick() {
        return this._count / this._interval.ticks;
    }
    get perSecond() {
        return this._count / this._interval.seconds;
    }
    get perMinute() {
        return this._count / this._interval.minutes;
    }
}

export class Quantity<T> {
    private constructor(private _thing: T, private _count: number) { }

    static of<T>(thing: T, count: number) {
        return new Quantity(thing, count);
    }
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
    static fromMinutes(n: number) {
        return new Time(n * 60 * 60);
    }

    get ticks() {
        return this._ticks;
    }
    get seconds() {
        return this._ticks / 60;
    }
    get minutes() {
        return this._ticks / (60 * 60);
    }
}

/**
 * An amount of energy, measure natively in joules.
 */
export class Energy {
    private constructor(private _joules: number) { }

    static fromJoules(joules: number) {
        return new Energy(joules);
    }

    get joules() {
        return this._joules;
    }

    getPower(time: Time) {
        return Power.fromWatts(this.joules / time.seconds);
    }
}

/**
 * An amount of power, measure natively in watts.
 */
export class Power {
    private constructor(private _watts: number) { }

    static fromWatts(watts: number) {
        return new Power(watts);
    }

    get watts() {
        return this._watts;
    }
}

