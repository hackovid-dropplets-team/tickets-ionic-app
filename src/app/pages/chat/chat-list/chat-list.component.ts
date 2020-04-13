import { Component, OnInit } from '@angular/core';
import { XatsService } from 'src/app/services/xats.service';
import { Xat } from 'src/app/classes/xat';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  public xats: Array<Xat> = [];
  constructor(
    public xatService: XatsService,
  ) { }

  ngOnInit() {
    this.loadXats();
  }

  protected loadXats() {
    this.xatService.getAll().subscribe(xats => this.xats);
  }

}
