import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service';


@Component({
  selector: 'app-note-manager',
  templateUrl: './note-manager.component.html',
  styleUrls: ['./note-manager.component.css']
})
export class NoteManagerComponent implements OnInit{

  noteDetails:any=[]
  searchTerm:string=''
  categories:any=[]
  cataKey:string=''

  constructor(private backend:ServicesService){
    this.noteDetails.categoryId='Select a category'
  }
  ngOnInit(): void {
    this.getAllNotes()
    this.getAllCategory()
  }
  getAllNotes(){
    this.backend.getAllNotes().subscribe((data)=>{
      console.log(data)
      this.noteDetails=data
    })
  }
  deleteNotes(noteId:string){
    this.backend.deleteNotes(noteId).subscribe((data)=>{
      this.getAllNotes()
    })
  }
  getKey(event:any){
    console.log(event.target.value)
    this.searchTerm=event.target.value
  }
  getAllCategory(){
    this.backend.getAllCategory().subscribe((data)=>{
      console.log(data.name)
      this.categories=data
     })
  }
  getCataId(event:any){
    console.log(event.target.value)
    this.cataKey=event.target.value
  }

}
