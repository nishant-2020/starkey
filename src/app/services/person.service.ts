import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class PersonService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get("assets/data/person.json");
  }
}
