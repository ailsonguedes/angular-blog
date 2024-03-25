// lucide-icons.module.ts
import { NgModule } from '@angular/core';
import { LucideAngularModule, Linkedin } from 'lucide-angular';

@NgModule({
 imports: [LucideAngularModule.pick({Linkedin})],
 exports: [LucideAngularModule]
})
export class LucideIconsModule { }
