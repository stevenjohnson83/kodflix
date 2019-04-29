
import ssr from './images/SSR.jpg';
import tgf from './images/TGF.jpg';
import tdk from './images/TDK.jpg';
import tgf2 from './images/TGF2.jpg';
import rotk from './images/ROTK.jpg';
import pf from './images/PF.jpg';

export default function getGallery() {
    return [
        { id: 'shawshank', name: 'Shawshank Redemption', img: ssr, details: 
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'},
        { id: 'godfather', name: 'The Godfather', img: tgf, details:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. ' },
        { id: 'darkknight', name: 'The Dark Knight', img: tdk, details: 
        'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice. ' },
        { id: 'godfather2', name: 'The Godfather Pt 2', img: tgf2, details: 
        ' The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate. ' },
        { id: 'returnoftheking', name: 'Return Of The King', img: rotk, details: 
        'Gandalf and Aragorn lead the World of Men against Saurons army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring. ' },
        { id: 'pulpfiction', name: 'Pulp Fiction', img: pf, details: 
        'The lives of two mob hitmen, a boxer, a gangsters wife, and a pair of diner bandits intertwine in four tales of violence and redemption. ' },
    ];
}