import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FloatLabelModule,ButtonModule,RippleModule,ToastModule,InputTextareaModule,ReactiveFormsModule,CommonModule,FormsModule,InputTextModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers:[MessageService]
})
export class ContactComponent implements OnInit {
  value: string | undefined;
  miFormulario!: FormGroup;
 
  constructor(private fb: FormBuilder, private messageService: MessageService){

 }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombreUsuario: ['',[Validators.required]],
      emailUsuario: ['', [Validators.required, Validators.email]],
      companyUsuario: [''],
      descripcionUsuario: ['', [Validators.required]],
      
    })

    }

    

    Enviar(){
      console.log('hola', this.miFormulario.value)
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Su correo electronico fue enviado' });
    }


  }


