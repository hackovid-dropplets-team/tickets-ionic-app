import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { TicketService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/classes/ticket';
import { DjangoPaginationResult } from 'src/app/classes/django-model';
import { BaseApiService } from 'src/app/services/base-api.service';

@Component({
  selector: 'app-my-needs',
  templateUrl: './my-needs.page.html',
  styleUrls: ['./my-needs.page.scss'],
})
export class MyNeedsPage implements OnInit {
  public tickets: Array<Ticket> = [];
  public next: string;

  constructor(
    protected ticketsService: TicketService,
    protected api: BaseApiService,
    ) { }

  ngOnInit() {
    this.loadTickets();
  }


  protected loadTickets() {
    const query = new HttpParams().set('iamOwner', '1');
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
