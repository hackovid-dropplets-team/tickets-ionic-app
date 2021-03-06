import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/classes/ticket';
import { TicketService } from 'src/app/services/tickets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss'],
})
export class TicketEditComponent implements OnInit {

  public defaultRef = '';
  public ticket: Ticket;

  constructor(
    public ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loadTicket();
  }

  protected loadTicket() {
    const id = this.route.snapshot.paramMap.get('id');
    this.defaultRef = `/ticket/${id}`;
    this.ticketService.get(id).subscribe(ticket => {
      if (!ticket.is_owner) {
        this.router.navigate([this.defaultRef]);
      }
      this.ticket = ticket;
    });
  }
}
