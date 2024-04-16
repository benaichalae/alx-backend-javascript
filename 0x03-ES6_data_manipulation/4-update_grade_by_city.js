/**
 * Returns an array of students for a specific city with their updated grades.
 * @param {Array} students - An array of student objects.
 * @param {string} city - The city to filter by.
 * @param {Array} newGrades - An array of objects containing studentId and grade.
 * @returns {Array} - An array of student objects with updated grades.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (matchedGrade) {
        return { ...student, grade: matchedGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}

module.exports = updateStudentGradeByCity;
