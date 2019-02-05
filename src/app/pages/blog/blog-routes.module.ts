import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from 'src/app/modules/routes.module';
import { BlogComponent } from './blog.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

const blogRoutes: Routes = [
    {path: '', component: BlogComponent },
    { path: 'blog/post/:id', component: PostPageComponent }
];

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(blogRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BlogRoutesModule { }
