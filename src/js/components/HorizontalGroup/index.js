import "./styles.css";

const HorizontalGroup = (children) => {
  const HorizontalGroup = document.createElement("div");
  HorizontalGroup.classList.add("horizontal-group");
  HorizontalGroup.append(...children);

  return HorizontalGroup;
};

export default HorizontalGroup;
