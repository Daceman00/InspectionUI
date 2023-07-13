import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiServiceService } from 'src/app/inspection-api-service.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$!:Observable<any[]>;
  inspectionTypesList$!:Observable<any[]>;
  inspectionTypesList:any=[];

  // Map to display data associated with foreign keys
  inspectionTypesMap: Map<number, string> = new Map();

  constructor(private service:InspectionApiServiceService){}

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
    this.refreshInspectionTypesMap();
    
  }

  //Variable (properties)
  modalTitle:string = '';
  activateAddEditInspectionComponent:boolean = false;
  inspection:any;

  modalAdd(){
    this.inspection = {
      id:0,
      status:null,
      comments:null,
      inspectionTypeId:null,
    };
    this.modalTitle = "Add Inspection";
    this.activateAddEditInspectionComponent = true;
  }

  modalClose(){
    this.activateAddEditInspectionComponent = false;
    this.inspectionList$ = this.service.getInspectionList();
  }

  refreshInspectionTypesMap(){
    this.service.getInspectionTypesList().subscribe(data =>{
      this.inspectionTypesList = data;

      for(let i=0;i < data.length; i++){
        this.inspectionTypesMap.set(this.inspectionTypesList[i].id, this.inspectionTypesList[i].inspectionName);
      }
    })
  }
}
