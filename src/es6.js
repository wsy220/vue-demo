{
    let a = 10;
    var b = 1;
    console.log(a);
    console.log(b);
}
/*console.log(a);在此let 定义只在大括号中有意义*/
/*console.log(b);*/


var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}
a[6]();


for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}
a[6]();

// let [aaa, bbb, ccc] = [1, 2, 3];
// let[foo,[[bar],baz]]=[1, [[2], 3]];
// let [head, ...tail] = [1, 2, 3, 4];
// console.log(head);
// console.log(tail);
// let[,,third]=[1,2,3];/*third=3*/;
// let [head, ...tail] = [1, 2, 3, 4];

// let[x, y, z]=new Set(['a','b','c']);
// console.log(x);
//
// /*默认值*/
//
let [foo = true] = [];
console.log(foo);
// function f() {
//     console.log('aaa');
//}


let [x, y = 'b'] = ['a']; // x='a', y='b'
console.log(x);
console.log(y);

let {foo: baz} = {foo: 'aaa', bar: 'bbb'}
console.log(baz);

let obj = {frist: 'hello', last: 'world'}
let {frist: f, last: l} = obj;
console.log(f);
console.log(l);

// let obj = {
//     p: [
//         'Hello',
//         { y: 'World' }
//     ]
// };
// let { p, p: [x, { y }] } = obj;

let obj1 = {};
let arr = [];
({foo: obj1.prop, bar: arr[0]} = {foo: 123, bar: true});
console.log(JSON.stringify(obj1));
console.log(JSON.stringify(arr));


let arr2 = [1, 2, 3];
let {0: first, [arr2.length - 1]: last} = arr2;
console.log(first);
console.log(last);

const [a1, b1, c1, d1, e1] = 'hello';
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
console.log(e1);

let {length: len} = 'hello';
console.log(len);

//函数参数解构赋值
function add([x, y]) {
    return x + y;
}

console.log(add([1, 2]));

console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));

//函数参数也可以赋默认值

function move({x, y} = {x: 0, y: 0}) {
    return [x, y];
}

console.log(move({x: 3, y: 8}));
console.log(move({x: 3}));
console.log(move({}));
console.log(move());

//undefined 会触发函数参数的默认值
console.log([1, undefined, 3].map((x = 'yes') => x));


//变量解构赋值,交换变量的值

let x11 = 1;
let y11 = 2;

[x11, y11] = [y11, x11];
console.log(x11);
console.log(y11);

//从函数返回多个值
function example() {
    return [1, 2, 3];
}

let [a33, b33, c33] = example();
console.log([a33, b33, c33]);

function example2() {
    return {
        foo22: 1,
        bar22: 2
    };
}

let {foo22, bar22} = example2();
console.log({foo22, bar22});

//提取JSON
let jsonData = {
    id: 42,
    status: 'ok',
    data: [887, 5305]
}
let {id, status, data: number} = jsonData;
console.log(id, status, number);


//函数参数的默认值


var text = function (url, {
    async = true,
    beforeSend = function () {

    },
    cache = true,
    complete = function () {

    },
    crossDomain = false,
    global = true
}) {

};
//遍历MAP结构
const map = new Map();
map.set("first", "hello");
map.set("second", "world");
for (let [key, value]of map) {
    console.log(key + " is " + value);
}
//如果只想获取到键值名、value值
for (let [key] of map) {
    console.log(+key);

}
for (let [, value]of map) {
    console.log(value);
}
let text2 = String.fromCodePoint(0x20BB7);
// for(let i=0;i<text2.length;i++){
//     console.log(text2[i]);
// }
for (let i of text2) {
    console.log(i);
}

//includes(),startWith(),endsWith().
//includes()返回布尔型，表示是否找到参数字符串
let s222 = "hello world";
console.log(s222.includes("hello"));
console.log(s222.startsWith('hello'));
console.log(s222.endsWith("!"));
//方法参数可以带数字，表示开始搜索的位置
console.log(s222.includes("hello", 6));
console.log(s222.startsWith('hello', 6));
console.log(s222.endsWith("!", 6));

//repeat()方法，返回一个新的字符串，将原字符串重复n次
console.log("x".repeat(3));
console.log("na".repeat(0));

//padStart()，padEnd() padStart()在头部补全，padEnd()在尾部补全
console.log('x'.padStart(5, 'ab'));
console.log('x'.padEnd(4, 'ab'));


//`In JavaScript '\n' is a line-feed.`
//    `In JavaScript this is
// not legal.`
//模板字符串
console.log(`string text line 1
string text line 2`);
let name22 = 'Bob', time22 = 'today';
console.log(`Hello ${name22},how are you ${time22}`);

let x44 = 1;
let y44 = 2;
console.log(`${x44}+${y44}=${x44 + y44}`);
console.log(`${x44}+${y44 * 2}=${x44 + y44 * 2}`);

let obj44 = {x: 1, y: 2};
console.log(`${obj44.x + obj44.y}`);

//模板字符串中还可以调用函数
function fn() {
    return 'hello world'
}

console.log(`foo ${fn()} bar`);

const tmpl = addrs => `
        <table>
            ${addrs.map(addr => `
                <tr><td>${addr.first}</td></tr>
                <tr><td>${addr.last}</td></tr>
            `).join('')}
        </table>
    `;
const data = [
    {first: '<jane>', last: 'Bond'},
    {first: 'Lars', last: '<Croft>'},
];
console.log(tmpl(data));

let str = 'return ' + '`Hello ${name}!`';
let func555 = new Function('name', str);
console.log(func555('jack'));

let str222 = '(name) => `Hello ${name}!`';
let func666 = eval.call(null, str222);
console.log(func666('jack666'));

let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;


let total = 30;
let msg = passthru`The total is ${total} (${total * 1.05} with tax)`;

function passthru(literals) {
    let result = '';
    let i = 0;

    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }

    return result;
}

console.log(msg);
let sender = '<script>alert("abc")</script>'; // 恶意代码
let message = safeHTML`<p>${sender} has sent you a message</p>`;

function safeHTML(templateData) {
    let s = templateData[0];
    for (let i = 1; i < arguments.length; i++) {
        let arg = String(arguments[i]);
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        s += templateData[i];
    }
    return s;
}

console.log(message);
/*遍历字符串*/
for (let codePoint of 'foo') {
    console.log(codePoint);
}

let yyy222 = 'Hello world';
console.log(yyy222.startsWith('Hello'));
console.log(yyy222.endsWith('d'));
console.log(yyy222.includes('o'));

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

const p = new Point();
console.log(p);

//参数是对象，并且赋为{}默认值
function fetch(url, {body = '', method = 'get', headers = {}} = {}) {
    console.log(method);
}

fetch('http://www.sina.com', {});
fetch('http://www.sina.com');
//函数的.length()方法，在赋默认值时表示参数个数减去带默认值的参数个数。
console.log((function (a) {
}).length);
console.log((function (a = 5) {
}).length);
console.log((function (a, b, c = 5) {
}).length);


let foo77 = 'outer';

function bar(func = () => foo77) {
    let foo77 = 'inner';
    console.log(func());
}

bar();


//实例化Promise对象
let time = function (time) {
    return new Promise((resolve, reject) => {
        console.log("Promise对象实例完成");
        if (time >= 3000) {
            setTimeout(function () {
                resolve("大于3秒的时间显示出来")
            }, time);
        } else {
            //reject('时间不能小于3秒')
        }
    })
}
time(1000).then((value => {
    console.log(value);
}, (error => {
    console.log(error);
})));
console.log(1);

var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('ok');
            // reject("返回出了问题")
        }, time)
    })
}
var asyncFn = function (time) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            reject('异步出了问题');
        }, time)
    });
};
var start = async function () {
    console.log("开始");
    var result = await sleep(3000);//等待异步执行完成后再往下执行
    //var result2=await asyncFn(3000);
    console.log(result);
    //console.log(result2);
    console.log("结束");

}
start();
//async表示一个异步函数，await只能用在这个函数的里面
//await表示等待promise返回结果再执行
//await后面紧跟着一个promise对象


var name = 'cala'
var age = 22
console.log(`hello ,I am ${name},my ${age}`)

//includes(str,index)
let t = 'abcdefg'
console.log(t.includes('cde'))

//
function a222(num = 6, callback = function (data) {
    console.log('ES6:', data)
}) {
    callback(num * num)
}

//a222()
a222(10, function (data) {
    console.log(data);
    console.log(data * 10)
})

//reduce()函数
//prev: 第一项的值或者上一次叠加的结果值
//cur: 当前会参与叠加的项
//index： 当前值的索引
//arr111: 数组本身


var arr111 = [1, 2, 3, 4, 5]
var sum111 = arr111.reduce(function (pre, cur, index, arr111) {
    console.log(pre, cur, index)
    return pre + cur
})
console.log(arr111, sum111)

var result = [
    {
        subject: 'math',
        score: 88
    },
    {
        subject: 'chinese',
        score: 95
    },
    {
        subject: 'english',
        score: 80
    }
];
var dis = {
    math: 0.5,
    chinese: 0.3,
    english: 0.2
}
var sum = result.reduce(function (pre, cur) {
    return cur.score + pre;
}, -10)
var qsum = result.reduce(function (pre, cur) {
    return pre + cur.score * dis[cur.subject]
}, 0)
console.log(sum, qsum)


var arrString = 'abcdaabc';
arrString.split('').reduce(function (res, cur) {
    res[cur] ? res[cur]++ : res[cur] = 1
    console.log(res)
    return res;
}, {})

var arry333 = [1, 2]

arry333.reduce((res, cur) => {
    res.push(cur + 1);
    console.log(res)
    return res;
}, [])

const arr444 = [5, 10];
const s = arr444.reduce((sum, item) => sum + item)
console.log(s)

//箭头函数
function Man() {
    this.age = 22;
    return () => this.age + 1;
}

var cala = new Man();
console.log(cala());

// 若返回值<=-1，则表示 A 在排序后的序列中出现在 B 之前。
// 若返回值>-1 && <1，则表示 A 和 B 具有相同的排序顺序。
// 若返回值>=1，则表示 A 在排序后的序列中出现在 B 之后
//箭头函数给数组排序
const arr555 = [10, 50, 40, 30, 20];
const s111 = arr555.sort((a, b) => (a - b));
console.log(s111)


//对象合并
var o1 = {a: 1};
var o2 = {b: 2};
var o3 = {c: 3};
var obj333 = Object.assign(o1, o2, o3);
console.log(obj333);

//Set集合,类似数组，但成员的值都是唯一的，没有重复的值
const s111222 = new Set();
var arr666 = [2, 3, 5, 4, 5, 2, 2];
arr666.forEach(x => s111222.add(x))
for (let i of s111222) {
    console.log(i);
}

const set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);
console.log(set.size);

//const set2=new Set(document.querySelectorAll('div'))
set.add(5);//添加一个元素
console.log(set.size);
set.delete(5);//删除一个元素
set.has(5);//表示Set中是否有5
set.clear();//清除所有的值
console.log([...set]);
console.log(set.size);

//Array.from将Set集合转换为数组
const items = new Set([2, 3, 4, 4, 4])
const arrys = Array.from(items);
console.log(arrys)

//set 集合的遍历操作
//keys()：返回键名的遍历器
// values()：返回键值的遍历器
// entries()：返回键值对的遍历器
// forEach()：使用回调函数遍历每个成员

let set222 = new Set(['red', 'green', 'blue'])
for (let item of set222.keys()) {
    console.log(item);
}
for (let item of set222.values()) {
    console.log(item)
}
for (let item of set222.entries()) {
    console.log(item)
}
set222.forEach((value, key) => console.log(key + ":" + value));

//map函数将数组的每个元素传递给指定函数，并返回给数组
let set333 = new Set([1, 2, 3]);
console.log(new Set([...set333].map(x => x * 2)))

//filter函数将Array中的元素过滤掉。
var arry888 = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arry888.filter(x => x % 2 !== 0)
console.log(r)

var arry999 = ['A', '', 'B', null, undefined, 'C', ' '];
var r = arry999.filter(s => s && s.trim())
console.log(r)

var arr000 = ['A', 'B', 'C', 'C', 'C'];
var r = arr000.filter(function (element, index, self) {
    // console.log(element); // 依次打印'A', 'B', 'C'
    // console.log(index); // 依次打印0, 1, 2
    // console.log(self); // self就是变量arr

    // return true;
    return self.indexOf(element) === index;
});
console.log(r.toString());

//filter去掉重复元素
var newarry = [
    {num: 1, val: 'ceshi', flag: 'aa'},
    {num: 2, val: 'ceshi2', flag: 'aa2'}
];
console.log(newarry.filter(item=>item.num===2))

var arr123 = ['1','2',undefined, '3.jpg',undefined]
var newArr = arr123.filter(item => item)
console.log(newArr)

var arr234 = ['1','2',null, '3.jpg',null]
var newArr = arr234.filter(item => item)
console.log(newArr)

//空字符串里面不能包含空格
var arr567 = ['1','2','', '3.jpg','']
var newArr = arr567.filter(item => item)
console.log(newArr)

var arr789 = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7,8,8,0,8,6,3,4,56,2];
var arr211=arr789.filter((x,index,self)=>self.indexOf(x)===index)
console.log(arr211)