import { Component, OnInit } from '@angular/core';
import { XatsService } from 'src/app/services/xats.service';
import { ActivatedRoute } from '@angular/router';
import { Xat } from "src/app/classes/xat";

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
})
export class ChatViewComponent implements OnInit {
  public xat: Xat;

  constructor(
    public xatService: XatsService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.loadTicket();
  }
  protected loadTicket() {
    const id = this.route.snapshot.paramMap.get('id');
    this.xatService.get(id).subscribe(xat => this.xat = xat);
  }
}
