import { Question } from '../types/types';

export const quizData: Question[] = [
  {
    id: 1,
    text: 'What does P2P stand for?',
    options: ["Password to Password", "Peer to Peer", "Product to Product", " Private Key to Public Key"],
    correctAnswer: 1,
  },
  {
    id: 2,
    text: "What is UTXO?",
    options: [" United Transaction Office", "United Texan Xerox Organization", "Unspent Transaction Output", " Union of Texas Operations"],
    correctAnswer: 2,
  },
  { 
    id:3,
    text: "Who first proposed a blockchain-like protocol?",
    options: ["Stuart Haber", "W. Scott Stornetta", " David Chaum", "Dave Bayer"],
    correctAnswer: 2,
 },
 { 
    id:4,
    text: "Who is the CEO of Tesla?", 
    options: ["Bill Gates", "Elon Musk", "Jeff Bezos", "Mark Zuckerberg"],
    correctAnswer: 1,
 },
 {
    id:5,
    text: "A blockchain, originally block chain, is a growing list of records, called blocks, that are linked using?", 
    options: ["Timestamp", "hash", "Merkle tree", "Cryptography"], 
    correctAnswer: 3,
 },
 { 
    id:6,
    text: "What is the name of the first cryptocurrency?", 
    options: ["Bitcoin (BTC)","Ethereum (ETH)","Tether (USDT)","Binance Coin (BNB)"], 
    correctAnswer: 0,}
];