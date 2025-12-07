export interface CharacterCounterProps{
    minWords?: number;
    maxWords?: number;
    targetReadingTime?: number; // in minutes
}

export interface TextStats {
    characterCount: number;
    wordCount: number;
    readingTime: number; // in minutes
}
export interface StatsDisplayProps{
    stats: TextStats;
    showReadingTime?: boolean;
}

export interface TextInputProps{
    onTextChange: (text: string) => void;
    placeholder?: string;
    initialValue?: string;
}
export type goalType = 'Min. Words' | 'Max. Words' | 'Target Reading Time'; 

export interface GoalAlertProps{
    goalName: goalType;
    goalAmount: CharacterCounterProps;
    stats: TextStats;
}