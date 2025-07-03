export interface Answer {
  readonly id: string;
  text: string;
  isCorrect: boolean;
}

export interface PlayerRecordedAnswer extends Answer {
  answer: string;
  isCorrect: boolean;
  score: number;
  timeTaken: number;
}

export interface Question {
  readonly id: string;
  text: string;
  type:
    | 'textinput'
    | 'truefalse'
    | 'mcq'
    | 'image_textinput'
    | 'image_truefalse'
    | 'image_mcq';
  image?: string;
  timer?: number;
  options?: Answer[];
  textInputCorrectAnswer?: string | number;
  correctAnswer?: string;
}

export interface TeamMember {
  id: string;
  name: string;
}

export interface DetailedPlayer {
  readonly id: string;
  name: string;
  score: number;
  answers: { [questionId: string]: PlayerRecordedAnswer };
  type: 'Single' | 'Team';
  teamName?: string;
  questionsAttempted?: number;
}

export interface Team {
  readonly id?: string;
  name: string;
  players?: string[];
  type: 'Single' | 'Team';
  members: TeamMember[];
  captainId?: string;
}

export interface Schematics {
  timeLimit: number;
  timeGap: number;
  numRounds: number;
  gameMode: 'manual' | 'automatic';
  startTime?: Date | string;
}

export interface Rumble {
  readonly id: string;
  name: string;
  status: 'active' | 'completed' | 'draft' | 'in-game';
  questions: Question[];
  teams: Team[];
  schematics: Schematics;
  playerDetails?: DetailedPlayer[];
  currentQuestionIndex: number;
  gameMode: 'manual' | 'automatic';
  description: string | null;
  create_time: Date;
  created_by: string | null;
  deleted: Date | null;
  currentQuestionStartTime?: Date | null; 
}

export interface RumbleCreateInput {
  name: string;
  description?: string | null;
  created_by?: string;
  questions?: Question[];
  schematics?: Schematics;
  teams?: Team[];
  status?: 'active' | 'completed' | 'draft';
  currentQuestionStartTime?: Date | null; 
  playerDetails?: DetailedPlayer[]; 
}
export interface RumbleUpdateInput {
  id?: string; 
  name?: string;
  description?: string | null;
  created_by?: string;
  questions?: Question[];
  schematics?: Schematics;
  teams?: Team[];
  status?: 'active' | 'completed' | 'draft' | 'in-game';
  currentQuestionStartTime?: Date | null;
  playerDetails?: DetailedPlayer[];
  currentQuestionIndex?: number;
  gameMode?: 'manual' | 'automatic';
}
export interface PlayerLobbyInfo {
  name: string;
  type: 'Single' | 'Team';
  id: string;
  teamName?: string;
}

export interface LobbyTeam {
  name: string;
  members: TeamMember[];
  captainId?: string;
}

export interface LobbyStatusResponse {
  players: PlayerLobbyInfo[];
  teams: LobbyTeam[];
  captain?: string;
  gameStarted: boolean;
  gameStartTime?: string;
  currentQuestionIndex?: number;
  rumbleName?: string;
  questionsCount?: number;
}