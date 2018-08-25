import { NgModule } from '@angular/core';
import { StaffItemComponent } from './staff-item/staff-item';
import { StaffDetailComponent } from './staff-detail/staff-detail';
@NgModule({
	declarations: [StaffItemComponent,
    StaffDetailComponent],
	imports: [],
	exports: [StaffItemComponent,
    StaffDetailComponent]
})
export class ComponentsModule {}
