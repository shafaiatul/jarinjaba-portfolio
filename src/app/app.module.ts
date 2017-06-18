import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { MaterializeModule } from "angular2-materialize";

import { MasonryModule } from 'angular2-masonry';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
// Services and Pipes
import { ImageServiceService } from './shared/image-service.service';
import { FilterPipe } from './shared/filter.pipe';
// Routes
import { appRoutes } from './../routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    MasonryModule,
    RouterModule.forRoot(appRoutes)
    
    
  ],
  providers: [ImageServiceService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
