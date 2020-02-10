//symbol直接作为函数来创建，不需要使用new
const s1 = Symbol()
console.log(s1)//Symbol()

const s2 = Symbol()
console.log(s2)//Symbol()

const s3 = Symbol('lison')
console.log(s3)//Symbol(lison)

const s4 = Symbol('lison')
console.log(s4.toString())//Symbol(lison)
console.log(Boolean(s4))//true
console.log(!s4)//false

let prop = 'name'
const info = {
    [`my${prop}is`]:'lison'
}
console.log(info)//mynameis:lison

let s5 = Symbol('name')
const info2 = {
    [s5]: 'lison',
    age: 18,
    sex: 'man'
}
console.log(info2)//{Symbol(name): "lison"}
// info2[s5] = 'hahah'
// console.log(info2)

for(const key in info2){
    console.log(key)
}

console.log(Object.keys(info2))//["age", "sex"]

console.log(Object.getOwnPropertyNames(info2))//["age", "sex"]

console.log(JSON.stringify(info2))//{"age":18,"sex":"man"}

console.log(Object.getOwnPropertySymbols(info2))//[Symbol(name)]

console.log(Reflect.ownKeys(info2))//["age", "sex", Symbol(name)]


// Symbol.for()  Symbol.keyFor()

const s6 = Symbol('lison')
const s7 = Symbol('lison')

const s8 = Symbol.for('lison')
const s9 = Symbol.for('lison')

//一定要是Symbol.for全局注册的这个值
console.log(Symbol.keyFor(s8))//lison

//instanceof
const obj1 = {
    [Symbol.hasInstance](otherObj) {
        console.log(otherObj)//{a: "a"}
    }
}
console.log({a:'a'} instanceof <any>obj1)//false

let arr = [1,2]
console.log([].concat(arr,[3,4]))//[1, 2, 3, 4]
console.log(arr[Symbol.isConcatSpreadable])//undefined
arr[Symbol.isConcatSpreadable] = false
console.log([].concat(arr,[3,4]))//[Array(2), 3, 4]
console.log(arr[Symbol.isConcatSpreadable])//false

class C extends Array {
    constructor (...args) {
        super(...args)
    }
    static get [Symbol.species] () {
        return Array
    }
    getName () {
        return 'lison'
    }
}
const c = new C(1,2,3)
const a = c.map(item => item + 1)
console.log(a)//[2, 3, 4]
console.log(a instanceof C)//false
console.log(a instanceof Array)//true

let obj3 = {
    [Symbol.match](string){
        console.log(string.length)//5
    },
    [Symbol.split](string){
        console.log('split',string.length)//split 5
    },
}
'abcde'.match(<RegExp>obj3)
// Symbol.replace
// Symbol.search
// Symbol.split
'abcde'.split(<any>obj3)

let obj4 = {
    [Symbol.toPrimitive] (type){
        console.log(type)//default
    }
}
// const res = (obj4 as number)++
// const res = `abc${obj4}`

let obj5 = {
    get [Symbol.toStringTag](){
        return 'lison'
    }
}
console.log(obj5.toString())//[object lison]

const obj6 = {
    a: 'a',
    b: 'b'
}
console.log(obj6)//{a: "a", b: "b"}

