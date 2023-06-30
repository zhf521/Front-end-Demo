let a: string

//也可以直接使用字面量进行类型声明
let b: 10

// 可以使用 | 来连接多个类型(联合类型)
let c: 'male' | 'female'
c = 'male'
c = 'female'

let d: boolean | string
d = true
d = 'hello'

//any表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
//使用TS时，不建议使用any类型
// let e: any
//声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let e
e = 10
e = 'hello'

//unknown 表示未知类型的值
let f: unknown
f = 10
f = 'hello'
f = true

let s: string

e = 'hello' 

//unknown 实际上就是一个类型安全的any
//unknown 类型的变量，不能直接赋值给其它变量
// s = f
if (typeof f === 'string') {
  s = f
}

//类型断言,可以用来告诉解析器变量的实际类型
/*
语法：
变量 as 类型
<类型>变量
*/
s = f as string
s = <string>f

// void用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void{
  // return true
}

//never表示永远不会返回结果
function fn2(): never{
  throw new Error('报错了')
}