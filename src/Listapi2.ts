import { Endpoint } from 'aurelia-api';
import { HttpClient } from 'aurelia-fetch-client';
import { inject, observable } from 'aurelia-framework';

@inject(Endpoint.of('stud'))
export class ListAllApi {
  public studentapi;
  httpClient: any;

  @observable()
  public studentData;

  constructor(studentapi) {
    this.studentapi = studentapi;
    console.log("this.studentapi", this.studentapi);
    this.httpClient = new HttpClient();
    this.getAll();
    //this.httpClient.fetch('https://localhost:44330/api/student/All').then(response => response.json()).then(data => {
    //  this.studentData = data;
    //  console.log(data);

    //});

  }
  //DeleteStudent(std: any) {
  //  var myuser = { stuid: std.stuId, name: std.name, department: std.department }
  //  console.log("deletedata", myuser);

  //  this.httpClient.fetch('https://localhost:44330/api/student/DeleteStu', {
  //    method: "DELETE",
  //    body: JSON.stringify(myuser)
  //  })
  //    .then(response => response.json())
  //    .then(data => {
  //      console.log(data);
  //    });
  //  this.getAll();
  //}
  DeleteStudent(std: any) {
    var myuser = { stuid: std.stuId, name: std.name, department: std.department }
    console.log("deletedata", myuser);
    this.studentapi.post('DeleteStu', std)
      .then(response => {
        alert("deleted.")
        this.getAll();
      })

  }

  getAll() {
    this.studentapi.find('All').then(response => {
      console.log("responsee get", response);
      this.studentData = response;
    })
  }
}
