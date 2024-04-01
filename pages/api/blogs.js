import fs, { read } from 'fs'
import path from 'path';
export default async function handler(req, res) {
  // const filePath = path.join(process.cwd(), 'blogdata')
  // let resArr = []
  // fs.readdir(filePath, (err, data) => {
  //   if (err) return res.status(500).json({ msg: "no such blogs found" })
  //   // console.log(data)
  //   data.forEach((value) => {
  //     const str = filePath + "\\" + value
  //     fs.readFile(str, (err, file) => {
  //       // console.log(file.toString())
  //       resArr.push(file.toString())
  //     })
  //   })
  //   console.log('resArr', resArr)
  //   res.status(200).json(data)
  //   // res.status(200).json(resArr)

  // })//we recieve data in string
  const filePath = path.join(process.cwd(), 'blogdata')
  let resArr = []
  try {
    fs.readdir(filePath, (err, data) => {
      if (err) return res.status(500).json({ msg: "blogs not found" })
      for (let file of data) {
        let newPath = path.join(filePath,file)
        const obj = fs.readFileSync(newPath, "utf-8")
        // console.log(obj)
        resArr.push(obj)
      }
    })
    console.log('resArr',resArr)
    res.status(200).json({msg:"hello"})
  } catch (error) {
    console.log(error)
  }

}
