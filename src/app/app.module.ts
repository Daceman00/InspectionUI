import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InspectionComponent } from './components/inspection/inspection.component';
import { ShowInspectionComponent } from './components/inspection/show-inspection/show-inspection.component';
import { AddEditInspectionComponent } from './components/inspection/add-edit-inspection/add-edit-inspection.component';
import { InspectionApiServiceService } from './inspection-api-service.service';


@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [InspectionApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
