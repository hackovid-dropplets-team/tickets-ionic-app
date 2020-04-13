import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/classes/ticket';
import { HttpParams } from '@angular/common/http';
import { BaseApiService } from "src/app/services/base-api.service";
import { DjangoPaginationResult } from "src/app/classes/django-model";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.page.html',
  styleUrls: ['./needs.page.scss'],
})
export class NeedsPage implements OnInit {
  protected zipCodeVal: string;
  public get zipCode(): string {
    return this.zipCodeVal;
  }
  public set zipCode(val: string) {
    this.zipCodeVal = val;
    this.loadTickets();
  }
  public next: string;
  public tickets: Array<Ticket> = [];
  constructor(
    protected ticketsService: TicketService,
    protected api: BaseApiService,
    private localNotifications: LocalNotifications
  ) { }

  ngOnInit() {
    this.loadTickets();
  }


  protected loadTickets() {
    let query = new HttpParams();
    if (this.zipCode) {
      query = query.set('zip', this.zipCode);
    }
    this.ticketsService.getAll(query).subscribe(result => {
      this.tickets = [];
      this.updateResult(result);
    });
  }

  public loadData($event) {
    this.api.getUrl<DjangoPaginationResult<Ticket>>(this.next).subscribe(result => {
      this.updateResult(result);
      $event.target.complete();
    });
  }

  protected updateResult(result: DjangoPaginationResult<Ticket>) {
    this.tickets = [...this.tickets, ...result.results];
    this.next = result.next;
  }

}
