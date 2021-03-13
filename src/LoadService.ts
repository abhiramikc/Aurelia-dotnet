import { Endpoint } from 'aurelia-api';
import { HttpClient } from 'aurelia-fetch-client';
import { inject, observable } from 'aurelia-framework';
import { debug, error } from 'node:console';
@inject(Endpoint.of('stud'))
export class LoadService {
  public studentAPI;
  httpClient: any;

  @observable()
  stuData: any;
  stuid: any;
  name: any;
  department: any;
  constructor(studentapi) {
    this.studentAPI = studentapi;
    this.httpClient = new HttpClient();
    this.getAll();
    //console.log("serviec:",this.studentAPI);
  }

  test() {
    console.log("from service");
  }
  getAll() {
    
    this.studentAPI.find('All').then(response => {
      //console.log("responsee get", response);
      this.stuData = response;
      //console.log("studentdata in service", this.stuData)
      
      
    })
   
  }
  Addstudent(user) {
    console.log("Add student in service", user)
    this.studentAPI.post('AddStudent', user).then(response => {
      alert("Saved!!");
      console.log(response);
      
      this.getAll();
      return response;
    }).catch(error => {
      alert("Error occured while saving !!");
      console.log("error:", error);

    })
    }

 
  deletestudent(std: any) {
    console.log("service :del", std);
    this.studentAPI.post('DeleteStu', std).then(response => {
      console.log("deleted", response);
      alert("deleted!!");
      this.getAll();
    }).catch(err => {
      alert("Error occured while deleting");
      console.log(err);
    });

  }
  updatestudent(updatedata) {
    console.log("update data", updatedata)
    this.studentAPI.post('UpdateStu', updatedata).then(response => {
      console.log("updated", response);
      alert("updated succesfully!!");
      this.getAll();
    }).catch(error => {
      alert("Error while updating");
      console.log(error);
    });
  }


}
