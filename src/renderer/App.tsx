import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

const fakeListOfWords = [
  {
    word: 'Hello',
    source: 'Arc Browser',
    contentType: 'text',
    date: '2021-08-01',
  },
  {
    word: 'There is a lot going on these days',
    source: 'Arc Browser',
    contentType: 'text',
    date: '2021-08-01',
  },
  {
    word: 'React',
    source: 'Arc Browser',
    contentType: 'text',
    date: '2021-08-01',
  },
  {
    word: 'Router',
    source: 'Arc Browser',
    contentType: 'text',
    date: '2021-08-01',
  },
  {
    word: 'DOM',
    source: 'Arc Browser',
    contentType: 'text',
    date: '2021-08-01',
  },
  {
    word: 'Memory',
    source: 'Arc Browser',
    contentType: 'text',
    date: '2021-08-01',
  },
  {
    word: 'Browser',
    source: 'Arc Browser',
    contentType: 'text',
    date: '2021-08-01',
  },
  {
    word: 'Panel',
    source: 'Arc Browser',
    contentType: 'text',
    date: '2021-08-01',
  },
  {
    word: 'Search',
    source: 'Arc Browser',
    contentType: 'text',
    date: '2021-08-01',
  },
  {
    word: 'Item',
    source: 'Arc Browser',
    contentType: 'text',
    date: '2021-08-01',
  },
];

function Hello() {
  const [clipboardWord, setClipboardWord] = useState({
    word: 'Hello',
    source: 'Arc Browser',
    contentType: 'text',
    date: '2021-08-01',
  });

  const [searchQuery, setSearchQuery] = useState('');

  const filteredWords = fakeListOfWords.filter(word =>
  word.word.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for copied text here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="panels">
        <div className="left-panel">
          <p className="label">Today</p>
          {!filteredWords.length && <p>No words found</p>}
          {filteredWords.map((word, index) => (
            <p
              key={index}
              className="item"
              onClick={() => setClipboardWord(word)}
            >
              {word.word}
            </p>
          ))}
        </div>
        <div className="right-panel">
          {clipboardWord && (
            <>
              <div className="clipboard-word">
                <p>{clipboardWord.word}</p>
              </div>
              <div className="clipboard-info">
                <p className="heading">Source</p>
                <p className="details">{clipboardWord.source}</p>
              </div>
              <div className="clipboard-info">
                <p className="heading">Date</p>
                <p className="details">{clipboardWord.date}</p>
              </div>
              <div className="clipboard-info">
                <p className="heading">Content Type</p>
                <p className="details">{clipboardWord.contentType}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
