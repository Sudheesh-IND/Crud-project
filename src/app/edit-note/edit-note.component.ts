import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyDetails } from 'src/model/myDetails';
import { MyCategory } from 'src/model/myCategory';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit{
  
  noteId:string=''
  noteData:MyDetails={}
  cataData:MyCategory[]=[]

  constructor(private backend:ServicesService,private activatedRoute:ActivatedRoute,private route:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data)
      this.noteId=data.id

      this.backend.viewNotes(this.noteId).subscribe((data:any)=>{
        console.log(data.categoryId)
        this.noteData=data
       
      })
      this.backend.getAllCategory().subscribe((data:any)=>{
        console.log(data)
        this.cataData=data
      })

    })
  }
  updateNotes(){
    this.backend.updateNotes(this.noteId,this.noteData).subscribe((data:any)=>{
      this.route.navigateByUrl('starter/note-manager')
    })
  }

}
