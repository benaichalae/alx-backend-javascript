/**
 * Returns the sum of all student ids.
 * @param {Array} students - An array of student objects.
 * @returns {number} - The sum of all student ids.
 */
function getStudentIdsSum(students) {
    return students.reduce((sum, student) => sum + student.id, 0);
}

module.exports = getStudentIdsSum;
