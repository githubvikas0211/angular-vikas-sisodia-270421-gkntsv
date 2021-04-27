import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  male: string;
  female: string;
  gender: string;
  searchtext: string;
  firstName: string;
  lastName: string;
  email: string;
  columns = ["Id", "First Name", "Last Name", "Email", "Gender"];
  filterData: any[];
  data = [
    {
      id: 1,
      first_name: "Jeanette",
      last_name: "Penddreth",
      email: "jpenddreth0@census.gov",
      gender: "Female"
    },
    {
      id: 2,
      first_name: "Giavani",
      last_name: "Frediani",
      email: "gfrediani1@senate.gov",
      gender: "Male"
    },
    {
      id: 3,
      first_name: "Noell",
      last_name: "Bea",
      email: "nbea2@imageshack.us",
      gender: "Female"
    },
    {
      id: 4,
      first_name: "Willard",
      last_name: "Valek",
      email: "wvalek3@vk.com",
      gender: "Male"
    }
  ];

  ngOnInit() {
    this.filterData = this.data;
  }

  doFilter() {
    //console.log(this.searchtext);
    var self = this;
    this.filterData = this.data.filter(function(row) {
      return (
        row.first_name
          .toLocaleLowerCase()
          .indexOf(self.searchtext.toLocaleLowerCase().trim()) !== -1 ||
        row.last_name
          .toLocaleLowerCase()
          .indexOf(self.searchtext.toLocaleLowerCase().trim()) !== -1 ||
        row.email
          .toLocaleLowerCase()
          .indexOf(self.searchtext.toLocaleLowerCase().trim()) !== -1
      );
    });
  }
  addRecord() {
    var dataobj = {
      id: 5,
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      gender: this.gender
    };
    this.filterData.push(dataobj);
  }
  filter() {
    var self = this;
    this.filterData = this.data.filter(function(row) {
      return self.male && self.female
        ? row.gender === "Male" || row.gender === "Female"
        : self.male
        ? row.gender === "Male"
        : self.female
        ? row.gender === "Female"
        : row.gender === "Male" || row.gender === "Female";
    });
  }
}
