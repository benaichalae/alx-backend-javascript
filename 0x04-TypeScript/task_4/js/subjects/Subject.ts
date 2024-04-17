namespace Subjects {
  export class Subject {
    private teacher: Subjects.Teacher;

    public setTeacher(teacher: Subjects.Teacher): void {
      this.teacher = teacher;
    }
  }
}

export default Subjects;
