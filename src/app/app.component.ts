import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { setNameAction } from '../redux/actions/user.actions';
import { UserState } from '../redux/states/user.states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InvoiceSystem';
  private user$: Observable<UserState>;
  private userSubscription: Subscription;
  public sidebarCollapsed: boolean;
  public userCollapsed: boolean;
  public name: string;

  constructor(private store: Store<{ user: UserState }>) {
    this.user$ = store.pipe(select('user'));
  }

  ngOnInit(): void {
    this.sidebarCollapsed = false;
    this.userCollapsed = false;
    this.userSubscription = this.user$
    .pipe(
      map(x => {
        this.name = x.name;
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  toggleUser(flag?: boolean): void {
    if (flag) {
      this.userCollapsed = !this.userCollapsed;
    } else {
      this.userCollapsed = false;
    }
  }

  toggleSidebar(flag?: boolean): void {
    if (flag) {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    } else {
      this.sidebarCollapsed = false;
    }
  }
}
