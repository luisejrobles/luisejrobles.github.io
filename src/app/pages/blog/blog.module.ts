import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutesModule } from './blog-routes.module';
import { PostCardModule } from 'src/app/components/post-card/post-card.module';
import { PostPageModule } from './pages/post-page/post-page.module';

@NgModule({
  declarations: [
    BlogComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutesModule,
    PostPageModule,
    PostCardModule
  ],
  exports: [
    BlogComponent,
  ]
})
export class BlogModule { }
