import { Injectable } from '@angular/core';

@Injectable()
export class ImageServiceService {
  visibleImages = [];
  constructor() { }
  getImages() {
    return this.visibleImages = Images.slice(0);
  }
  getImage(id: number) {
    return Images.slice(0).find( image => image.id === id);
  }
  
}

const Images = [
  { 
    "id": 1,
    "category": "versatile",
    "clientName": "shayughul",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/20394026/original/photo.jpg",
    "clientWorkUrl": "assets/img/versatile/tidy-attire.png"
  },
  { 
    "id": 2,
    "category": "versatile",
    "clientName": "jeesan485",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/versatile/banner.jpg"
  },{ 
    "id": 3,
    "category": "versatile",
    "clientName": "cclmechanical",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/versatile/ccl-mechanical.png"
  },{ 
    "id": 4,
    "category": "versatile",
    "clientName": "edumiles",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/32961892/original/become_a_career_counselor.jpg",
    "clientWorkUrl": "assets/img/versatile/edu-milestones.png"
  },{ 
    "id": 5,
    "category": "versatile",
    "clientName": "samanthahaley",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/58686570/original/1487797655122_facebook20170222-27046-wo29dj.jpg",
    "clientWorkUrl": "assets/img/versatile/organic-tea.jpg"
  },{ 
    "id": 6,
    "category": "flat",
    "clientName": "jeesan485",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/centurio-favicon.png"
  },{ 
    "id": 7,
    "category": "flat",
    "clientName": "jeesan485",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/centurio.jpg"
  },{ 
    "id": 8,
    "category": "flat",
    "clientName": "Kunal_19",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/60572167/original/7cedb081-edb1-4fbd-aaf8-90718c0bfdc3.jpg",
    "clientWorkUrl": "assets/img/flat/cityhop.png"
  },{ 
    "id": 9,
    "category": "flat",
    "clientName": "mannykhera",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/eternity-homes.jpg"
  },{ 
    "id": 10,
    "category": "flat",
    "clientName": "freddis",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/glas-specialisten.png"
  },{ 
    "id": 11,
    "category": "flat",
    "clientName": "bobbyteleport",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/39250033/original/logo_small_file.jpg",
    "clientWorkUrl": "assets/img/flat/great-choice.jpg"
  },{ 
    "id": 12,
    "category": "flat",
    "clientName": "isaaac143",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/4558540/original/resizedimage.jpg",
    "clientWorkUrl": "assets/img/flat/hair-salon.png"
  },{ 
    "id": 13,
    "category": "flat",
    "clientName": "link2hs",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/indiahoho.png"
  },{ 
    "id": 14,
    "category": "flat",
    "clientName": "cosmo7",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/42992285/original/free-red-vintage-sports-car-clip-art-ttDGLv-clipart.jpg",
    "clientWorkUrl": "assets/img/flat/klickone.png"
  },{ 
    "id": 15,
    "category": "flat",
    "clientName": "kimberly10",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/mk-company.png"
  },{ 
    "id": 16,
    "category": "flat",
    "clientName": "nagymeszler",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/61724346/original/NMCS_FF.jpg",
    "clientWorkUrl": "assets/img/flat/nagy-meszler.png"
  },{ 
    "id": 17,
    "category": "flat",
    "clientName": "Shafaiatul",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/shafaiatul.png"
  },{ 
    "id": 18,
    "category": "flat",
    "clientName": "davidhellier",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/tap.png"
  },{ 
    "id": 19,
    "category": "flat",
    "clientName": "Shafaiatul",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/torch-green.png"
  },{ 
    "id": 20,
    "category": "flat",
    "clientName": "kimberly10",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/world-loves-coffee.png"
  },{ 
    "id": 21,
    "category": "flat",
    "clientName": "anthony_bf",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/xalica.jpg"
  },{ 
    "id": 22,
    "category": "flat",
    "clientName": "shehabzakaria",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/yan-sushi.png"
  }
]
