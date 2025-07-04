export interface Answer {
    readonly id: string;
    text: string;
    isCorrect: boolean;
}
export interface PlayerRecordedAnswer extends Answer {
    answer: string;
    score: number;
    timeTaken: number;
}
export type QuestionType = 'textinput' | 'truefalse' | 'mcq' | 'image_textinput' | 'image_truefalse' | 'image_mcq';
export interface Question {
    readonly id: string;
    text: string;
    type: QuestionType;
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
export type PlayerType = 'Single' | 'Team';
export interface DetailedPlayer {
    readonly id: string;
    name: string;
    score: number;
    answers: {
        [questionId: string]: PlayerRecordedAnswer;
    };
    type: PlayerType;
    teamName?: string;
    questionsAttempted?: number;
}
export interface Team {
    readonly id?: string;
    name: string;
    players?: string[];
    type: PlayerType;
    members: TeamMember[];
    captainId?: string;
    score?: number;
}
export interface Schematics {
    timeLimit: number;
    timeGap: number;
    numRounds: number;
    gameMode: 'manual' | 'automatic';
    startTime?: Date | string;
}
export type RumbleStatus = 'active' | 'completed' | 'draft' | 'in-game';
export type GameMode = 'manual' | 'automatic';
export interface Rumble {
    readonly id: string;
    name: string;
    status: RumbleStatus;
    questions: Question[];
    teams: Team[];
    schematics: Schematics;
    playerDetails?: DetailedPlayer[];
    currentQuestionIndex: number;
    gameMode: GameMode;
    description: string | null;
    create_time: Date;
    created_by: string | null;
    deleted: Date | null;
    currentQuestionStartTime?: Date | null;
}
export type RumbleCreateInput = Omit<Partial<Rumble>, 'id' | 'status' | 'create_time' | 'deleted' | 'currentQuestionIndex' | 'gameMode' | 'playerDetails' | 'currentQuestionStartTime'> & {
    name: string;
    status?: Exclude<RumbleStatus, 'in-game' | 'completed' | 'active'>;
    questions?: Question[];
    schematics?: Schematics;
    teams?: Team[];
    description?: string | null;
    created_by?: string;
};
export type RumbleUpdateInput = Partial<Omit<Rumble, 'create_time' | 'deleted' | 'currentQuestionStartTime'>>;
export interface PlayerLobbyInfo {
    name: string;
    type: PlayerType;
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
    captainId?: string;
    gameStarted: boolean;
    gameStartTime?: string;
    currentQuestionIndex?: number;
    rumbleName?: string;
    questionsCount?: number;
}
