import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service';
import { MyDetails } from 'src/model/myDetails';
import { MySelection } from 'src/model/mySelection';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  categories:any=[]
  noteGroup:MyDetails[]=[]
 

  constructor(private backend:ServicesService){}
  ngOnInit(): void {
   this.getAllCategory()
   this.backend.getAllNotes().subscribe((data:any)=>{
     console.log(data.categoryId)
     this.noteGroup=data
   
  
    
    
    
   })
  }
  getAllCategory(){
    this.backend.getAllCategory().subscribe((data)=>{
      console.log(data.name)
      this.categories=data
     })
  }


}