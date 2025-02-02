const convertToCSS = (styleObject) => {
    return Object.entries(styleObject)
      .filter(([key]) => key !== "content") // Remove `content` property
      .map(([key, value]) => {
        // Convert camelCase to kebab-case (including vendor prefixes)
        const kebabKey = key
          .replace(/([A-Z])/g, "-$1")
          .replace(/^ms-/, "-ms-") // Fix for IE's "ms" prefix
          .toLowerCase();
  
        // Append 'px' to numeric values (except for known unitless properties)
        const unitlessProperties = new Set([
          "opacity", "z-index", "line-height", "flex", "order", "font-weight"
        ]);
        if (typeof value === "number" && !unitlessProperties.has(kebabKey)) {
          value = `${value}px`;
        }
  
        return `${kebabKey}: ${value};`;
      })
      .join("\n");
  };
  export default convertToCSS