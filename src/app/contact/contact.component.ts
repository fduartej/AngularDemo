import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'pm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    pageTitle: string = 'Contact';
    contacts: Contact[];
	  newContact: Contact = new Contact();
    
  	constructor(
 		  private contactService: ContactService,
	  ){}

	  ngOnInit():void{
	    this.getContacts();
	  }

	  getContacts(): void{
		  this.contactService.getContacts()
			  .then(contacts=>this.contacts=contacts);
	  }

	  createContact(contactForm: NgForm): void{
		    this.contactService.createContact(this.newContact)
		    .then(createContact=>{
		        contactForm.reset();
		        this.newContact = new Contact();
		        this.contacts.unshift(createContact);
		});
	}

}
