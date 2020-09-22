<!-- Title: Factorio Reference: Basics -->

# Basics

## Belt Throughput

```ts
tables.basic({
	title: "Belt Throughput",
	description: "How many items can each belt transport?",
	cols: ["per second", "per minute"],
	rows: [om.getEntity("transport-belt"), om.getEntity("fast-transport-belt"), om.getEntity("express-transport-belt")],
	origin: "Belt",
	rowHeader: r => `{${r.name}}`,
	cell(r, c, ri, ci) {
		if (ci === 0) {
			return integer(r.belt_speed * 60 * 32);
		} else {
			return integer(r.belt_speed * 60 * 32 * 60);
		}
	}
});
```


```tsf
const orderedRecipes = recipes.slice();
orderedRecipes.sort((a, b) => order(cmp(a.group, b.group), cmp(a.order, b.order), cmp(a.name, b.name)));

function cmp(a, b) {
	return a > b ? 1 :
		a < b ? -1 : 0
}
function order(...args) {
	for (const o of args) {
		if (o !== 0) return o;
	}
}

tables.basic({
	rows: orderedRecipes,
	rowHeader: r => {
		const output = r.products[0];
		if (output.amount > 1) {
			return `{${r.name} x ${output.amount}}`;
		} else {
			return `{${r.name}}`;
		}
	},
	cols: ["Stack Size", "Time", "Ingredients", "Order"],
	origin: "Recipe",
	cell: (r, c, ri, ci) => {
		switch (ci) {
			case 0:
				const output = r.products[0];
				if (output.type === "item") {
					const p = om.getItem(output.name);
					if (p) {
     					return `{${r.name} x ${p.stack_size}}`;
					} else {
						return "?? " + output.name;
					}
				} else {
					return "N/A";
				}
			case 1:
				return r.time;
			case 2:
				const parts = r.ingredients.map(i => `{${i.item ? i.item.name : "?"} x ${i.amount}}`);
				return parts.join(" ");
			case 3:
				return r.group;
		}
	}
});
```

What is an {electronic-circuit} for? Is it for {science-pack-1} or {nuclear-reactor x 144}? 

What is an {electronic-circuit x200} ?

Neato~~!

## Inserter Throughput

# Recipes

This is a list of all recipes



## Landfills

```tsf
tables.basic({
	rows: [1, 5, 25, 50, 100, 500, 1000],
	cols: ["{stone}", "Trips", "Time"],
	origin: "Lake Size (Chunks)",
	cell: (r, c, ri, ci) => {
		switch (ci) {
			case 0:
				return r * 32 * 32 * 20;
			case 1:
				return r * 32 * 32 / (80 * 100);
			case 2:
				return r * 32 * 32 / (10 * 25 * 0.8);
		}
	}
});
```
