export type RGB = [number, number, number];

// All categories stay within the warm burgundy/rose palette — different tones, same family.
const categoryColorMap: Record<string, { primary: RGB; secondary: RGB; accent: RGB }> = {
  "saas":          { primary: [141,  2,  31], secondary: [192, 112, 112], accent: [255, 179, 178] },
  "ai":            { primary: [141,  2,  31], secondary: [192, 112, 112], accent: [255, 179, 178] },
  "e-commerce":    { primary: [160,  40,  40], secondary: [210, 130, 110], accent: [255, 200, 180] },
  "communication": { primary: [120,  20,  50], secondary: [190, 100, 120], accent: [240, 170, 180] },
  "energy":        { primary: [100,  30,  30], secondary: [180,  90,  80], accent: [230, 160, 150] },
  "greentech":     { primary: [100,  30,  30], secondary: [180,  90,  80], accent: [230, 160, 150] },
  "hr tech":       { primary: [155,  30,  60], secondary: [210, 110, 130], accent: [250, 180, 190] },
  "recruitment":   { primary: [155,  30,  60], secondary: [210, 110, 130], accent: [250, 180, 190] },
  "beauty":        { primary: [170,  50,  80], secondary: [220, 130, 150], accent: [255, 200, 210] },
  "salon":         { primary: [170,  50,  80], secondary: [220, 130, 150], accent: [255, 200, 210] },
  "marketing":     { primary: [150,  60,  30], secondary: [210, 140, 100], accent: [250, 200, 170] },
  "entertainment": { primary: [130,  20,  50], secondary: [200, 100, 120], accent: [245, 170, 185] },
  "marketplace":   { primary: [130,  20,  50], secondary: [200, 100, 120], accent: [245, 170, 185] },
  "productivity":  { primary: [141,   2,  31], secondary: [192, 112, 112], accent: [255, 179, 178] },
  "edtech":        { primary: [110,  25,  45], secondary: [185,  95, 115], accent: [235, 165, 175] },
};

export function getCategoryColors(category: string) {
  const lower = category.toLowerCase();
  for (const [key, colors] of Object.entries(categoryColorMap)) {
    if (lower.includes(key)) return colors;
  }
  return { primary: [141, 2, 31] as RGB, secondary: [192, 112, 112] as RGB, accent: [255, 179, 178] as RGB };
}
