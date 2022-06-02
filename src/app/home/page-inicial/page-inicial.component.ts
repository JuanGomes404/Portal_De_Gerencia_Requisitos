import { CadastraRequisitoService } from './../../core/cadastra-requisito.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Requisito } from 'src/app/models/requisito';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-page-inicial',
  templateUrl: './page-inicial.component.html',
  styleUrls: ['./page-inicial.component.css']
})
export class PageInicialComponent implements OnInit {

  constructor(private r: Router, private serviceReq: CadastraRequisitoService, private changeDetectorRef: ChangeDetectorRef) { }


  @ViewChild('table') table: MatTable<any>;
  dataSource = new MatTableDataSource<Requisito>(this.serviceReq.reqs);
  ngOnInit(): void {
    //this.refresh();
  }
  refresh(){
    this.serviceReq.getListaReqs().subscribe((reqs: Requisito[]) => {
      this.dataSource = new MatTableDataSource(reqs);
      this.changeDetectorRef.detectChanges();
    })
    this.table.renderRows();
  }
  acionarRota(){
    this.r.navigate(['cadastrarequisito']);
  }

  displayedColumns: String[] = ['ecos', 'projeto', 'descricao', 'email'];

}
