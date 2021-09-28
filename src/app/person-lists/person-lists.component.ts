import { Component, OnInit } from "@angular/core";
import { Persons } from "../interfaces/persons";
import { PersonService } from "../services/person.service";

@Component({
  selector: "app-person-lists",
  templateUrl: "./person-lists.component.html",
  styleUrls: ["./person-lists.component.scss"],
})
export class PersonListsComponent implements OnInit {
  public persons: Persons[] = [];
  public filteredPersons: Persons[] = [];

  private _searchTerm: string = "";

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredPersons = this.filterePersons(value);
  }

  filterePersons(searchString: string): any {
    return this.persons.filter((person) => {
      return (
        person.name.toLowerCase().indexOf(searchString.toLowerCase()) != -1
      );
    });
  }

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personsLists();
  }

  personsLists() {
    this.personService.findAll().subscribe((r: any) => {
      this.persons = r.map((i: any) => {
        return {
          gender: i.gender,
          title: i.name.title,
          name: `${i.name.first} ${i.name.last}`,
          email: i.email,
          phone: i.phone,
          picture: {
            large: i.picture.large,
            medium: i.picture.medium,
            thumbnail: i.picture.thumbnail,
          },
        };
      });
      this.filteredPersons = this.persons;
    });
  }
}
