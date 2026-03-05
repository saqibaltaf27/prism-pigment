function applyBaseTone(rgb, level) {
    const baseLevels = {
        10: [255, 255, 255],
        8: [255, 230, 180],
        6: [180, 140, 100]
    };

    const base = baseLevels[level];

    return [
        Math.round((rgb[0] * 0.7) + (base[0] * 0.3)),
        Math.round((rgb[1] * 0.7) + (base[1] * 0.3)),
        Math.round((rgb[2] * 0.7) + (base[2] * 0.3))
    ];
}