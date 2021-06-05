import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./components/app/app.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', loadChildren:()=>import('./components/modules/user/user.module').then(m=>m.UserModule)
      },
      {path: 'posts', loadChildren:()=>import('./components/modules/post/post.module').then(m=>m.PostModule)},
      {path: 'comments',loadChildren:()=>import('./components/modules/comment/comment.module').then(m=>m.CommentModule) }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
