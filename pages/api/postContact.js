import fs from 'fs'
export default async function handler(req,res){
    if(req.method=="POST") {
        console.log(req.body)
        const data=await fs.promises.readdir('contactData')
        console.log(data,data.length)
       const result= await fs.promises.writeFile(`contactData/info${data.length + 1}.json`,JSON.stringify(req.body,null,2))//based on files length,we increment file name
        res.status(200).json({msg:'info written succesfully',result})
    }else{
        res.status(200).json(["this is message from post-contact request"])
    }
}