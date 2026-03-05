# Color Mixing Logic - Prism & Pigment

The color mixer simulates pigment blending using weighted RGB averaging.

Each pigment contains a base RGB value.

## Example:
 - Electric Blue = RGB(0, 90, 255)
 - Hot Pink = RGB(255, 0, 120)

When pigments are mixed, their RGB values are multiplied by the slider ratio.

### Example:
- Blue(60)
- Pink(40)

### Result:
- R = (0*60 + 255*40)/100
- G = (90*60 + 0*40)/100
- B = (255*60 + 120*40)/100

This produces a purple tone.

To simulate hair depth influence, the result is blended with a base tone representing the starting hair level.

## Hair Level Base Tones:

- Level 10 Platinum -> RGB(255, 255, 255)
- Level 8 Blonde => RGB(255,230,180)
- Level 6 Light Brown => RGB(180,140,100)

### Final color = 70% Mixed Pigment, 30% Base Hair Tone

This approximates the effect of pigment dilution over natural hair color.

The "Clear Diluter" pigment acts as white pigment which lightens saturation.

This approach provides visually realistic results suitable for consultation purposes.
