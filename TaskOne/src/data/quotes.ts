export interface Quote {
  text: string;
  author: string;
}

export const quotes: Quote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Unknown"
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Unknown"
  },
  {
    text: "Dream it. Wish it. Do it.",
    author: "Unknown"
  },
  {
    text: "Don't wait for opportunity. Create it.",
    author: "Unknown"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  }
];

export const getRandomQuote = (): Quote => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};