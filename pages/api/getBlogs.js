import fs from 'fs'

export default async function handler(req, res) {
  fs.readFile(`data/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(404).json('NO Such File Found')
    }
    res.status(200).json(JSON.parse(data))
  })
}
