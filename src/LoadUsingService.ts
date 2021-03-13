import { LoadService } from 'LoadService';
import { inject, observable } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';


@inject(LoadService)
export class LoadUsingService {

  @observable()
  public loadservice: LoadService;

  @observable()
  public studentData;

  @observable()
  public deletedata;
  department = ["CS", "EC", "MECH", "EEE"];
  sid = '';
  name = '';
  selectedBox = '';
  isEdit = false;
  
  constructor(loadservice) {
    this.loadservice = loadservice;
    this.loadservice.getAll();
    
  }

  submit() {
    
    let x = <string>$('#sid').val();
    let vname = <string>$('#name').val();
    let sel = <string>$('#dropdown-box').val();
    if (x == '' || x === null) {
      document.getElementById('err1').innerHTML = "enter unique id ";
      return;
    }
    else {
      document.getElementById('err1').innerHTML = "";
    }
    
    if (vname == '' || vname == null) {
      document.getElementById('err2').innerHTML = "Enter name";
      return;
    }
    else {
      document.getElementById('err2').innerHTML = "";
    }
    
    if (sel == '' || sel == null) {
      document.getElementById('err3').innerHTML = "select the department";
      return;
    }
    else {
      document.getElementById('err3').innerHTML = "";
    }

    var myuser = { stuid: this.sid, name: this.name, department: this.selectedBox }
    console.log("submit data",myuser);
    this.loadservice.Addstudent(myuser);
  }

  DeleteStudent(std) {
    console.log("Delete", std);
    this.deletedata = std;
    console.log("deletedata", this.deletedata);
    this.loadservice.deletestudent(std);

  }
  EditStudent(std) {
    this.isEdit = true;
    this.sid = std.stuId;
    this.name = std.name;
    this.selectedBox = std.department;
  }
  UpdateStudent()
  {
    var myuser = { stuid: this.sid, name: this.name, department: this.selectedBox }
    console.log("submit data", myuser);
    this.loadservice.updatestudent(myuser);
  }
}
