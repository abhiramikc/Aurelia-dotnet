import { HttpClient } from 'aurelia-fetch-client';
import {computedFrom} from 'aurelia-framework';
export class Welcome {
  public heading = 'Welcome to the Aurelia Navigation App!';
  public firstName = 'John';
  public lastName = 'Doe';
  httpClient:any;
  databody:any;
  id:any;
  title:string;
  private previousValue: string = this.fullName;
  constructor()
  {
    this.httpClient=new HttpClient();
    var x=this.httpClient.fetch('https://jsonplaceholder.typicode.com/posts/2').then(response => response.json()).then(data=>{
      console.log(data);
     this.databody=data.body;
     this.id=data.id;
     this.title=data.title;
    })

    
  

  
  }
  // Getters can't be directly observed, so they must be dirty checked.
  // However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  @computedFrom('firstName', 'lastName')
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  public canDeactivate(): boolean | undefined {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  public toView(value: string): string {
    return value && value.toUpperCase();
  }
  
}
