import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/pages/login/login.component';
import { NotFoundComponent } from '@app/pages/not-found/not-found.component';
import { appRoutes } from '@app/routes';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { ButtonFilledBlockComponent } from './components/button-filled-block/button-filled-block.component';
import { ButtonOutlinedBlockComponent } from './components/button-outlined-block/button-outlined-block.component';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/table/table.component';
import { WrapperContentComponent } from './components/wrapper-content/wrapper-content.component';
import { UsersComponent } from './pages/users/users.component';
import { ButtonFilledComponent } from './components/button-filled/button-filled.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    TextFieldComponent,
    ButtonFilledBlockComponent,
    ButtonOutlinedBlockComponent,
    ModalComponent,
    TableComponent,
    WrapperContentComponent,
    UsersComponent,
    ButtonFilledComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
