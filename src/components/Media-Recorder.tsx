import { useReactMediaRecorder } from "react-media-recorder";
import { useState, FC } from "react";
export const MediaRecorder: FC = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const [recordState, setRecordState] = useState<boolean>(true);

  const handleRecording = (): void => {
    if (recordState) {
      startRecording();
      setRecordState(false);
    } else {
      stopRecording();
      setRecordState(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <button
        onClick={handleRecording}
        className="px-8 py-2 bg-red-950 text-white w-32 my-4 hover:bg-red-900"
      >
        {recordState ? <h3>Record</h3> : <h3>Stop</h3>}
      </button>

      {mediaBlobUrl && (
        <div>
          <a
            href={mediaBlobUrl}
            download="recording.mp3"
            className="py-2 px-6 bg-blue-400 mx-16 hover:bg-blue-300"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
};
