const x =1
let y =2

console.log(x,y)

y += 5

console.log('test.js')

console.log(x+y)


var i
i = 34
for(let i =0; i<4; i++){
 console.log(i)
}
console.log(i)

console.log("Hellooooooooooooooo")


const t = [1,2,3,4]
t.push(5)

const t2 = t.concat(6)

console.log(t)
console.log(t.length)
console.log(t[3])

t.forEach(value => {
    console.log(value)
})

console.log(t2)

const t3 = t2.map(value => value*2)

const t4 = t2.map(value => '<li>' + value + '</li>')
console.log(t3)
console.log(t4)

const t5 = [1,2,3,4,5,6,7,8,9,10]
const [first,second,third,...rest] = t5

console.log(first,second,third)
console.log(rest)


const obj1 = {
    name: "Narendra",
    age: 22,
    education: "B.Tech"
}

const obj2 = {
    name: "Full Stack application development",
    level: "Intermediate",
    size: 5
}

console.log(obj1.name)

console.log(obj1.age)

obj1.address = 'Pune'
obj1['phone'] = 1234567890

console.log(obj1)

const sum = (p1,p2) =>{
    console.log(p1)
    console.log(p2)
    return p1+p2 
}

const result = sum(400,20)
console.log(result)

const square = p => p*p

console.log(square(4))

t1 = [1,2,3,4,5]

const squared = t1.map(p => p*p)

console.log(squared)

function product(a,b) {
    return a*b
}

const divi = function(a,b){
    return a/b
}

console.log(product(3,4))

console.log(divi(6,3))
