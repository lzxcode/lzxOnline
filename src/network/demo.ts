// abstract class Department {
//   constructor(public name: string) {}

//   printName(): void {
//     console.log('Department name: ' + this.name)
//   }

//   abstract printMeeting(): void // 必须在派生类中实现
// }

// class AccountingDepartment extends Department {
//   constructor() {
//     super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
//   }

//   printMeeting(): void {
//     console.log('The Accounting Department meets each Monday at 10am.')
//   }

//   aaa(): void {
//     console.log('Generating accounting reports...')
//   }
// }
// let department: Department // 允许创建一个对抽象类型的引用
// // department = new Department() // 错误: 不能创建一个抽象类的实例
// // eslint-disable-next-line prefer-const
// department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
// department.printName()
// department.printMeeting()
// department.generateReports()

// class Greeter {
//   static standardGreeting = 'Hello, there'
//   greeting: string
//   greet() {
//     if (this.greeting) {
//       return 'Hello, ' + this.greeting
//     } else {
//       return Greeter.standardGreeting
//     }
//   }
// }

// let greeter1: Greeter
// greeter1 = new Greeter()
// console.log(greeter1.greet())

// const greeterMaker: typeof Greeter = Greeter
