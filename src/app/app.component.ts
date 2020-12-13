import { Component, OnInit } from '@angular/core';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  emp=[]
  
 

constructor(private service:EmpService)
{}

ngOnInit(): void {
  this.service.getEmp().subscribe(response=>{
    if(response['status']=='success')
    {
       this.emp=response['data']
    }else
    {
      alert('error')
    }
  })
}
  
}
