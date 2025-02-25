import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ISidebarItems {
  content: string,
  icon: string,
  type: string,
  subTitle?: ISidebarItems[]
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarItems:ISidebarItems[] = [
    {content: 'Dashboard', icon: "Dashboard", type: "title"},
    {content: 'Analysis', icon: "CaretRight", type: "subTitle"},
    {content: 'eCommerce', icon: "CaretRight", type: "subTitle"},
    {content: 'Widgets', icon: "Widgets", type: "title"},
    {content: 'Apps', icon: "Apps", type: "title"},
    {content: 'UI Elements', icon: "", type: "heading"},
    {content: 'Cards', icon: "Cards", type: "title"},
    {content: 'eCommerce', icon: "eCommerce", type: "title"},
    {content: 'Components', icon: "Components", type: "title"},
    {content: 'Icons', icon: "Icons", type: "title"},
    {content: 'Forms & Tables', icon: "", type: "heading"},
    {content: 'Forms', icon: "Forms", type: "title"},
    {content: 'Tables', icon: "Tables", type: "title"},
    {content: 'Pages', icon: "Pages", type: "heading"},
    {content: 'Authentication', icon: "Authentication", type: "title"},
    {content: 'User Profile', icon: "UserProfile", type: "title"},
    {content: 'Timeline', icon: "Timeline", type: "title"},
    {content: 'Pages', icon: "Pages", type: "title"},
    {content: 'FAQ', icon: "FAQ", type: "title"},
    {content: 'Pricing', icon: "Pricing", type: "title"},
    {content: 'Charts & Maps', icon: "", type: "heading"},
    {content: 'Charts', icon: "Charts", type: "title"},
    {content: 'Maps', icon: "Maps", type: "title"},
    {content: 'Others', icon: "", type: "heading"},
    {content: 'Menu Levels', icon: "menuLevels", type: "title"},
    {content: 'Documentation', icon: "Documentation", type: "title"},
  ]

  showSideBar(){
    document.querySelector('.sidebar')?.classList.add('active-sidebar')
}
hideSideBar(){
    document.querySelector('.sidebar')?.classList.remove('active-sidebar')
}
}

