import { NgModule } from '@angular/core';
import { StaffItemComponent } from './staff-item/staff-item';
import { ProjectItemComponent } from './project-item/project-item';
import { StaffDetailComponent } from './staff-detail/staff-detail';
@NgModule({
	declarations: [StaffItemComponent,
    ProjectItemComponent,
    StaffDetailComponent],
	imports: [],
	exports: [StaffItemComponent,
    ProjectItemComponent,
    StaffDetailComponent]
})
export class ComponentsModule {}
