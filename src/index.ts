import express from 'express'
import { engine } from 'express-handlebars'
const app = express()
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './pages')
let arr: string[] = []


app.get('/', (req, res) => {
    res.render('home', {text: 'Home'})
})


app.get('/', (req, res) => {
    res.render('about', {text: 'About'})
})



app.get('/', (req, res) => {
    res.render('contacts', {text: 'Contacts', arr: arr})
})





app.listen(8080, () => {
    console.log('server is running');

})