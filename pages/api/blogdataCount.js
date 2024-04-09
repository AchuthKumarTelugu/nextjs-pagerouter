// http://localhost:3000/api/blogdataCount
import fs from 'fs'
export default async function handler(req, res) {
    let count = await fs.promises.readdir('blogdata')
    // res.status(200).json({count:2})
    res.send({count:2})
}