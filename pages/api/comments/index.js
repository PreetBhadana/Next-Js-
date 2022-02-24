import { comments } from "../../../components/data/coments";

export default function handler(req, res){
  if(req.method === 'GET'){
    res.status(200).json(comments)
  } else if (req.method === 'POST'){
    const comment = req.body.comment
    const lastId = comments[comments.length-1].id
    const newComment = {
      id: lastId+1,
      comment: comment
    } 
    comments.push(newComment)
    res.status(201).json(newComment)
  }
  
}