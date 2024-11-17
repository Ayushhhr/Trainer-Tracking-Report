import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {
  showTrainerSubMenu = false;
  showTopicSubMenu = false;
  showSubtopicSubMenu = false;
  showProfileSubMenu = false;
  showCoursesSubMenu = false;
  showBatchSubMenu = false;

  toggleSubMenu(subMenu: string) {
    switch (subMenu) {
      case 'trainer':
        this.showTrainerSubMenu = !this.showTrainerSubMenu;
        break;
      case 'topic':
        this.showTopicSubMenu = !this.showTopicSubMenu;
        break;
      case 'subtopic':
        this.showSubtopicSubMenu = !this.showSubtopicSubMenu;
        break;
      case 'profile':
        this.showProfileSubMenu = !this.showProfileSubMenu;
        break;
      case 'batch':
        this.showBatchSubMenu = !this.showBatchSubMenu;
        break;
      case 'courses':
        this.showCoursesSubMenu = !this.showCoursesSubMenu;
        break;
    }
  }

}
