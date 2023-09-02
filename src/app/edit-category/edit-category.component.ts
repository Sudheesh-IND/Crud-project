import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyCategory } from 'src/model/myCategory';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit{
   
  cataId:string=''
  cataData:any=[]
  constructor(private backened:ServicesService,private activatedRoute:ActivatedRoute,private route:Router){}
  ngOnInit(): void {
     this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.id)
      this.cataId=data.id
      console.log(this.cataId)

      this.backened.getParticularCategory(this.cataId).subscribe((data:any)=>{
       console.log(data)
       this.cataData=data
      })
     })
  }
   updateCategory(){
    this.backened.updateCategory(this.cataId,this.cataData).subscribe((data:any)=>{
      this.route.navigateByUrl('starter/note-manager')
    })
   }

}
