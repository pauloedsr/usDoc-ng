import { SERVER_URL } from './../../config';
import { UsService } from './../../shared/services/us.service';
import { PrototipoI, ComentarioI } from './../../shared/us-doc.ed';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-prototipo-modal',
    templateUrl: './prototipo-modal.component.html',
    styleUrls: ['./prototipo-modal.component.scss']
})
export class PrototipoModalComponent implements OnInit {
    @ViewChild('txtComentario') txtComentario: ElementRef;

    constructor(
        public dialogRef: MatDialogRef<PrototipoModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: PrototipoI,
        public us: UsService
    ) {}

    ngOnInit() {
        this.us.viewPrototipo(this.data._id).subscribe(data => {
            this.data = data;
        });
    }

    getImg(): string {
        return `${SERVER_URL}/prototipo/${this.data.filename}`;
    }

    onClose() {
        this.dialogRef.close();
    }

    salvaComentario() {
        const txt: string = this.txtComentario.nativeElement.value;
        if (txt.trim() === '') {
            return;
        }
        const comentario = {} as ComentarioI;
        comentario.comentario = txt;
        comentario.autor = localStorage.getItem('id');

        const prototipo = this.data;
        if (!prototipo.comentarios) {
            prototipo.comentarios = [];
        }
        prototipo.comentarios.push(comentario);
        this.us.putPrototipo(prototipo).subscribe(data => {
            this.data = data.find(p => p._id === this.data._id);
            this.txtComentario.nativeElement.value = '';
        });
    }

    onRemove(i: number) {
        this.data.comentarios.splice(i, 1);
        console.log(this.data.comentarios.length, this.data.comentarios);
        this.us.putPrototipo(this.data).subscribe(data => {
            this.data = data.find(p => p._id === this.data._id);
        });
    }
}
