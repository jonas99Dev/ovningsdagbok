import React, { useState } from "react";

interface PitchButtonProps {
  onClick?: () => void; // Lägg till valfri onClick-prop
}

const PitchButton: React.FC<PitchButtonProps> = ({ onClick }) => {
  const [message, setMessage] = useState<string>("");
  const playTone = () => {
    setMessage("Playing pitch tone");
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(442, context.currentTime);
    oscillator.connect(context.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), 1000);
  };

  return (
    <div>
      <button onClick={onClick || playTone}>Play Pitch Tone</button>
      {message && <p>{message}</p>} {/* Visa texten "Playing pitch tone" */}
    </div>
  );
};

export default PitchButton;
