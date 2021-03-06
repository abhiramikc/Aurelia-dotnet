using project.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.src.Interface
{
  public interface IStudent
  {
    IEnumerable<StudentModel> GetStudents();
    //void AddStudent(StudentModel student);
    void DeleteStudent(StudentModel student);
    void UpdateStudent(StudentModel student);

    string AddStudent(StudentModel student);
  }
}
