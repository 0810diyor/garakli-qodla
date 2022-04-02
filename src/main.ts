import  express from "express";
import { engine } from "express-handlebars";
import { type } from "os";
import path from "path";


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, '../public/')))

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './pages')


type Blog = {
  url: string,
  title: string,
  content: string,
}




let arr : Blog[]= [
  {
    url: "sadsad",
    title: 'sadsad',
    content: 'sadfsad'
  }
]


app.get('/', (req,res) => {
  res.render('home', {arr : arr})
})

app.get('/contacts' ,(req , res) =>{
  res.render('contacts')
})

app.get('/about', (req,res)=>{
res.render('about')
})

app.get('/admin', (req , res)=>{
  res.render('admin')
})






app.post("/a", (req, res) => {
  let blog: Blog = req.body
  arr.push(blog)
  res.redirect('/')
  
})


app.listen(8888,()=>{
  console.log('server on :8888');
})



