const fs = require('fs');
const path = require('path');

// Map from in-game-name -> image filename without extension
const map = {
    "diesel-locomotive" : "locomotive",
    "heat-boiler": "heat-exchanger",
    "rocket-structure": "low-density-structure"
};

fs.writeFileSync('css/images.css', fs.readdirSync('./images').map(img => {
    const baseName = path.basename(img, '.png');
    return `p.${map[baseName] || baseName} { background:url("../images/${img}"); }`;
}).join('\r\n'), 'utf-8');
