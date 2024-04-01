import fs, { read } from 'fs/promises'
import path from 'path';
export default async function handler(req, res) {

  // })//we recieve data in string
  const filePath = path.join(process.cwd(), 'blogdata')
  let resArr = []
  try {
    const files = await fs.readdir(filePath)
    for (let file of files) {
      let newPath = path.join(filePath, file)
      const obj = await fs.readFile(newPath, "utf-8")
      // console.log(obj)
      resArr.push(JSON.parse(obj))
    }
    console.log('resArr',resArr )
      res.status(200).json(resArr)
  }
  catch (error) {
    console.log(error)
  }

}
