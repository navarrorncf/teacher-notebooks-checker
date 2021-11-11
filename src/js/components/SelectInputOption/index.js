const SelectInputOption = (label, value) => {
  if (!value) value = label;

  const option = document.createElement("option");
  option.value = value;
  option.innerText = label;

  return option;
};

export default SelectInputOption;
