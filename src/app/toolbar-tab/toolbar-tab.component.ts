import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-tab',
  templateUrl: './toolbar-tab.component.html',
  styleUrls: ['./toolbar-tab.component.scss']
})
export class ToolbarTabComponent implements OnInit {
  @Input() title:string = "";
  @Input() path:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
