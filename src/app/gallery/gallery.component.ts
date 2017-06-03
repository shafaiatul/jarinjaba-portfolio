import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { ImageServiceService } from './../shared/image-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges{
  visibleImages: any[] =[];
  @Input() filterBy ?:string = 'all'
  constructor(private imageService: ImageServiceService) { 
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
    
  }

}
