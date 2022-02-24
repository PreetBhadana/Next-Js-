export default function handler(req, res){
  res.status(200).json({ 
    "dashboard": {
      "posts" : 5,
      "likes" : 150,
      "folowers" : 185,
      "folowing": 95
    } 
  })
}