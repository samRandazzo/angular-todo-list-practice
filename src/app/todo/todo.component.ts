import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  mockData: any = [
    {
      id: '1',
      title: 'Buy Milk',
      done: false,
      date: new Date()
    },
    {
      id: '2',
      title: 'Deposit into savings',
      done: false,
      date: new Date()
    },
    {
      id: '3',
      title: 'Learn Angular',
      done: false,
      date: new Date()
    },
    {
      id: '4',
      title: 'Learn to play Keyforge',
      done: false,
      date: new Date()
    }
  ];

  show: boolean;
  value: string;
  id: number;

  constructor() {}

  // This is the 'add' function
  create(item) {

    this.mockData.push({ id: Date.now(),
    title: item,
    done: false,
    date: new Date(),

    });
  }
  // This is the delete function
  remove(id) { this.mockData = this.mockData.filter(item => {
    if(item.id !== id) {
      return item;
    }
  });
}
  // This is the 'show edit' function
  edit(id, title) {
    this.show = true;
    this.value = title;
    this.id = id;
  }
  // This is the update perform function
  update(title) {
    this.mockData.map(item => {
      if (item.id === this.id) {
        item.title = title;
      }
    });
  }

  // This is to set a task as complete
  setTaskComplete(id) {
    this.mockData.map(item => {
      if(item.id === id) {
        item.done = true;
      }
    });
  }




  ngOnInit() {
  }

}
