import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../meterial/meterial.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,MaterialModule,RouterModule,HeaderComponent,FooterComponent
  ],
  exports:[
    CommonModule,ReactiveFormsModule,FormsModule,MaterialModule,RouterModule,HeaderComponent,FooterComponent
  ],
  
})
export class SharedModule { }
