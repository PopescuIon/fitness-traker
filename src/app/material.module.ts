import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconButton } from "@angular/material/button";
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconButton,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSidenavModule
        
    ],
    exports: [
        MatButtonModule,
        MatIconButton,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSidenavModule

    ],
    providers:[
        provideNativeDateAdapter()
    ]
})
export class MaterialModule {

}