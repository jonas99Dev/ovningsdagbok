import React, { useState } from "react";

interface PitchButtonProps {
  onPlayTone?: () => void;
}

const PitchButton: React.FC<PitchButtonProps> = ({ onPlayTone }) => {
  const [status, setStatus] = useState<string>("");

  const playTone = () => {
    setStatus("Playing pitch tone...");

    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(442, audioContext.currentTime);

    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1);

    if (onPlayTone) {
      onPlayTone();
    }

    // Återställ status efter 1 sekund
    setTimeout(() => setStatus(""), 1000);
  };

  return (
    <div>
      <button onClick={playTone}>Play Pitch Tone</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default PitchButton;
