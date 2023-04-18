export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = JSON.parse(JSON.stringify(req.body)) 

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.nome || !body.email) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'name or email not found' })
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.nome} ${body.email}` })
}