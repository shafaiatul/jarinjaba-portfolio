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
    "clientName": "willjgriffin",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/versatile/cep2.png",
    "clientComment": "Exactly what I asked for."
  },
  { 
    "id": 2,
    "category": "versatile",
    "clientName": "jeesan485",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/versatile/banner.jpg",
    "clientComment": "Excellent communication, satisfied with the web banner, will do business again in future"
    
  },{ 
    "id": 3,
    "category": "versatile",
    "clientName": "cclmechanical",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/versatile/ccl-mechanical.png",
    "clientComment": "Reviews and Comments are missing"
  },{ 
    "id": 4,
    "category": "versatile",
    "clientName": "edumiles",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/32961892/original/become_a_career_counselor.jpg",
    "clientWorkUrl": "assets/img/versatile/edu-milestones.png",
    "clientComment": "Reviews and Comments are missing"
  },{ 
    "id": 5,
    "category": "versatile",
    "clientName": "samanthahaley",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/58686570/original/1487797655122_facebook20170222-27046-wo29dj.jpg",
    "clientWorkUrl": "assets/img/versatile/organic-tea.jpg",
    "clientComment": "Amazing will be working with her again! She's awesome"
  },{ 
    "id": 6,
    "category": "flat",
    "clientName": "jeesan485",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/centurio-favicon.png",
    "clientComment": "Outstanding Experience!"
  },{ 
    "id": 7,
    "category": "flat",
    "clientName": "jeesan485",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/centurio.jpg",
    "clientComment": "Outstanding Experience!"
  },{ 
    "id": 8,
    "category": "flat",
    "clientName": "Kunal_19",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/60572167/original/7cedb081-edb1-4fbd-aaf8-90718c0bfdc3.jpg",
    "clientWorkUrl": "assets/img/flat/cityhop.png",
    "clientComment": "Reviews and Comments are missing"
  },{ 
    "id": 9,
    "category": "flat",
    "clientName": "mannykhera",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/eternity-homes.jpg",
    "clientComment": "Reviews and Comments are missing"
  },{ 
    "id": 10,
    "category": "flat",
    "clientName": "freddis",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/glas-specialisten.png",
    "clientComment": "Reviews and Comments are missing"
  },{ 
    "id": 11,
    "category": "flat",
    "clientName": "bobbyteleport",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/39250033/original/logo_small_file.jpg",
    "clientWorkUrl": "assets/img/flat/great-choice.jpg",
    "clientComment": "super fast and awesome work ! will use regularly"
  },{ 
    "id": 12,
    "category": "flat",
    "clientName": "isaaac143",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/4558540/original/resizedimage.jpg",
    "clientWorkUrl": "assets/img/flat/hair-salon.png",
    "clientComment": "Quality product, and quick turnaround/delivery! I will use again :)"
  },{ 
    "id": 13,
    "category": "flat",
    "clientName": "link2hs",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/indiahoho.png",
    "clientComment": "Good Experience!"
  },{ 
    "id": 14,
    "category": "flat",
    "clientName": "cosmo7",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/42992285/original/free-red-vintage-sports-car-clip-art-ttDGLv-clipart.jpg",
    "clientWorkUrl": "assets/img/flat/klickone.png",
    "clientComment": "Looks good! Thanks"
  },{ 
    "id": 15,
    "category": "flat",
    "clientName": "kimberly10",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/mk-company.png",
    "clientComment": "Thank you - this is perfect."
  },{ 
    "id": 16,
    "category": "flat",
    "clientName": "nagymeszler",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/61724346/original/NMCS_FF.jpg",
    "clientWorkUrl": "assets/img/flat/nagy-meszler.png",
    "clientComment": "Thank you :)"
  },{ 
    "id": 17,
    "category": "flat",
    "clientName": "Shafaiatul",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/shafaiatul.png",
    "clientComment": "It was very quick delivery and precise as well. Good Experience."
  },{ 
    "id": 18,
    "category": "flat",
    "clientName": "davidhellier",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/tap.png",
    "clientComment": "Reviews and Comments are missing"
  },{ 
    "id": 19,
    "category": "flat",
    "clientName": "Shafaiatul",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/torch-green.png",
    "clientComment": "The Best Service I have ever received from Fiverr. This Designer is very quick and responsive. She answers all my question very clearly in the Chat. She not only does her work flawlessly but also deal with the Customer very professionally. Great Experience. I would love to do business with in Future for Sure. Thanks Again!!!"
  },{ 
    "id": 20,
    "category": "flat",
    "clientName": "kimberly10",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/world-loves-coffee.png",
    "clientComment": "Extremely prompt and friendly service. Great design! Will definitely work with again for future projects."
  },{ 
    "id": 21,
    "category": "flat",
    "clientName": "anthony_bf",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/xalica.jpg",
    "clientComment": "Good Experience!"
  },{ 
    "id": 22,
    "category": "flat",
    "clientName": "shehabzakaria",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/yan-sushi.png",
    "clientComment": "Excellent communication and delivery time"
  },{ 
    "id": 23,
    "category": "flat",
    "clientName": "shaneleary71",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/55829800/original/step0003.jpg",
    "clientWorkUrl": "assets/img/flat/skipdcue.jpg",
    "clientComment": "outstanding experience!"
  },{ 
    "id": 24,
    "category": "versatile",
    "clientName": "rasmussk",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/versatile/multiservice-square.png",
    "clientComment": "good experience"
  },{ 
    "id": 25,
    "category": "versatile",
    "clientName": "rasmussk",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/versatile/multiservice.png",
    "clientComment": "good experience"
  },
  { 
    "id": 26,
    "category": "versatile",
    "clientName": "willjgriffin",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/versatile/cep1.png",
    "clientComment": "Exactly what I asked for."
  },
  { 
    "id": 27,
    "category": "versatile",
    "clientName": "shayughul",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/20394026/original/photo.jpg",
    "clientWorkUrl": "assets/img/versatile/tidy-attire.png",
    "clientComment": "Outstanding Experience!"
  },
  { 
    "id": 28,
    "category": "versatile",
    "clientName": "customlife",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/941834/original/22095_378891295539444_2068726645_n.jpg",
    "clientWorkUrl": "assets/img/versatile/S-C-INC.jpg",
    "clientComment": "Outstanding Experience!"
  },
  { 
    "id": 29,
    "category": "versatile",
    "clientName": "lightofourbeing",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/versatile/live-consciously.png",
    "clientComment": "Outstanding Experience!"
  },{ 
    "id": 30,
    "category": "flat",
    "clientName": "aydanaydan",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/e777d7c1adf177bdae57cceb325a76f7-1498083139499/viber image.jpeg",
    "clientWorkUrl": "assets/img/flat/aa2.png",
    "clientComment": "LOVED IT!"
  },
  { 
    "id": 31,
    "category": "versatile",
    "clientName": "jeesan485",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/versatile/medaid.jpg",
    "clientComment": "Fast and friendly service. Will do business again."
  },{ 
    "id": 32,
    "category": "flat",
    "clientName": "tiagonoelsouza",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/62128407/original/1490842102475_facebook20170330-25954-12m7r6n.jpg",
    "clientWorkUrl": "assets/img/flat/wee.jpg",
    "clientComment": "Reviews and Comments are missing"
  },{ 
    "id": 33,
    "category": "flat",
    "clientName": "kevinhoff",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/63881614/original/photo.jpg",
    "clientWorkUrl": "assets/img/flat/blackversion.png",
    "clientComment": "A very good experience. ***** FIVE STARS ***** I would have no issue working with this designer again. I bet I will"
  },{ 
    "id": 34,
    "category": "flat",
    "clientName": "tcndahouse",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/customer-interactions-IT-solutions.png",
    "clientComment": "The Best Service I have ever received from Fiverr. This Designer is very quick and responsive. She answers all my question very clearly in the Chat. She not only does her work flawlessly but also deal with the Customer very professionally. Great Experience. I would love to do business with in Future for Sure. Thanks Again!!!"
  },{ 
    "id": 35,
    "category": "flat",
    "clientName": "zionjr",
    "clientImageUrl": "assets/img/client.png",
    "clientWorkUrl": "assets/img/flat/se-tech.jpg",
    "clientComment": "Outstanding Experience!"
  },{ 
    "id": 36,
    "category": "flat",
    "clientName": "aydanaydan",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/e777d7c1adf177bdae57cceb325a76f7-1498083139499/viber image.jpeg",
    "clientWorkUrl": "assets/img/flat/aa1.png",
    "clientComment": "LOVED IT!"
  },
  { 
    "id": 37,
    "category": "versatile",
    "clientName": "ishaq4040",
    "clientImageUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/8095922/original/resizedimage.php.jpg",
    "clientWorkUrl": "assets/img/versatile/tax-lady-2.png",
    "clientComment": "She's very good!!!"
  },
]
