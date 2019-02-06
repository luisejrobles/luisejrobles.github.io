import { NgModule } from '@angular/core';
import { PostCardComponent } from './post-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PostCardComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        PostCardComponent
    ]
})
export class PostCardModule {}
