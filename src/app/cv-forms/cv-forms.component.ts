import { Component, ElementRef, ViewChild } from '@angular/core';
import { COLORS, BACKGROUND, FONT } from '../settings';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cv-forms',
  templateUrl: './cv-forms.component.html',
  styleUrls: ['./cv-forms.component.css'],
})
export class CvFormsComponent {
  @ViewChild('page', { static: true })
  page!: ElementRef;
  // NgForm = NgForm;
  convertToPDF() {
    const data = this.page.nativeElement;
    const options = {
      scale: 1,
      dpi: 900,
    };

    html2canvas(data as any, options).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(
        contentDataURL,
        'PNG',
        0,

        position,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight()
      );

      pdf.save('new-file.pdf');
    });
  }

  person: any = {
    basic: [
      {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        photo: '',
      },
    ],
    education: [],
    experience: [],
    skills: [],
    certyficate: [],
    language: [],
  };

  colors = COLORS;
  backgrounds = BACKGROUND;
  fonts = FONT;

  personEducation: any;
  educationField: any;
  educationSince: any;
  educationFor: any;
  levelEducation: any;

  experiencePosition: any;
  experienceCompany: any;
  experienceDescription: any;
  experienceSince: any;
  experienceFor: any;

  personSkill: any;

  personCertificate: any;

  personLanguage: any;
  personLevel: any;

  addNextEducation() {
    this.person.education.push({
      school: this.personEducation,
      field: this.educationField,
      level: this.levelEducation,
      since: this.educationSince,
      for: this.educationFor,
    });
    this.personEducation =
      this.educationField =
      this.levelEducation =
      this.educationSince =
      this.educationFor =
        '';
  }

  addExperience() {
    this.person.experience.push({
      position: this.experiencePosition,
      company: this.experienceCompany,
      description: this.experienceDescription,
      since: this.experienceSince,
      for: this.experienceFor,
    });
    this.experiencePosition =
      this.experienceCompany =
      this.experienceDescription =
      this.experienceSince =
      this.experienceFor =
        '';
  }

  addSkill() {
    this.person.skills.push({
      skill: this.personSkill,
    });
    this.personSkill = '';
  }

  addCertyficate() {
    this.person.certyficate.push({
      certyficate: this.personCertificate,
    });
    this.personCertificate = '';
  }

  addLanguage() {
    this.person.language.push({
      language: this.personLanguage,
      level: this.personLevel,
    });
    this.personLanguage = this.personLevel = '';
  }

  //image upload
  url: any;

  selectFile(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }

  //
  changeColor(col: any) {
    (document.querySelector('.page') as HTMLElement).style.color = col.value;
  }

  changeFont(font: any) {
    (document.querySelector('.page') as HTMLElement).style.fontFamily = font;
  }

  changeBack(back: any) {
    (document.querySelector('.page') as HTMLElement).style.background =
      back.value;
  }
}
