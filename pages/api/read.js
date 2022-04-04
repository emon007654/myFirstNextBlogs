import fs from 'fs'

export default async function handler(req, res) {
  var myBlogs
  var main = []
  var data = await fs.promises.readdir('data')
  for (let index = 0; index < data.length; index++) {
    const items = data[index]
    myBlogs = await fs.promises.readFile(`data/${items}`, 'utf-8')
    main.push(JSON.parse(myBlogs))
  }

  res.status(200).json(main)
}
