process.stdout.write('hello from spinner1.js... \rheyyy\n');
const text=["|", "/","-","+",'◜','◝','◞','◟','◠','◡','○','ok',''];
let timeOut=0;
for (let char of text){
  setTimeout(  ()=>{
  process.stdout.write(`\r${char}    `);
}, timeOut);
timeOut += 200;
}
setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, timeOut);


