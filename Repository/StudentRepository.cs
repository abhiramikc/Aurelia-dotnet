using Dapper;
using Microsoft.Data.Sqlite;
using Microsoft.Extensions.Configuration;
using project.Models;
using project.src.Interface;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace project.src.Repository
{
  public class StudentRepository : IStudent
  {
    private IConfiguration _configuration { get; set; }
    //private List<StudentModel> allstudents;
    IEnumerable<StudentModel> allstudents2;


    public StudentRepository(IConfiguration config)
    {
      _configuration = config;
    }

    public IDbConnection Connection
    {
      get
      {
        return new SqliteConnection(@"Data source =./Database/Demo.db");
        
      }
    }
    public IEnumerable<StudentModel> GetStudents()
    {
      //throw new NotImplementedException();
      using (var dbConnection=Connection)
      {
        string sQuery = "SELECT * FROM Student";
        dbConnection.Open();
        allstudents2 = dbConnection.Query<StudentModel>(sQuery);
        dbConnection.Close();
      }
      return allstudents2;
    }

    public void AddStudent(StudentModel student)
    {
      //throw new NotImplementedException();
      using (var dbConnection=Connection)
      {
        string sQuery = "INSERT INTO Student (StuId,Name,Department) Values(@StuId,@Name,@Department)";
        dbConnection.Open();
        dbConnection.Execute(sQuery,new { 
         StuId=student.StuId,
         Name=student.Name,
         Department=student.Department
        });
        dbConnection.Close();
      }
    }

    public void DeleteStudent(StudentModel student)
    {
      using (var dbConnection=Connection)
      {
        string dQuery = "DELETE FROM Student where StuId=@StuId";
        dbConnection.Open();
        dbConnection.Execute(dQuery, new
        {
          StuId = student.StuId
        });
        dbConnection.Close();
      }
    }

    public void UpdateStudent(StudentModel student)
    {
      using(var dbConnection=Connection)
      {
        string uQuery = "UPDATE Student SET Name=@Name,Department=@Department where StuId=@StuId";
        dbConnection.Open();
        dbConnection.Execute(uQuery, new
        {
          StuId = student.StuId,
          Name = student.Name,
          Department = student.Department
        });
        dbConnection.Close();
      }
    }
  }
}
