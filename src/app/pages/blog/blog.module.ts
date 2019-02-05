import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutesModule } from './blog-routes.module';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostCardComponent } from 'src/app/components/post-card/post-card.component';

@NgModule({
  declarations: [
    BlogComponent,
    PostPageComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    BlogRoutesModule
  ],
  exports: [
    BlogComponent,
  ]
})
export class BlogModule { }
