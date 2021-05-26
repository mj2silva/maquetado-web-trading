export const getStudents = async() => {
  const students = [
    'María',
    'José',
    'Pablo',
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(students), 3000);
  });
};

export const saveStudent = async(student) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(
      `El estudiante ${student}, fue guardado exitosamente en ningún lado ;)`
    ), 3000);
  });
}
