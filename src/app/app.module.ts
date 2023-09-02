import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoteManagerComponent } from './note-manager/note-manager.component';
import { ViewNoteComponent } from './view-note/view-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { StarterComponent } from './starter/starter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoteManagerComponent,
    ViewNoteComponent,
    EditNoteComponent,
    PageNotFoundComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddNotesComponent,
    SearchPipe,
    SortPipe,
    StarterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
