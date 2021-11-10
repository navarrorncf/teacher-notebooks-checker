export const getSemester = (bimester) =>
  `s${Math.ceil(parseInt(bimester) / 2)}`;
