import { HttpClient } from 'aurelia-fetch-client';
import { Endpoint } from 'aurelia-api';
import { inject } from 'aurelia-framework';
@inject(Endpoint.of('stud'))
export class StudentlistApi {
  public studentapi;
  httpClient: any;
  public studentData: any;
  department = ["CS", "EC", "MECH", "EEE"];
  sid = '';
  name = '';
  selectedBox = '';
  isEdit = false;
  constructor(studentapi) {
    this.studentapi = studentapi;
    console.log("this.studentapi", this.studentapi);

    this.httpClient = new HttpClient();
    this.httpClient.fetch('https://localhost:44330/api/student/All').then(response => response.json()).then(data => {
      this.studentData = data;
      console.log(data);

    });

  }

  submit() {
    var myuser = { stuid: this.sid, name: this.name, department: this.selectedBox }
    console.log(myuser);
    this.studentapi.post('AddStudent', myuser)
      .then(response => {
        alert(`saved`);
        console.log("saved data", response)
      });
  }


  EditStudent(std) {
    this.isEdit = true;
    console.log(std);
    this.sid = std.stuId;
    this.name = std.name;
    this.selectedBox = std.department;
    // var myuser = { stuid: this.sid, name: this.name, department: this.selectedBox }
  }
  UpdateStudent() {
    this.isEdit = false;
    var updatedval = { stuid: this.sid, name: this.name, department: this.selectedBox }
    console.log("updated values", updatedval);
    console.log("Update clicked");
    this.studentapi.post('UpdateStu', updatedval)
      .then(response => {
        alert("updated");
      })
      
  }

}
