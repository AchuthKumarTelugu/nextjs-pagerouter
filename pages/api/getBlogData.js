import fs, { read } from 'fs'
import path from 'path';
// http://localhost:3000/api/getBlogData?slug=how-to-learn-html-css
export default function handler(req, res) {
  const filePath = path.join(process.cwd(), `blogdata/${req.query.slug}.json`)
  // console.log(req.query)
  console.log(`blogdata/${req.query.slug}.json`)
  console.log(req.params)
  const data = fs.readFile(filePath, 'utf-8', (err, data) => {
    err ? res.status(500).json({ message: "no such blog found" }) : res.status(200).json(JSON.parse(data));
  })
}
