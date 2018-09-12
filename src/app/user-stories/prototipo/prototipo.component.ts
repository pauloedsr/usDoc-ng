import { UsService } from './../../shared/services/us.service';
import { PrototipoI } from './../../shared/us-doc.ed';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prototipo',
  templateUrl: './prototipo.component.html',
  styleUrls: ['./prototipo.component.scss']
})
export class PrototipoComponent implements OnInit {

  @Input() prototipoI: PrototipoI;
  @Output() prototiposUpdate: EventEmitter<PrototipoI[]> = new EventEmitter();

  isEditar = false;

  constructor(private us: UsService) { }

  ngOnInit() {
  }

  getImg(): string {
      return `http://localhost:3000/prototipo/${this.prototipoI.filename}`;
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
            this.salvaEdicao(event.target.value);
        }
  }

  onDelete() {
    if (!confirm(`Confirma exclusão de ${this.prototipoI.descricao}?`)) { return; }

    this.us.deletePrototipo(this.prototipoI._id).subscribe(data => {
          this.prototiposUpdate.emit(data);
    });
  }

}
