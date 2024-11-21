import React, { useState } from 'react';
import './App.css';

const messages = [
  "☕ Day 1: Brew your favorite coffee!",
  "🍩 Day 2: Pair it with a donut!",
  "🎄 Day 3: Sip while decorating the tree!",
  "📖 Day 4: Read a cozy book with coffee!",
  "✨ Day 5: Add whipped cream!",
  "❄️ Day 6: Drink by the window!",
  "🎁 Day 7: Plan a gift over coffee!",
  "🕯️ Day 8: Light a candle nearby!",
  "🍪 Day 9: Try a new coffee recipe!",
  "🎶 Day 10: Listen to jazzy tunes!",
  "🌟 Day 11: Write down your dreams!",
  "📸 Day 12: Take a coffee photo!",
  "🍂 Day 13: Enjoy the rich aroma!",
  "🧡 Day 14: Share a cup with a friend!",
  "🤍 Day 15: Reflect on happy moments!",
  "🍫 Day 16: Add a splash of chocolate!",
  "🎵 Day 17: Let the aroma fill the air!",
  "🎨 Day 18: Draw coffee art!",
  "🎂 Day 19: Enjoy a coffee dessert!",
  "✨ Day 20: Feel the warmth!",
  "🎇 Day 21: Look out at city lights!",
  "🌙 Day 22: End your day with coffee!",
  "🤶 Day 23: Share your brew with someone!",
  "🎇 Day 24: Celebrate with your favorite blend!"
];

const App = () => {
  const [openedDays, setOpenedDays] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleDayClick = (day) => {
    if (!openedDays.includes(day)) {
      setOpenedDays([...openedDays, day]);
      setPopupMessage(messages[day - 1]);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <h1>☕ Cozy Coffee Advent Calendar 🎄</h1>
      <div className="calendar">
        {Array.from({ length: 24 }, (_, i) => (
          <div
            key={i + 1}
            className={`day ${openedDays.includes(i + 1) ? 'opened' : ''}`}
            onClick={() => handleDayClick(i + 1)}
          >
            {i + 1}
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="overlay" onClick={closePopup}>
          <div className="popup">
            <p>{popupMessage}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      <div className="steam" style={{ left: '45%' }}></div>
      <div className="steam" style={{ left: '47%' }}></div>
      <div className="steam" style={{ left: '49%' }}></div>
    </div>
  );
};

export default App;