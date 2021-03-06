using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace project.Models
{
  public class StudentModel
  {
    [Key]
    public int? StuId { get; set; }
    public string Name { get; set; }
    public string Department { get; set; }
  }
}
