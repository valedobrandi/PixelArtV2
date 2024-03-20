
export const colors = [
    { dark: "#0D47A1", medium: "#1976D2", light: "#42A5F5" }, // Blue
    { dark: "#00838F", medium: "#0097A7", light: "#00ACC1" }, // Cyan
    { dark: "#C62828", medium: "#E53935", light: "#EF5350" }, // Red
    { dark: "#1B5E20", medium: "#2E7D32", light: "#388E3C" }, // Green
    { dark: "#FF8F00", medium: "#FFA000", light: "#FFB300" }, // Amber
    { dark: "#5D4037", medium: "#6D4C41", light: "#795548" }, // Brown
    { dark: "#AD1457", medium: "#D81B60", light: "#E91E63" }, // Pink
    { dark: "#6A1B9A", medium: "#8E24AA", light: "#AB47BC" }, // Purple
    { dark: "#E65100", medium: "#F4511E", light: "#FF5722" }, // Deep Orange
    { dark: "#BF360C", medium: "#D84315", light: "#EF6C00" }, // Orange
    { dark: "#827717", medium: "#AFB42B", light: "#CDDC39" }, // Lime
    { dark: "#263238", medium: "#37474F", light: "#455A64" }, // Blue Grey
    { dark: "#37474F", medium: "#546E7A", light: "#607D8B" }, // Grey
    { dark: "#311B92", medium: "#4527A0", light: "#512DA8" }  // Deep Purple
  ];

  function handlePaint(x, y) {
    // Determine the size of the area to paint
    const size = 2; // Increase this to paint a larger area

    // Paint pixels in a square area around (x, y)
    for (let i = x - size; i <= x + size; i++) {
        for (let j = y - size; j <= y + size; j++) {
            // Check if the pixel is within the grid
            if (i >= 0 && i < gridWidth && j >= 0 && j < gridHeight) {
                // Paint the pixel
                paintPixel(i, j);
            }
        }
    }
}