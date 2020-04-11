import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/classes/ticket';
import { TicketService } from 'src/app/services/tickets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.scss'],
})
export class TicketViewComponent implements OnInit {

  public ticket: Ticket;

  constructor(
    public ticketService: TicketService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.loadTicket();
  }
  protected loadTicket() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ticketService.get(id).subscribe(ticket => this.ticket = ticket);
  }
}
