import { useState, useEffect } from "react";
import { Exercise, Prediction } from "./interface";
import * as React from 'react'

const Details: React.FC<{selected: Exercise}> = ({selected}) => {
    function getPrediction(selectedId: string): void {
      setLoadingPrediction(true);
      const apiUrl: string = `https://candidate.staging.future.co/sandbox/api/exercises/${selectedId}/predictions`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setPrediction(data);
          setLoadingPrediction(false);
        });
    };
  
    function getDifficulty(level: number): string {
      switch (level) {
        case 0:
          return "Simple"
          break;
        case 1:
          return "Easy"
          break;
        case 2:
          return "Medium"
          break
        case 3:
          return "Hard"
          break;
        default:
          return "Unknown"
          break;
      }
      
    }
    
    const [prediction, setPrediction] = useState<Prediction>();
    const [predictionLoading, setLoadingPrediction] = useState<boolean>(true);
  
    useEffect(() => {
      if(selected && prediction?.exercise_id != selected.id) {
          getPrediction(selected.id);
      }
    }, [prediction, selected]);
  
    
    return (
      <div className="DetailsContent">
        { selected &&
          <div>
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
            <video width="320" height="240" controls key={selected.id}>
              <source src={selected.video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        }
        {!predictionLoading && <h3>Difficulty - {getDifficulty(prediction.skill_level.level)}</h3>}
      </div>
    );
  }

  export default Details