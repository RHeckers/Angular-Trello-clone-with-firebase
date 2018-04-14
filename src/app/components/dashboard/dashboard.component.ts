import { Component, OnInit } from '@angular/core';

import { Board } from '../../Board';
import { BoardsService } from '../../boards.service';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  boards: Board[];
  nr: string;
 

  constructor( 
    private boardsService: BoardsService,
    public auth: AuthService 
    ) { }
  
  ngOnInit() {    
    
  }

  getUid(uid){
    this.nr = uid;
    this.getBoards(uid);  
  }
 
  getBoards(uid){
    this.boardsService.getBoards(uid)
      .subscribe(boards => this.boards = boards);
  }

  addBoard(title: string, nr: string): void {
    title = title.trim();
    if (!title) { return; }
    this.boardsService.addBoard({title, nr} as Board);
  }

  deleteBoard(board: Board, id: string): void {
    this.boardsService.deleteBoard(board, id); 
  }
 
}
