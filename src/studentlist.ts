import { HttpClient } from 'aurelia-fetch-client';

export class Studentlist {
  httpClient: any;
  public studentData: any;
  department = ["CS", "EC", "MECH", "EEE"];
  sid = '';
  name = '';
  selectedBox = '';
  isEdit = false;
  constructor() {
    this.httpClient = new HttpClient();
    this.httpClient.fetch('https://localhost:44330/api/student/All').then(response => response.json()).then(data => {
      this.studentData = data;
      console.log(data);

    });

  }

  submit() {
    var myuser = { stuid: this.sid, name: this.name, department:this.selectedBox }
    console.log(myuser);
    this.httpClient.fetch('https://localhost:44330/api/student/AddStudent', {
      method: "POST",
      body: JSON.stringify(myuser)
    })
      .then(response => response.json()).then(data => {
        alert(`saved`);
        console.log("saved data",data)
      });
    console.log("submitting");
    alert(`saved`);

  }


  EditStudent(std)
  {
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
    this.httpClient.fetch('https://localhost:44330/api/student/UpdateStu', {
      method: "PUT",
      body: JSON.stringify(updatedval)
    })
      .then(response => response.json())
      .then(data => {
        console.log("updare", data);
        alert("Succesfully updated");
      });
    alert("Succesfully updated");
  }

}
