
import ssr from './images/SSR.jpg';
import tgf from './images/TGF.jpg';
import tdk from './images/TDK.jpg';
import tgf2 from './images/TGF2.jpg';
import rotk from './images/ROTK.jpg';
import pf from './images/PF.jpg';

export default function getGallery() {
    return [
        { id: 'shawshank', name: 'Shawshank redemption', img: ssr },
        { id: 'godfather', name: 'The Godfather', img: tgf },
        { id: 'darkknight', name: 'The Dark Knight', img: tdk },
        { id: 'godfather2', name: 'The Godfather Pt 2', img: tgf2 },
        { id: 'returnoftheking', name: 'Return Of The King', img: rotk },
        { id: 'pulpfiction', name: 'Pulp Fiction', img: pf },
    ];
}