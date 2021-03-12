using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using project.Models;
using project.src.Interface;
using project.src.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Controllers
{
  [Route("api/student")]
  public class StudentController : Controller
  {
    private readonly IStudent studentrepository;

    public StudentController(IStudent student)
    {
      studentrepository = student;
    }

    // GET: StudentController
    [HttpGet("All")]
    public IActionResult All()
    {
      IEnumerable<StudentModel> model = studentrepository.GetStudents().Select(s => new StudentModel
      {
        StuId=s.StuId,
        Name=s.Name,
        Department=s.Department
      });
      return new JsonResult(model);

      
    }

    // POST: StudentController/Create
    [HttpPost("AddStudent")]
    public ActionResult AddStudent([FromBody] StudentModel student)
    {
      studentrepository.AddStudent(student);
      return Ok();
    }
    [HttpDelete("DeleteStu")]
    public ActionResult DeleteStu([FromBody] StudentModel student)
    {
      studentrepository.DeleteStudent(student);
      return Ok();
    }
    [HttpPut("UpdateStu")]
    public ActionResult UpdateStu([FromBody] StudentModel student)
    {
      studentrepository.UpdateStudent(student);
      return Ok();
    }

    // POST: StudentController/Edit/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Edit(int id, IFormCollection collection)
    {
      return Ok();
    }

    // GET: StudentController/Delete/5
    public ActionResult Delete(int id)
    {
      return View();
    }

    // POST: StudentController/Delete/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Delete(int id, IFormCollection collection)
    {
      return Ok();
    }
  }
}
