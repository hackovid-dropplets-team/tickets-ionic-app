import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/classes/ticket';
import { HttpParams } from '@angular/common/http';

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
  public tickets: Array<Ticket> = [];
  constructor(
    protected ticketsService: TicketService,
  ) { }

  ngOnInit() {
    this.loadTickets();
  }


  protected loadTickets() {
      let query = new HttpParams();
      if (this.zipCode) {
        query = query.set('zip', this.zipCode);
      }
      this.ticketsService.getAll(query).subscribe(tickets => this.tickets = tickets);
  }

}
