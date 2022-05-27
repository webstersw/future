import { useState, useEffect } from "react";
import { Exercise } from "./interface";
import * as React from 'react'
import Search from "./Search";

function filterExercises(exercises: Exercise[], search?: string): Exercise[] {
    console.log(search);
    if(search) {
      let lowerSearch = search.toLowerCase();
      return exercises.filter((e) => e.name.toLowerCase().includes(lowerSearch));
    }
    else {
      return exercises;
    }
  };
    
const Browse: React.FC<{onSelect: (selected: Exercise) => void, selectedId: string}> = ({onSelect, selectedId}) => {
    function getExercises(): void {
      const apiUrl: string = 'https://candidate.staging.future.co/sandbox/api/exercises';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setExercises(data);
          setFiltered(data);
        });
    };
    
    const [exercises, setExercises] = useState<Exercise[]>(); 
    const [filtered, setFiltered] = useState<Exercise[]>(); 
  
    useEffect(() => {
      if(!exercises) {
        getExercises();
      }
    }, [exercises, filtered]);
    return (
      <div className="BrowseContent">
        <Search onSearch={(searchString: string) => setFiltered(filterExercises(exercises, searchString)) }/>
        <ul>
          {
            filtered?.map((e) => 
              <li key={e.id} onClick={() => onSelect(e)}>
                <a href="#" className={selectedId === e.id ? "Active" : ""}>{e.name}</a>
              </li>
            )
          }
        </ul>
      </div>
    );
  }

  export default Browse;