import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutesModule } from './blog-routes.module';
import { PostPageComponent } from './pages/post-page/post-page.component';

@NgModule({
  declarations: [
    BlogComponent,
    PostPageComponent
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
