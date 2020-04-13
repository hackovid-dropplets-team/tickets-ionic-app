import { DjangoModel } from './django-model';
import { Ticket } from './ticket';
import { User } from './user';

export interface Xat extends DjangoModel {
    ticket: Ticket;
    voluntary: User;
}
