import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service';
import { MyDetails } from 'src/model/myDetails';
import { Router } from '@angular/router';
import { MyCategory } from 'src/model/myCategory';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit{
    
    noteData:MyDetails={}
    groupData:any=[]
    constructor(private backend:ServicesService,private route:Router){
      this.noteData.categoryId="Select your Category"
    }
     ngOnInit(): void {
         this.backend.getAllCategory().subscribe((data:any)=>{
          console.log(data)
          this.groupData=data
         })
      }
    
    uploadNotes(){
      this.backend.uploadNotes(this.noteData).subscribe((data:any)=>{
        this.route.navigateByUrl('starter/note-manager')
      })
    }

}
