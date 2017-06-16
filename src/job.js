var buf=new Buffer(10);
buf.write("hello",'utf8');
console.info(buf.toJSON());