export default function handler(req,res){
    if(req.method=="POST") {
        res.status(200).json(["post request from postContact is cleared"])
    }else{
        res.status(200).json(["this is message from post-contact request"])
    }
}