import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IdComponent } from './id/id.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    IdComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
