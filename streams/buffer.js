//Buffer é a representação de dados que o Node utiliza
const buf = Buffer.from("hello")

console.log(buf) //retorno hexadecimal: <Buffer 68 65 6c 6c 6f>

console.log(buf.toJSON()) //retorno decimal: { type: 'Buffer', data: [ 104, 101, 108, 111 ]} 