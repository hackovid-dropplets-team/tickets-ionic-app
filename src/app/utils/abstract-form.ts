import { DjangoModel } from '../classes/django-model';
import { FormGroup, NgForm } from '@angular/forms';
import { AbstractModelService } from 'src/app/services/abstract-model-service';
import { Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

export abstract class AbstractForm<T extends DjangoModel> {
    protected abstract prefix: string;
    private modelVal: T;
    @ViewChild('form', { static: false }) public form: NgForm;
    @Input() public get model(): T {
        return this.modelVal;
    }
    public set model(val: T) {
        this.modelVal = val;
        if (this.form) {
            this.form.reset(val);
        }
    }

    constructor(
        protected modelService: AbstractModelService<T>,
        protected router: Router,
    ) {

    }

    public afterSave(model: T) {
        this.router.navigate([this.prefix, model.id]);
    }

    public save() {
        if (this.form.invalid) {
            return;
        }
        const data = Object.assign({}, this.form.value);
        if (this.model && this.model.id) {
            data.id = this.model.id;
        }
        const save = this.model && this.model.id ? this.modelService.edit(data) : this.modelService.create(data);
        save.subscribe(result => {
            this.afterSave(result);
        });
    }

}
