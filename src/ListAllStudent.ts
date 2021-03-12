import { HttpClient } from 'aurelia-fetch-client';
export class ListAllStudent {
  httpClient: any;
  public studentData: any;
  constructor() {
    this.httpClient = new HttpClient();
    this.httpClient.fetch('https://localhost:44330/api/student/All').then(response => response.json()).then(data => {
      this.studentData = data;
      console.log(data);

    });
    
  }
  DeleteStudent(std: any) {
    console.log(std);
    console.log("name",std.name);
    var myuser = { stuid: std.stuId, name: std.name, department: std.department }
    console.log("deletedata",myuser);
    console.log("delete button clicked");

    this.httpClient.fetch('https://localhost:44330/api/student/DeleteStu', {
      method: "DELETE",
      body: JSON.stringify(myuser)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
    alert("Deleted");
    this.getAll();
  }

  getAll() {
    this.httpClient.fetch('https://localhost:44330/api/student/All').then(response => response.json()).then(data => {
      this.studentData = data;
      console.log(data);

    });
  }
}
