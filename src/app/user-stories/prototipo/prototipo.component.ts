import { SERVER_URL } from './../../config';
import { MatDialog } from '@angular/material';
import { UsService } from './../../shared/services/us.service';
import { PrototipoI } from './../../shared/us-doc.ed';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PrototipoModalComponent } from '../prototipo-modal/prototipo-modal.component';

@Component({
    selector: 'app-prototipo',
    templateUrl: './prototipo.component.html',
    styleUrls: ['./prototipo.component.scss']
})
export class PrototipoComponent implements OnInit {
    @Input()
    prototipoI: PrototipoI;
    @Output()
    prototiposUpdate: EventEmitter<PrototipoI[]> = new EventEmitter();

    isEditar = false;

    constructor(private us: UsService, public dialog: MatDialog) {}

    ngOnInit() {}

    getImg(): string {
        return `${SERVER_URL}/prototipo/${this.prototipoI.filename}`;
    }

    salvaEdicao(value: string) {
        this.isEditar = false;
        if (value.trim() === '' || this.prototipoI.descricao === value) {
            return;
        }
        this.prototipoI.descricao = value;
        this.us.putPrototipo(this.prototipoI).subscribe(data => {
            console.log(data);
            this.prototiposUpdate.emit(data);
        });
    }

    onKey(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            const target = event.target as HTMLInputElement;
            this.salvaEdicao(target.value);
        }
    }

    onDelete() {
        if (!confirm(`Confirma exclusão de ${this.prototipoI.descricao}?`)) {
            return;
        }

        this.us.deletePrototipo(this.prototipoI._id).subscribe(data => {
            this.prototiposUpdate.emit(data);
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PrototipoModalComponent, {
            width: '90vw',
            height: '80vh',
            panelClass: 'prototipo-dialog-container',
            autoFocus: false,
            data: this.prototipoI
        });
    }
}
