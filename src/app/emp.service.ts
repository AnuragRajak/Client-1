import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  url="http://localhost:4000/emp"

  constructor(private http:HttpClient) { }
 
  getEmp()
{
  return this.http.get(this.url)
}

}


