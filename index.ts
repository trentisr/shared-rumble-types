

export interface Answer {
  id: string;
  text?: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple_choice' | 'textinput' | 'image_multiple_choice' | 'image_textinput' | 'truefalse' | 'mcq' | 'image_truefalse' | 'image_mcq';
  image?: string;
  options?: Answer[];
  answered?: boolean;
  textInputCorrectAnswer?: string | number; 
}

export interface TeamMember {
  id: string;
  name: string;
}

export interface Team {
  id?: string; 
  name: string;
  type: 'Single' | 'Team';
  members: TeamMember[];
  captain?: string;
}

export interface Schematics {
  timeLimit: number;
  timeGap: number;
  numRounds: number;
  gameMode: 'manual' | 'automatic';
  startTime?: Date | string; 
}

export interface DetailedPlayer {
  id: string;
  name: string;
}

export interface Rumble {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'draft';
  questions: Question[];
  teams: Team[];
  schematics: Schematics;
  playerDetails?: DetailedPlayer[];
}

export interface RumbleCreateInput {
  name: string;
  description?: string;
  created_by?: string;
  questions?: Question[];
  schematics?: Schematics;
  teams?: Team[];
  status?: 'active' | 'completed' | 'draft';
}

export type RumbleUpdateInput = Partial<RumbleCreateInput> & {
  id?: string;
};