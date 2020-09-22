"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Power = exports.Energy = exports.Time = exports.Quantity = exports.Frequency = exports.Distance = void 0;
/**
 * A distance as measured in meters.
 * One meter is also 1 tile.
 */
var Distance = /** @class */ (function () {
    function Distance(_meters) {
        this._meters = _meters;
    }
    Distance.fromMeters = function (n) {
        return new Distance(n);
    };
    Object.defineProperty(Distance.prototype, "meters", {
        get: function () {
            return this._meters;
        },
        enumerable: false,
        configurable: true
    });
    Distance.prototype.add = function (n) {
        return Distance.fromMeters(n.meters + this.meters);
    };
    Distance.prototype.times = function (n) {
        return Distance.fromMeters(n + this.meters);
    };
    return Distance;
}());
exports.Distance = Distance;
/**
 * How often something happens.
 * Measured in counts per given unit of time; this is not automatically reduced
 */
var Frequency = /** @class */ (function () {
    function Frequency(_count, _interval) {
        this._count = _count;
        this._interval = _interval;
    }
    Frequency.perTick = function (count) {
        return new Frequency(count, Time.fromTicks(1));
    };
    Frequency.perSecond = function (count) {
        return new Frequency(count, Time.fromSeconds(1));
    };
    Frequency.perMinute = function (count) {
        return new Frequency(count, Time.fromMinutes(1));
    };
    Object.defineProperty(Frequency.prototype, "perTick", {
        get: function () {
            return this._count / this._interval.ticks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Frequency.prototype, "perSecond", {
        get: function () {
            return this._count / this._interval.seconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Frequency.prototype, "perMinute", {
        get: function () {
            return this._count / this._interval.minutes;
        },
        enumerable: false,
        configurable: true
    });
    return Frequency;
}());
exports.Frequency = Frequency;
var Quantity = /** @class */ (function () {
    function Quantity(_thing, _count) {
        this._thing = _thing;
        this._count = _count;
    }
    Quantity.of = function (thing, count) {
        return new Quantity(thing, count);
    };
    return Quantity;
}());
exports.Quantity = Quantity;
/**
 * An interval of time, measured natively in ticks.
 * There are 60 ticks per second
 */
var Time = /** @class */ (function () {
    function Time(_ticks) {
        this._ticks = _ticks;
    }
    Time.fromTicks = function (n) {
        return new Time(n);
    };
    Time.fromSeconds = function (n) {
        return new Time(n * 60);
    };
    Time.fromMinutes = function (n) {
        return new Time(n * 60 * 60);
    };
    Object.defineProperty(Time.prototype, "ticks", {
        get: function () {
            return this._ticks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "seconds", {
        get: function () {
            return this._ticks / 60;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "minutes", {
        get: function () {
            return this._ticks / (60 * 60);
        },
        enumerable: false,
        configurable: true
    });
    return Time;
}());
exports.Time = Time;
/**
 * An amount of energy, measure natively in joules.
 */
var Energy = /** @class */ (function () {
    function Energy(_joules) {
        this._joules = _joules;
    }
    Energy.fromJoules = function (joules) {
        return new Energy(joules);
    };
    Object.defineProperty(Energy.prototype, "joules", {
        get: function () {
            return this._joules;
        },
        enumerable: false,
        configurable: true
    });
    Energy.prototype.getPower = function (time) {
        return Power.fromWatts(this.joules / time.seconds);
    };
    return Energy;
}());
exports.Energy = Energy;
/**
 * An amount of power, measure natively in watts.
 */
var Power = /** @class */ (function () {
    function Power(_watts) {
        this._watts = _watts;
    }
    Power.fromWatts = function (watts) {
        return new Power(watts);
    };
    Object.defineProperty(Power.prototype, "watts", {
        get: function () {
            return this._watts;
        },
        enumerable: false,
        configurable: true
    });
    return Power;
}());
exports.Power = Power;
