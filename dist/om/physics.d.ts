/**
 * A distance as measured in meters.
 * One meter is also 1 tile.
 */
export declare class Distance {
    private _meters;
    constructor(_meters: number);
    static fromMeters(n: number): Distance;
    get meters(): number;
    add(n: Distance): Distance;
    times(n: number): Distance;
}
/**
 * How often something happens.
 * Measured in counts per given unit of time; this is not automatically reduced
 */
export declare class Frequency {
    private _count;
    private _interval;
    private constructor();
    static perTick(count: number): Frequency;
    static perSecond(count: number): Frequency;
    static perMinute(count: number): Frequency;
    get perTick(): number;
    get perSecond(): number;
    get perMinute(): number;
}
export declare class Quantity<T> {
    private _thing;
    private _count;
    private constructor();
    static of<T>(thing: T, count: number): Quantity<T>;
}
/**
 * An interval of time, measured natively in ticks.
 * There are 60 ticks per second
 */
export declare class Time {
    private _ticks;
    private constructor();
    static fromTicks(n: number): Time;
    static fromSeconds(n: number): Time;
    static fromMinutes(n: number): Time;
    get ticks(): number;
    get seconds(): number;
    get minutes(): number;
}
/**
 * An amount of energy, measure natively in joules.
 */
export declare class Energy {
    private _joules;
    private constructor();
    static fromJoules(joules: number): Energy;
    get joules(): number;
    getPower(time: Time): Power;
}
/**
 * An amount of power, measure natively in watts.
 */
export declare class Power {
    private _watts;
    private constructor();
    static fromWatts(watts: number): Power;
    get watts(): number;
}
