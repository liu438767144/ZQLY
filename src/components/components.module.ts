import { NgModule } from '@angular/core';
import { StaffItemComponent } from './staff-item/staff-item';
import { ProjectItemComponent } from './project-item/project-item';
@NgModule({
	declarations: [StaffItemComponent,
    ProjectItemComponent],
	imports: [],
	exports: [StaffItemComponent,
    ProjectItemComponent]
})
export class ComponentsModule {}
