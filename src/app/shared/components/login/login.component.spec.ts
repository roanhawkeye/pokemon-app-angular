import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire require field validation for email', () => {
    component.loginForm.setValue({ email: '', password: ''});
    fixture.detectChanges();
    component.onSubmit();
    expect(component.loginForm.get('email')?.errors?.['required']).toEqual(true);
  });

  it('should fire email validation for email', ()=> {
    component.loginForm.setValue({email: 'invalid', password: '12345678'});
    fixture.detectChanges();
    component.onSubmit();
    expect(component.loginForm.get('email')?.errors?.['email']).toBeTruthy();
  });

  it('should fire require field validation for password', () => {
    component.loginForm.setValue({ email: '', password: ''});
    fixture.detectChanges();
    component.onSubmit();
    expect(component.loginForm.get('password')?.errors?.['required']).toEqual(true);
  });

  it('should fire minlength field validation for password', () => {
    component.loginForm.setValue({ email: 'daniel@example.com', password: '12345'});
    fixture.detectChanges();
    component.onSubmit();
    expect(component.loginForm.get('password')?.errors?.['minlength'].requiredLength).toEqual(8);
  });

});
