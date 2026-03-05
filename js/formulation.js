function generateFormulation(ratios) {
    const summary = [];

    let total = Object.values(ratios).reduce((a, b) => a + b, 0);
    for(let key in ratios) {
        if(ratios[key] > 0) {
            const percent = ((ratios[key] / total) * 100).toFixed(0);
            summary.push(`${percent}% ${PIGMENTS[key].name}`);
        }
    }

    return summary.join(", ");
}