import { Component } from "@angular/core";

// Creating the Navbar Component
@Component({
  selector: 'app-navbar',
  template: `<h1>Navbar Template</h1>
              <p>Lorem ipsum dolor immet.</p>`,
  styles: [`h1 {
    color: red;
    font-size: 50px;
  }`]
})

// Register the Navbar Component in Angular Modules
export class NavbarComponent {
}
