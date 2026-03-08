// Text-to-Speech using the browser's built-in Web Speech API
// Cost: $0 forever — no API keys, no server, no monthly fees
// Supports: fr-CA (French Canadian), en-CA (English Canadian), en-US fallback
// Works on: Chrome, Safari, Firefox, Edge, mobile browsers

let currentUtterance: SpeechSynthesisUtterance | null = null;

export function speak(text: string, lang: 'fr' | 'en' = 'fr') {
  stop();

  if (!('speechSynthesis' in window)) {
    console.warn('Text-to-speech not supported in this browser');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);

  const langMap = {
    fr: ['fr-CA', 'fr-FR', 'fr'],
    en: ['en-CA', 'en-US', 'en-GB', 'en'],
  };

  const voices = speechSynthesis.getVoices();
  const preferredLangs = langMap[lang];

  let selectedVoice: SpeechSynthesisVoice | null = null;
  for (const preferred of preferredLangs) {
    selectedVoice = voices.find(v => v.lang.startsWith(preferred)) ?? null;
    if (selectedVoice) break;
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  utterance.lang = preferredLangs[0];
  utterance.rate = 0.9;
  utterance.pitch = 1.0;

  currentUtterance = utterance;
  speechSynthesis.speak(utterance);
}

export function stop() {
  if (typeof window !== 'undefined' && speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
  currentUtterance = null;
}

export function isSpeaking(): boolean {
  if (typeof window === 'undefined') return false;
  return speechSynthesis.speaking;
}

// Preload voices — some browsers load async
export function preloadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve([]);
      return;
    }
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
      return;
    }
    speechSynthesis.onvoiceschanged = () => {
      resolve(speechSynthesis.getVoices());
    };
  });
}
