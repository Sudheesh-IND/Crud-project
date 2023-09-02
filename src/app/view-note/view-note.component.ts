import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent implements OnInit{
   
  viewId:string=''
  viewData:any={}
  cataId:string=''
  cataData:any=[]
  constructor(private backend:ServicesService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.id)
      this.viewId=data.id
    })
    this.backend.viewNotes(this.viewId).subscribe((data:any)=>{
      console.log(data.categoryId)
      this.viewData=data
      this.cataId=data.categoryId
      console.log(this.cataId)

      this.backend.getParticularCategory(this.cataId).subscribe((data:any)=>{
        console.log(data)
        this.cataData=data
        
      })
      
    })
    
  }

}
