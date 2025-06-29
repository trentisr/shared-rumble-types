export interface Question {
  id: string;
  text: string;
  type: 'multiple_choice' | 'textinput' | 'image_multiple_choice' | 'image_textinput' | 'truefalse' | 'mcq' | 'image_truefalse' | 'image_mcq';
  image?: string;
  options?: Answer[];
  answered?: boolean;
}
export interface Answer {
  id: string;
  text?: string;
  isCorrect: boolean;
}

// Keep any other shared interfaces you have in this file