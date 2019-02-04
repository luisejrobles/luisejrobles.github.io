import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextCardComponent } from './text-card.component';

@NgModule({
    declarations: [
        TextCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TextCardComponent
    ]
})
export class TextCardModule { }
