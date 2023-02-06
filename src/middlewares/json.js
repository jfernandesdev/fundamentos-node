//middleware é um interceptador.
//no node é uma função que vai interceptar a requisição
//eles sempre vão receber por parâmetro um req e um res
export async function json(req, res) {
  const buffers = []

  for await (const chuck of req) {
    buffers.push(chuck)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    req.body = null
  }

  res.setHeader('Content-type', 'application/json')
}