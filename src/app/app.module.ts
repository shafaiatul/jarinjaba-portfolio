import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

import { ImageServiceService } from './shared/image-service.service';
import { FilterPipe } from './shared/filter.pipe';

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
    HttpModule
  ],
  providers: [ImageServiceService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
