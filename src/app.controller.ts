import { Get, Controller, Render } from '@nestjs/common';





class User {
  name: string
  gender: string
  dateOfBirth: Date
  balance: number
  activity: string

  constructor(name:string, gender:string, dateOfBirth:Date,balance:number,activity:string) {
    this.name = name
    this.gender = gender
    this.dateOfBirth = dateOfBirth
    this.balance = balance
    this.activity = activity
  }
}


let users : User[] = []


users.push(new User('Nagy Péter', 'férfi', new Date(1965,10,10), 0, 'inactive'))
users.push(new User('Gipsz Jakab', 'férfi', new Date(1983,4,30), 50500, 'active'))
users.push(new User('Kiss Katalin', 'nő', new Date(2003,6,23), 1298, 'active'))
users.push(new User('Nagy Gábor', 'férfi', new Date(2000,3,20), -12321, 'active'))
users.push(new User('Kovács Tamás', 'férfi', new Date(1999,1,6), 85743, 'inactive'))
users.push(new User('Kerepes János', 'férfi', new Date(2004,11,3), 0, 'active'))

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { users: users };
  }
}
