# Combat & Defense

## Gun Turret Lethality

These tables assume you upgrade bullet damage and turret damage to the same level (this is always optimal).

At max speed upgrade, Gun Turrets shoot 15 rounds per second.

### Shots to Kill: {uranium-rounds-magazine}

Uranium rounds are the most powerful.
One-shotting a Behemoth Biter requires level 23, so research levels between 18 and 22 get you no defensive advantage if you're using this kind of ammo in your turret.

```f
var enemies = entities.filter(e => e.max_health > 0 && /spitter|biter/.test(e.name) && e.type === "unit" as any);
enemies.sort((a, b) => a.max_health - b.max_health);

function calculateDamage(damageType: string, amount: number, resistances: any) {
	if (resistances === null) return amount;
	if (damageType in resistances) {
		let D = amount, R = resistances[damageType].decrease, P = resistances[damageType].percent;
		if (R + 1 < D) {
			return (D - R) * (1 - P);
		} else if(D > 1) {
			return (1 - P) / (R - D + 2);
		} else {
			return (1 - P) / (R + 1);
		}
	}
	return amount;
}

function bulletBonus(level: number) {
	switch(level) {
		case 0: return 1.0;
		case 1: return 1.1;
		case 2: return 1.2;
		case 3: return 1.4;
		case 4: return 1.6;
		case 5: return 1.8;
		case 6: return 2.2;
		default: return 2.2 + (0.4 * (level - 6))
	}
}

function turretBonus(level: number) {
	switch(level) {
		case 0: return 1.0;
		case 1: return 1.1;
		case 2: return 1.2;
		case 3: return 1.4;
		case 4: return 1.6;
		case 5: return 1.8;
		case 6: return 2.2;
		default: return 2.2 + (0.7 * (level - 6))
	}
}

const ammos: [string, number][] = [["firearm-magazine", 5], ["piercing-rounds-magazine", 8],["uranium-rounds-magazine", 24]];

const rows = enemies;
tables.basic({
	origin: "Level",
	rows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 23],
	rowHeader: r => r === 18 ? "" : r,
	cols: enemies,
	colHeader: c => `{${c.name}}`,
	cell: (r, c) => {
		if (r === 18) return "";
		const damage = bulletBonus(r) * turretBonus(r) * 24;
		const hits = Math.ceil(c.max_health / calculateDamage("laser", damage, c.resistances));
		return `${hits}`;
	}
});
```

## Laser Turret Lethality
```f
var enemies = entities.filter(e => e.max_health > 0 && /spitter|biter/.test(e.name) && e.type === "unit" as any);
enemies.sort((a, b) => a.max_health - b.max_health);
declare var calculateDamage;

function laserBonus(level: number) {
	switch(level) {
		case 0: return 1.0;
		case 1: return 1.1;
		case 2: return 1.2;
		case 3: return 1.5;
		case 4: return 1.8;
		case 5: return 2.1;
		case 6: return 2.6;
		case 7: return 3.3;
		default: return 3.2 + (0.7 * (level - 7))
	}
}

tables.basic({
	origin: "Level",
	rows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27],
	rowHeader: r => r,
	cols: enemies,
	colHeader: c => `{${c.name}}`,
	cell: (r, c) => {
		const damage = laserBonus(r) * 20;
		const hits = Math.ceil(c.max_health / calculateDamage("laser", damage, c.resistances));
		return `${hits}`;
	}
});
```