const quotes = require("./quotes");

let iCurrentPicture = 0;
let iCurrentQuote = 0;

const game = {
    pictures: [
        "https://media4.s-nbcnews.com/j/newscms/2017_07/1903576/170215-chicken-farm-mn-1630_c65475166849611a3c0207983317eab4.nbcnews-ux-320-320.jpg",
        "https://media4.s-nbcnews.com/j/newscms/2017_03/1870136/gettyimages-458409394_71637639157329f7cb319a3e895e2860.nbcnews-ux-320-320.jpg"
    ],
    getNextPicture: ()=> game.pictures[iCurrentPicture++],
    quotes: quotes,
    getNextQuote: ()=> game.quotes[(iCurrentQuote = (iCurrentQuote + 1) % game.quotes.length)],    
    room: {
        picture: "",
        quotes: [{ text: "Start", player: "Start", chosen: true}],
        players: [],
        dealer: 0
    }

}

module.exports = game;