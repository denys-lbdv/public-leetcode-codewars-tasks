export function countStudents(
  students: number[],
  sandwiches: number[],
): number {
  while (students.indexOf(sandwiches[0]) !== -1) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      let student: number = students.shift();
      students.push(student);
    }
  }
  return students.length;
}
