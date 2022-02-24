import { loginCred } from "../../../components/data/loginCred"

export default function handler(req, res){
  if(req.method === 'POST'){
    const email = req.body.email
    const password = req.body.password
    const user = loginCred.find( cred => (cred.email === req.body.email && cred.password === req.body.password))
    console.log(user)
    if(user){
      res.status(200).json({token: user.token})
    }else{
      res.status(201).json({error: 'user not found'})
    }
    
  }
  
}