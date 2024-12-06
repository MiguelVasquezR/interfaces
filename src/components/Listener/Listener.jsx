import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "regenerator-runtime/runtime";

const App = () => {
  const { transcript, listening } = useSpeechRecognition();

  return (
    <div>
      <h1>Asistente de Voz</h1>
      <p>Estado: {listening ? "Escuchando..." : "Inactivo"}</p>
      <button onClick={SpeechRecognition.startListening}>
        Comenzar a escuchar
      </button>
      <button onClick={SpeechRecognition.stopListening}>Detener</button>
      <p>Comando detectado: {transcript}</p>
    </div>
  );
};

export default App;
