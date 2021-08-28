const red = "#FF5D5B";
const orange = "#F87443";
const yellow = "#FFB001";
const green = "#83C853";
const blue = "#27B7D9";
const purple = "#B660E5";
const gray = "#A8A8A8";

function Colors(name) {
  return name === "red"
    ? red
    : name === "orange"
    ? orange
    : name === "yellow"
    ? yellow
    : name === "green"
    ? green
    : name === "blue"
    ? blue
    : name === "purple"
    ? purple
    : name === "gray"
    ? gray
    : "#000";
}

export default Colors;
