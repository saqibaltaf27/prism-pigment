function mixColors(ratios) {
    let total = 0;
    let r = 0, g = 0, b = 0;

    for (let key in ratios) {
        const ratio = ratios[key];
        if(ratio <= 0) continue;

        const pigment = PIGMENTS[key];
        if(!pigment) continue;

        total += ratio;
        r += pigment.rgb[0] * ratio;
        g += pigment.rgb[1] * ratio;
        b += pigment.rgb[2] * ratio;
    }

    if (total === 0) return [255, 255, 255];

    return [
        Math.round(r / total),
        Math.round(g / total),
        Math.round(b / total)
    ];
}