import { SERVER_URL } from './../../config';
import { UsService } from './../../shared/services/us.service';
import { PrototipoI } from './../../shared/us-doc.ed';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'app-prototipo-modal',
    templateUrl: './prototipo-modal.component.html',
    styleUrls: ['./prototipo-modal.component.scss']
})
export class PrototipoModalComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<PrototipoModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: PrototipoI,
        us: UsService
    ) {}

    ngOnInit() {}

    getImg(): string {
        return `${SERVER_URL}/prototipo/${this.data.filename}`;
    }
}
