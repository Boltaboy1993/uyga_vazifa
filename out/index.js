"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const app = (0, express_1.default)();
app.engine('.hbs', (0, express_handlebars_1.engine)({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './pages');
let arr = [];
app.get('/', (req, res) => {
    res.render('home', { text: 'Home' });
});
app.get('/', (req, res) => {
    res.render('about', { text: 'About' });
});
app.get('/', (req, res) => {
    res.render('contacts', { text: 'Contacts', arr: arr });
});
app.listen(8080, () => {
    console.log('server is running');
});
