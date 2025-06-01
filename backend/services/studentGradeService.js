const Grade = require("../models/gradeModel"); // adjust path as needed

const createGrade = async ({ studentId, year, semester, subjects }) => {
  const newGrade = new Grade({
    studentId,
    year,
    semester,
    subjects: subjects || [],
  });
  return await newGrade.save();
};

const getGradesByStudentId = async (studentId) => {
  return await Grade.find({ studentId });
};

const getGradeById = async (id) => {
  return await Grade.findById(id);
};

/**
 * Update or add subject grades within a grade document.
 * If subject exists, update its grades, else add new subject.
 */
const updateGrade = async (id, { year, semester, subjectName, grades }) => {
  const grade = await Grade.findById(id);
  if (!grade) throw new Error("Grade not found");

  // Optionally update year and semester if passed and different
  if (year && grade.year !== year) grade.year = year;
  if (semester && grade.semester !== semester) grade.semester = semester;

  // Find subject index
  const subjectIndex = grade.subjects.findIndex(
    (subj) => subj.name === subjectName
  );

  if (subjectIndex !== -1) {
    // Update existing subject grades
    grade.subjects[subjectIndex].grades = grades;
  } else {
    // Add new subject with grades
    grade.subjects.push({ name: subjectName, grades });
  }

  return await grade.save();
};

const deleteGrade = async (id) => {
  return await Grade.findByIdAndDelete(id);
};

module.exports = {
  createGrade,
  getGradesByStudentId,
  getGradeById,
  updateGrade,
  deleteGrade,
};
