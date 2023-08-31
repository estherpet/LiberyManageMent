class User {
  constructor(firstname, contactInformation, booklist, username, password) {
    this.firstname = firstname;
    this.contactInformation = contactInformation;
    this.booklist = booklist;
    this.username = username;
    this.password = password;
  }

  get firstname() {
    return this.fistname;
  }
  set firstname(firstname) {
    this.firstname = firstname;
  }

  get lastname() {
    return this.lastname;
  }
  set lastname(lastname) {
    this.lastname = lastname;
  }

  get contactInformation() {
    return this.contactInformation;
  }
  set contactInformation(contactInformation) {
    this.contactInformation = contactInformation;
  }

  get booklist() {
    return this.booklist;
  }
  set booklist(booklist) {
    this.booklist = booklist;
  }

  get username() {
    return this.username;
  }
  set username(username) {
    this.username = username;
  }

  get password() {
    return this.password;
  }
  set password(password) {
    this.password = password;
  }

  borrowbook(bookname) {
    this.booklist.push(book);
  }

  signup(username, password) {
    let result = validateusername(username);
  }
}
