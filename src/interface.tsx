export interface Prediction {
    exercise_id: string,
    predicted_at: string,
    skill_level: SkillLevel,
    prediction_time_cost_millis: number
};

export interface SkillLevel {
    level: number,
    max_level: number,
    prediction_confidence?: SkillLevel
};
  
export interface Exercise {
    name: string,
    id: string,
    description: string,
    muscle_groups: string,
    equipment_required: string,
    movement_patterns: string,
    synonyms: string,
    is_alternating: boolean,
    side: string,
    video: Video,
    audio: Audio
};
  
export interface Video {
    url: string,
    is_flipped: boolean
};
  
export interface Audio {
    url: string
};
  