
var success = 0;
var trials = 0;
var best = 0;
for(var i = 0; i < 10000000; i++) {
	var u235 = 0;
	for (var j = 0; j < 4100; j++) {
		if (Math.random() <= 0.003) {
			u235++;
		}
	}
	if (u235 >= 100) {
		success++;
	}
	if (u235 > best) {
		best = u235;
		console.log(`Got ${best} after ${trials} trials!`);
	}
	trials++;
}
