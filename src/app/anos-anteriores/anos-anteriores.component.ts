import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anos-anteriores',
  templateUrl: './anos-anteriores.component.html',
  styleUrls: ['./anos-anteriores.component.css']
})
export class AnosAnterioresComponent implements OnInit {

  selected = '2018';

  constructor() { }

  ngOnInit(): void {
  }

  downloadClick(selectedValue) {

    var fileName = "Dados_Qualidade_Ar_" + selectedValue + ".rar";
    let link = document.createElement("a");
    link.setAttribute('type', 'hidden');
    link.href = 'assets/download/' + selectedValue + '.rar';
    link.download = fileName;
    console.log(link.href);
    document.body.appendChild(link);
    link.click();
    link.remove();

  }

}
