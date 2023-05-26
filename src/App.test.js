import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
//import StartPage from './Pages/StartPage'
import { MemoryRouter } from 'react-router-dom';
import Questions from "./Components/Questions";
import QuizPage from './Pages/QuizPage';


/* test('renders StartPage component', () => {
  render(
    <MemoryRouter>
      <StartPage /> 
    </MemoryRouter>
  );
  const startButton = screen.getByRole('button', { name: /start/i });
  expect(startButton).toBeInTheDocument();
});

test('input field updates the name state', () => {
  render(
    <MemoryRouter>
      <StartPage />
    </MemoryRouter>
  );
  const nameInput = screen.getByPlaceholderText('Enter your name');
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  expect(nameInput.value).toBe('John Doe');
});
 */

describe('Questions', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  test('renders users when API call succeeds', async () => {

    const currentIndex = 0;
    const score = 0;
    const isPending = false;
    const answers = [];
    const wrongAnswersAndQuestions = [];
    const category = 9;
    const difficulty = "easy";
    const quizData = [
      {
          "category": "General Knowledge",
          "type": "multiple",
          "difficulty": "easy",
          "question": "Where is the train station &quot;Llanfair&shy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch&quot;?",
          "correct_answer": "Wales",
          "incorrect_answers": [
              "Moldova",
              "Czech Republic",
              "Denmark"
          ]
      },
      {
          "category": "General Knowledge",
          "type": "multiple",
          "difficulty": "easy",
          "question": "How would one say goodbye in Spanish?",
          "correct_answer": "Adi&oacute;s",
          "incorrect_answers": [
              " Hola",
              "Au Revoir",
              "Salir"
          ]
      },
      {
          "category": "General Knowledge",
          "type": "multiple",
          "difficulty": "easy",
          "question": "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
          "correct_answer": "Spruce Goose",
          "incorrect_answers": [
              "Noah&#039;s Ark",
              "Fat Man",
              "Trojan Horse"
          ]
      },
      {
          "category": "General Knowledge",
          "type": "multiple",
          "difficulty": "easy",
          "question": "When someone is inexperienced they are said to be what color?",
          "correct_answer": "Green",
          "incorrect_answers": [
              "Red",
              "Blue",
              "Yellow"
          ]
      },
      {
          "category": "General Knowledge",
          "type": "multiple",
          "difficulty": "easy",
          "question": "The Flag of the European Union has how many stars on it?",
          "correct_answer": "12",
          "incorrect_answers": [
              "10",
              null,
              "16"
          ]
      },
      {
          "category": "General Knowledge",
          "type": "boolean",
          "difficulty": "easy",
          "question": "A pasodoble is a type of Italian pasta sauce.",
          "correct_answer": "False",
          "incorrect_answers": [
              null
          ]
      },
      {
          "category": "General Knowledge",
          "type": "multiple",
          "difficulty": "easy",
          "question": "Foie gras is a French delicacy typically made from what part of a duck or goose?",
          "correct_answer": "Liver",
          "incorrect_answers": [
              null,
              "Stomach",
              "Intestines"
          ]
      },
      {
          "category": "General Knowledge",
          "type": "multiple",
          "difficulty": "easy",
          "question": "Who is the youngest person to recieve a Nobel Prize?",
          "correct_answer": "Malala Yousafzai",
          "incorrect_answers": [
              "Lawrence Bragg",
              "Werner Heisenberg",
              "Yasser Arafat"
          ]
      },
      {
          "category": "General Knowledge",
          "type": "multiple",
          "difficulty": "easy",
          "question": "Which of the following is not an Ivy League University?",
          "correct_answer": "Stanford",
          "incorrect_answers": [
              null,
              "Harvard",
              "Princeton"
          ]
      },
      {
          "category": "General Knowledge",
          "type": "multiple",
          "difficulty": "easy",
          "question": "Which of the following blood component forms a plug at the site of injuries?",
          "correct_answer": "Platelets",
          "incorrect_answers": [
              "Red blood cells",
              "White blood cells",
              null
          ]
      }
  ]

    fetchMock.mockResolvedValue({ status: 200, json: jest.fn(() => quizData) })
    render(<QuizPage />)
    expect(await screen.findByText('Wales')).toBeInTheDocument()
  })

  //test('renders error when API call fails', async () => {})
})
