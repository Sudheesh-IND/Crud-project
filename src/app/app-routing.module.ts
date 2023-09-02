import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteManagerComponent } from './note-manager/note-manager.component';
import { ViewNoteComponent } from './view-note/view-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { StarterComponent } from './starter/starter.component';

const routes: Routes = [
  {
    path:'',redirectTo:'starter',pathMatch:'full'
  },
  {
     path:'starter',component:StarterComponent
  },
  {
    path:'starter/note-manager',component:NoteManagerComponent
  },
  {
    path:'starter/add-notes',component:AddNotesComponent
  },
  {
    path:'starter/view-note/:id',component:ViewNoteComponent
  },
  {
    path:'starter/edit-note/:id',component:EditNoteComponent
  },
  {
    path:'starter/add-category',component:AddCategoryComponent
  },
  {
    path:'starter/edit-category/:id',component:EditCategoryComponent 
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
