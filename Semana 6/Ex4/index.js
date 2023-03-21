const express = require('express');
const app = express();

app.get('/:name', (req, res)=>{
  const name = req.params.name
  console.log('Rota de API criada pelo(a):' + name)
  res.end();
})

app.listen(3000, ()=>{
  console.log('Server running on port 3000')
})