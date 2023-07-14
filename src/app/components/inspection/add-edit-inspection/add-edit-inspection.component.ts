import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { InspectionApiServiceService } from 'src/app/inspection-api-service.service';

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styleUrls: ['./add-edit-inspection.component.css']
})
export class AddEditInspectionComponent implements OnInit {

  inspectionList$!:Observable<any[]>;
  statusList$!:Observable<any[]>;
  inspectionTypesList$!:Observable<any[]>;

  constructor(private service: InspectionApiServiceService){}

  @Input() inspection:any;
  id:number = 0;
  status:string = '';
  comments:string = '';
  inspectionTypeId!: number;

  ngOnInit(): void {
    this.id = this.inspection.id;
    this.status = this.inspection.status;
    this.comments = this.inspection.comments;
    this.inspectionTypeId = this.inspection.inspectionTypeId;
    this.statusList$ = this.service.getStatusList();
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
  }

  addInspection(){
    var inspection = {
      status:this.status,
      comments:this.comments,
      inspectionTypeId:this.inspectionTypeId,
    }
    this.service.addInspection(inspection).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSucces = document.getElementById('add-succes-alert');
      if(showAddSucces){
        showAddSucces.style.display = 'block';
      }

      setTimeout(function() {
        if(showAddSucces){
          showAddSucces.style.display = 'none';
        }

      },4000)

    }
    );
  }

  updateInspection(){
    var inspection = {
      id:this.id,
      status:this.status,
      comments:this.comments,
      inspectionTypeId:this.inspectionTypeId,
    }
    var id:number = this.id;
    this.service.updateInspection(id, inspection).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showUpdateSucces = document.getElementById('update-succes-alert');
      if(showUpdateSucces){
        showUpdateSucces.style.display = 'block';
      }

      setTimeout(function() {
        if(showUpdateSucces){
          showUpdateSucces.style.display = 'none';
        }

      },4000)

    }
    );
  }

}
