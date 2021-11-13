import "./styles.css";

const VerticalGroup = (children) => {
  const VerticalGroup = document.createElement("div");
  VerticalGroup.classList.add("vertical-group", "column");
  VerticalGroup.append(...children);

  return VerticalGroup;
};

export default VerticalGroup;
