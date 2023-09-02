import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyCategory } from 'src/model/myCategory';
import { MyDetails } from 'src/model/myDetails';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  getAllNotes():Observable<MyDetails>{
   return this.http.get(' http://localhost:3000/details')
  }
  getAllCategory():Observable<MyCategory>{
    return this.http.get(' http://localhost:3000/category')
  }
  viewNotes(viewId:string){
    return this.http.get(`http://localhost:3000/details/${viewId}`)
  }
  uploadNotes(noteData:any){
    return this.http.post('http://localhost:3000/details',noteData)
  }
  uploadCategory(categoryData:any){
    return this.http.post(' http://localhost:3000/category',categoryData)
  }
  getParticularCategory(cataId:string){
    return this.http.get(`http://localhost:3000/category/${cataId}`)
  }
  updateCategory(cataId:string,cataData:any){
    return this.http.put(`http://localhost:3000/category/${cataId}`,cataData)
  }
  updateNotes(noteId:string,noteData:any){
    return this.http.put(`http://localhost:3000/details/${noteId}`,noteData)
  }
  deleteCategory(cataId:string){
    return this.http.delete(`http://localhost:3000/category/${cataId}`)
  }
  deleteNotes(noteId:string){
    return this.http.delete(`http://localhost:3000/details/${noteId}`)
  }
}
