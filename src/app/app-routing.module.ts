import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'membership',
    loadChildren: () =>
      import('./membership/membership.module').then(
        (m) => m.MembershipPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactPageModule),
  },
  {
    path: 'forgotpass',
    loadChildren: () =>
      import('./forgotpass/forgotpass.module').then(
        (m) => m.ForgotpassPageModule
      ),
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('./intro/intro.module').then((m) => m.IntroPageModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then(
        (m) => m.CategoriesPageModule
      ),
  },

  {
    path: 'catedetailspage',
    loadChildren: () =>
      import('./catedetailspage/catedetailspage.module').then(
        (m) => m.CatedetailspagePageModule
      ),
  },
  {
    path: 'myinquiry',
    loadChildren: () =>
      import('./myinquiry/myinquiry.module').then((m) => m.MyinquiryPageModule),
  },
  {
    path: 'enterotp',
    loadChildren: () =>
      import('./enterotp/enterotp.module').then((m) => m.EnterotpPageModule),
  },
  {
    path: 'accountcomplete',
    loadChildren: () =>
      import('./accountcomplete/accountcomplete.module').then(
        (m) => m.AccountcompletePageModule
      ),
  },
  {
    path: 'welcomepage',
    loadChildren: () =>
      import('./welcomepage/welcomepage.module').then(
        (m) => m.WelcomepagePageModule
      ),
  },
  {
    path: 'walletpage',
    loadChildren: () =>
      import('./walletpage/walletpage.module').then(
        (m) => m.WalletpagePageModule
      ),
  },
  {
    path: 'bssignup',
    loadChildren: () =>
      import('./bssignup/bssignup.module').then((m) => m.BSsignupPageModule),
  },
  {
    path: 'savemycards',
    loadChildren: () =>
      import('./savemycards/savemycards.module').then(
        (m) => m.SavemycardsPageModule
      ),
  },
  {
    path: 'widhdraw',
    loadChildren: () =>
      import('./widhdraw/widhdraw.module').then((m) => m.WidhdrawPageModule),
  },
  {
    path: 'transhistory',
    loadChildren: () =>
      import('./transhistory/transhistory.module').then(
        (m) => m.TranshistoryPageModule
      ),
  },

  {
    path: 'tutorial',
    loadChildren: () =>
      import('./tutorial/tutorial.module').then((m) => m.TutorialPageModule),
  },
  {
    path: 'workflow',
    loadChildren: () =>
      import('./workflow/workflow.module').then((m) => m.WorkflowPageModule),
  },
  {
    path: 'activity',
    loadChildren: () =>
      import('./activity/activity.module').then((m) => m.ActivityPageModule),
  },
  {
    path: 'hotdeal',
    loadChildren: () =>
      import('./hotdeal/hotdeal.module').then((m) => m.HotdealPageModule),
  },
  {
    path: 'social',
    loadChildren: () =>
      import('./social/social.module').then((m) => m.SocialPageModule),
  },
  {
    path: 'newsrelease',
    loadChildren: () =>
      import('./newsrelease/newsrelease.module').then(
        (m) => m.NewsreleasePageModule
      ),
  },
  {
    path: 'refreral',
    loadChildren: () =>
      import('./refreral/refreral.module').then((m) => m.RefreralPageModule),
  },
  {
    path: 'accountcomplete-b',
    loadChildren: () =>
      import('./accountcomplete-b/accountcomplete-b.module').then(
        (m) => m.AccountcompleteBPageModule
      ),
  },
  {
    path: 'addcard',
    loadChildren: () =>
      import('./addcard/addcard.module').then((m) => m.AddcardPageModule),
  },
  {
    path: 'qrscanner',
    loadChildren: () =>
      import('./qrscanner/qrscanner.module').then((m) => m.QRscannerPageModule),
  },
  {
    path: 'qr-code',
    loadChildren: () =>
      import('./qr-code/qr-code.module').then((m) => m.QRCodePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
