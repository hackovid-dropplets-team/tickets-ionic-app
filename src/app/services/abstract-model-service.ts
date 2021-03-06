import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { DjangoModel, DjangoPaginationResult } from '../classes/django-model';
import { HttpParams } from '@angular/common/http';

export abstract class AbstractModelService<T extends DjangoModel> {

    protected abstract prefix: string;

    constructor(
        protected api: BaseApiService
    ) {
    }

    public getAll(query?: HttpParams): Observable<DjangoPaginationResult<T>> {
        return this.api.get<DjangoPaginationResult<T>>(this.prefix, query);
    }

    public get(slug: string): Observable<T> {
        return this.api.get<T>(`${this.prefix}/${slug}`);
    }

    public edit(model: T) {
        return this.api.patch<T>(`${this.prefix}/${model.id}`, model);
    }

    public create(model: any) {
        return this.api.post<T>(`${this.prefix}`, model);
    }

    public delete(model: T) {
        return this.api.delete<T>(`${this.prefix}/${model.id}`);
    }
}

