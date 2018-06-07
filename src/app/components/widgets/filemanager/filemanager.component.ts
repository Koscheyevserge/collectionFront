import { Component, Input } from '@angular/core';

@Component({
  selector: 'filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.scss']
})
export class FileManagerComponent { 
  files = FILES_DATA;
}

const FILES_DATA = [
  {
    name: "1",
    date: new Date()
  },
  {
    name: "1",
    date: new Date()
  },
  {
    name: "1",
    date: new Date()
  },
  {
    name: "1",
    date: new Date()
  }
]
