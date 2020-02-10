// //布尔类型
// // let bool: boolean = false
// let bool: boolean
// bool= true

// //数值类型
// let num: number = 123
// // num = 'abc'

// num = 0b111101
// num = 0o173
// num = 0o173
// num = 0x7b

// //字符串类型
// let str: string
// str = 'abc'
// str = `数值是${num}`
// console.log(str)//数值是123

// //数值类型
// // [1,2,3]
// let arr: number[]
// arr = [ 5 ]
// //写法二
// let arr2: Array<number>
// let arr3: (string | number)[]
// arr3 = [1, 'a']

// //元组类型
// //可以理解是数值的拓展
// //元组是固定长度固定位置的
// let tuple: [string, number, boolean]
// tuple = ['a',1,false]

// //枚举类型
// //枚举值名字习惯大写开头
// //通过名字取到索引值，通过索引值取到名字
// enum Roles {
//     SUPER_ADMIN = 1,
//     ADMIN = 3,
//     USER
// }
// console.log(Roles.USER)//0
// console.log(Roles[4])//USER
// // if(roles === SUPER_ADMIN){
    
// // }

// //any类型,表示任何类似，或者任意类型
// //any能不要用的时候就不要用
// let value: any
// value = 'abc'
// value = 123
// value = false
// const arr4: any[] = [1,'a']

// //void类型
// const consoleText = (text: string) => {
//     console.log(text)
// }
// let v: void
// // v = undefined
// // v = null
// consoleText('abc')//abc

// //null和undefined
// let u: undefined
// u = undefined
// //u = 123
// let n: null
// n = null
// //n = 'abc'
// num = undefined
// num = null

// //never类型
// //表示的是那些永远不存在的值的类型
// const errorFunc = (message: string): never => {
//     throw new Error[message]
// }
// const infiniteFunc = (): never => {
//     while(true){}
// }
// let neverVariable = (() => {
//     while(true){}
// })()
// num = neverVariable

// //object对象
// let obj = {
//     name: 'ming'
// }
// let obj2 = obj
// obj2.name = 'xiao'
// console.log(obj)
// function getObject(obj: object): void{
//     console.log(obj)
// }
// getObject(obj2)

// //类型断言
// //有点像是类型转换
// const getLength = (target: string | number): number => {
//     if((<string>target).length || (target as string).length === 0){
//         return (<string>target).length
//     }else{
//         return target.toString().length
//     }
// }
// // getLength(false)
