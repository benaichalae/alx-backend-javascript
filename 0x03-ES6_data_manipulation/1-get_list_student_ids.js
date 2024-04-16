/**
 * Retrieves an array of student IDs from a list of student objects.
 * @param {Array} studentList - An array of student objects.
 * @returns {Array} - An array of student IDs.
 */
function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  return studentList.map((student) => student.id);
}

module.exports = getListStudentIds;
