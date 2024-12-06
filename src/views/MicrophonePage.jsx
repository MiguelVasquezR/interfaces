import { useEffect, useState } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Listening from "../components/Listening/Listening";
import { jsonData } from "../firebase/info";

const topics = {
  signos: jsonData.musicografiaBraille.signosBasicos,
  basicos: jsonData.musicografiaBraille.signosBasicos,
  notas: jsonData.musicografiaBraille.signosBasicos.notasYSilencios.descripcion,
  silencios:
    jsonData.musicografiaBraille.signosBasicos.notasYSilencios.descripcion,
  signoso:
    jsonData.musicografiaBraille.signosBasicos.signosDeOctava.descripcion,
  octava: jsonData.musicografiaBraille.signosBasicos.signosDeOctava.descripcion,
  claves: jsonData.musicografiaBraille.claves.descripcion,
  alteraciones:
    jsonData.musicografiaBraille.alteracionesCompasArmadura.descripcion,
  compas: jsonData.musicografiaBraille.alteracionesCompasArmadura.descripcion,
  armadura: jsonData.musicografiaBraille.alteracionesCompasArmadura.descripcion,
  grupos: jsonData.musicografiaBraille.gruposRitmicos.descripcion,
  ritmicos: jsonData.musicografiaBraille.gruposRitmicos.descripcion,
  acordes: jsonData.musicografiaBraille.acordes.descripcion,
  ligaduras: jsonData.musicografiaBraille.ligaduras.descripcion,
};

const MicrophonePage = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [info, setInfo] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const [color, setColor] = useState("#a8d5e2");
  const [listenings, setListeningState] = useState(false);

  const speak = (text, callback) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    setSpeaking(true);
    setColor("#f66b0e");
    setListeningState(false);
    SpeechRecognition.stopListening();
    utterance.onend = () => {
      setSpeaking(false);
      setColor("4F4F96");
      setListeningState(true);
      if (callback) callback();
    };
    window.speechSynthesis.speak(utterance);
  };

  const handleTranscript = async () => {
    if (transcript && !speaking) {
      const matchedTopic = Object.keys(topics).find((key) =>
        transcript.toLowerCase().includes(key)
      );
      if (matchedTopic) {
        const response = topics[matchedTopic];
        setInfo(response);
        speak(response, () => {
          SpeechRecognition.startListening({ continuous: false });
        });
      } else {
        speak(
          "No encontré información sobre eso. ¿Puedes intentar con otro tema?",
          () => SpeechRecognition.startListening({ continuous: false })
        );
      }

      resetTranscript();
    }
  };

  const requestMicPermission = async () => {
    try {
      // Check if the browser supports permissions API
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop()); // Stop the stream after checking
      return true;
    } catch (error) {
      speak(
        "Necesito permiso para usar el micrófono. Por favor, permite el acceso al micrófono.",
        () => SpeechRecognition.stopListening()
      );
      return false;
    }
  };

  useEffect(() => {
    const startListeningWithPermission = async () => {
      const hasPermission = await requestMicPermission();

      if (hasPermission) {
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
          speak("Tu navegador no soporta reconocimiento de voz.");
          return;
        }
        speak(
          "Hola, soy tu asistente. ¿Sobre qué tema te gustaría saber?",
          () => SpeechRecognition.startListening({ continuous: false })
        );
      }
    };

    startListeningWithPermission();

    return () => {
      SpeechRecognition.stopListening();
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    if (!listening && transcript) {
      handleTranscript();
    }
  }, [listening, transcript]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-bold">Asistente de Voz</h1>
      <Listening color={color} />
      <p>Estado: {listenings ? "Escuchando..." : "Inactivo"}</p>
    </div>
  );
};

export default MicrophonePage;
