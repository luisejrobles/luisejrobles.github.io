import { NgModule } from "@angular/core";
import { PostPageComponent } from './post-page.component';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PostPageComponent
    ],
    imports: [
    MarkdownModule.forChild(),
    RouterModule
    ],
    exports: [
        PostPageComponent
    ]
})
export class PostPageModule {}
