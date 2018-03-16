import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat';
import { RoomPage } from '../room/room';
import { AddroomPage } from '../addroom/addroom';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChatPage;
  tab2Root = RoomPage;
  tab3Root = ProfilePage;
 

  constructor() {

  }
}
