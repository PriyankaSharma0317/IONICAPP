import { NgModule} from '@angular/core';
import { LogoComponent } from './Registration/logo/logo.component';
import { SocialMediaComponent } from './Registration/social-media/social-media.component';
import { TabComponent } from './Tabs/tab/tab.component';

@NgModule({
    declarations:[LogoComponent,SocialMediaComponent,TabComponent],
    exports:[LogoComponent,SocialMediaComponent,TabComponent]
})

export class SharedComponentsModule{}