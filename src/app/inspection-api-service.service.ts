import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiServiceService {

  readonly inspectionAPIUrl = 'https://localhost:7214/api';

  constructor(private http:HttpClient) { }

  // Inspections

  getInspectionList():Observable<any[]>{
    return this.http.get<any[]>(this.inspectionAPIUrl + `/inspections`);
  }
  addInspection(data:any){
    return this.http.post(this.inspectionAPIUrl + `/inspections`, data);
  }
  updateInspection(id:number,data:any){
    return this.http.put(this.inspectionAPIUrl + `/inspections/${id}`, data);
  }
  deleteInspection(id:number|number){
    return this.http.delete(this.inspectionAPIUrl +  `/inspections/${id}`);
  }

  // InspectionTypes
  getInspectionTypesList():Observable<any[]>{
    return this.http.get<any[]>(this.inspectionAPIUrl + `/inspectionTypes`);
  }
  addInspectionTypes(data:any){
    return this.http.post(this.inspectionAPIUrl + `/inspectionTypes`, data);
  }
  updateInspectionTypes(id:number,data:any){
    return this.http.put(this.inspectionAPIUrl + `/inspectionTypes/${id}`, data);
  }
  deleteInspectionType(id:number|number){
    return this.http.delete(this.inspectionAPIUrl +  `/inspectionTypes/${id}`);
  }

  // Status 
  getStatusList():Observable<any[]>{
    return this.http.get<any[]>(this.inspectionAPIUrl + `/status`);
  }
  addStatus(data:any){
    return this.http.post(this.inspectionAPIUrl + `/status`, data);
  }
  updateStatus(id:number,data:any){
    return this.http.put(this.inspectionAPIUrl + `/status/${id}`, data);
  }
  deleteStatus(id:number|number){
    return this.http.delete(this.inspectionAPIUrl +  `/status/${id}`);
  }
  




}
