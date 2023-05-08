import React, { useState } from 'react';
import styles from './Quizz.css'


export default function Quizz() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Wich is the largest continent?',
			answerOptions: [
				{ answerText: 'Africa', isCorrect: false },
				{ answerText: 'America', isCorrect: false },
				{ answerText: 'Europe', isCorrect: false },
				{ answerText: 'Asia', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of Germany  ?',
			answerOptions: [
				{ answerText: 'frankfurt', isCorrect: false },
				{ answerText: 'stuttgart', isCorrect: false },
				{ answerText: 'bayern', isCorrect: false },
				{ answerText: 'Berlin', isCorrect: true },
			],
		},
		{
			questionText: 'What is the smallest country in the world?',
			answerOptions: [
				{ answerText: 'Qatar', isCorrect: false },
				{ answerText: 'Haiti', isCorrect: false },
				{ answerText: 'tuvalu', isCorrect: false },
				{ answerText: 'Vatican', isCorrect: true },
			],
		},
		{
			questionText: 'What is the tallest building in the world?',
			answerOptions: [
				{ answerText: 'Empire State building', isCorrect: false },
				{ answerText: 'Shanghai tower', isCorrect: false },
				{ answerText: 'China zun', isCorrect: false },
				{ answerText: 'Burj Khalifa', isCorrect: true },
			],
		},
		{
			questionText: 'Wich is the biggest country in africa ?',
			answerOptions: [
				{ answerText: 'Egypt', isCorrect: false },
				{ answerText: 'Congo', isCorrect: false },
				{ answerText: 'sudan', isCorrect: false },
				{ answerText: 'Algeria', isCorrect: true },
			],
		},

		{
			questionText: 'What is the capital of tunisia?',
			answerOptions: [
				{ answerText: 'Monastir', isCorrect: false },
				{ answerText: 'Sousse', isCorrect: false },
				{ answerText: 'Sfax', isCorrect: false },
				{ answerText: 'Tunis', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [text, setText] = useState('click to donate');
	

	const handleReload = () => { 
		setShowScore(false);
	}
	

	const donate = () => { 
		setText('Thank you for your donation')
	}

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quizz'  >
			
			{showScore ? (
				<>
				<div className='score-section'>
					You scored {score} out of {questions.length}
		
			   		<div className='association'>
							<button onClick={donate} >Famine</button>
							<button onClick={donate}>education</button>
							<button onClick={donate} >Droit des enfants</button>
							<button onClick={donate} >Protection de l'environnement</button>
					</div>
					<br/>
					<div>{text} </div>
					
				</div>
				<div>
					<p>click this button to replay</p>
					<button className='' onClick={handleReload} >Reload</button>
					</div>
				</>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					
					</div>
					
				</>
			)}
		</div>
	);
}
