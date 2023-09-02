import { Component } from '@angular/core';
import { ServicesService } from '../api/services.service';
import { Route, Router } from '@angular/router';
import { MyDetails } from 'src/model/myDetails';
import { MyCategory } from 'src/model/myCategory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
   
  categoryData:MyCategory={}
  constructor(private backend:ServicesService,private route:Router){}

  uploadCategory(){
    this.backend.uploadCategory(this.categoryData).subscribe((data:any)=>{
      
        this.route.navigateByUrl('starter/note-manager')

    })
  }

}
