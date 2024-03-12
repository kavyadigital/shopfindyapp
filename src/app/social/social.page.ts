import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {
  socialMediaPosts:any;
  //   newsArticles = [
  //     {
  //       title: 'News Article 1',
  //       content: 'Content of the news article 1.',
  //       // image:'https://ionicframework.com/docs/img/demos/card-media.png'
  //     },
  //     {
  //       title: 'News Article 2',
  //       content: 'Content of the news article 2.',
  //       // image:'https://ionicframework.com/docs/img/demos/card-media.png'
  //     },
  //     // Add more dummy articles as needed
  //   ];
  //   constructor() { }
  
  //   ngOnInit() {
  //   }
  //   shareArticle(article:any){
  //     console.log(article)
  //   }
  //   bookmarkArticle(article:any){
  //     console.log(article)
  //   }
  // }
  user_id: any;
  constructor(
    private toastController: ToastController,
    public api: ApiService,private socialSharing: SocialSharing,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
  ) {
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
  }
  ngOnInit() {
    this.newsNpress();
  }
  async newsNpress() {
       try {
         const dataToSend = {  
           'user_id': this.user_id
         };
         this.api.loadingPresent();
         const response = await this.api.postData('social_media.php', dataToSend);
         if(response.data.status == 1){
          //  this.email= response.data['result'][0]['email'];
          //  this.mono= response.data['result'][0]['phone'];
          this.socialMediaPosts = response.data['result'];
           this.api.loadingDismiss();
         }
         else if (response.status === 0) {
          this.api.loadingDismiss();
         }
       } catch (error) {
         console.log(error)
         this.api.loadingDismiss();
         // this.responseMessage = `Error: ${error.message}`;
       }     
   }
     shareArticle(article:any){
      console.log(article)
    }
    bookmarkArticle(article:any){
      console.log(article)
    }
      openFacebook(post:any){
console.log(post)
  }
  openTwitter(post:any){
    console.log(post)
  }
  openInstagram(post:any){
    console.log(post)
  }

  shareApp(post:any) {
    this.socialSharing.share('SHOPFINDY: ' + post.title + ':' + post.ds);
  }

  
  }
  
//   socialMediaPosts = [
//     {
//       username: 'User1',
//       time: '2 hours ago',
//       content: 'This is a sample post.'
//     },
//     {
//       username: 'User2',
//       time: '5 hours ago',
//       content: 'Another post here!'
//     },

//   ];
//   constructor() { }

//   ngOnInit() {
//   }
//   openFacebook(post:any){
// console.log(post)
//   }
//   openTwitter(post:any){
//     console.log(post)
//   }
//   openInstagram(post:any){
//     console.log(post)
//   }
// }
