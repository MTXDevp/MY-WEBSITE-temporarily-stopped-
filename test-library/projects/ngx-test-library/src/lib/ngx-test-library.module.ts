import { NgModule } from '@angular/core';
import { NgxTestLibraryComponent } from './ngx-test-library.component';
import { TestComponentComponent } from './test-component/test-component.component';



@NgModule({
  declarations: [NgxTestLibraryComponent, TestComponentComponent],
  imports: [
  ],
  exports: [NgxTestLibraryComponent]
})
export class NgxTestLibraryModule { }
