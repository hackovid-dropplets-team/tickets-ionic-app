import { Component, OnInit } from '@angular/core';
import { XatsService } from 'src/app/services/xats.service';
import { Xat } from 'src/app/classes/xat';
import { BaseApiService } from 'src/app/services/base-api.service';
import { DjangoPaginationResult } from "src/app/classes/django-model";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  public xats: Array<Xat> = [];
  public next: string;
  constructor(
    public xatService: XatsService,
    protected api: BaseApiService,
    ) { }

  ngOnInit() {
    this.loadXats();
  }

  protected loadXats() {
    this.xatService.getAll().subscribe(result => this.xats = result.results);
  }


  public loadData($event) {
    this.api.getUrl<DjangoPaginationResult<Xat>>(this.next).subscribe(result => {
      this.updateResult(result);
      $event.target.complete();
    });
  }

  protected updateResult(result: DjangoPaginationResult<Xat>) {
    this.xats = [...this.xats, ...result.results];
    this.next = result.next;
  }

}
