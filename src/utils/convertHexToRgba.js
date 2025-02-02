const hexToRgba = (hex,a) => {
    // Remove the # if present
    hex = hex.replace(/^#/, "");
  
    // Parse the r, g, b values
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };
  export default hexToRgba