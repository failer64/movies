import { useState } from 'react';
import './index.scss';


function Result({ length, result, setResult, setActiveQuestion }) {

	const refreshApp = () => {
		setResult(0);
		setActiveQuestion(0);
	}

	return (
		<div className="result">
			<img alt='Congrat' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>Вы отгадали {result} ответа из {length}</h2>
			<button onClick={refreshApp}>Попробовать снова</button>
		</div>
	);
}

function Game({ questions, activeQuestion, setActiveQuestion, setResult }) {


	const progressBar = activeQuestion / questions.length * 100;

	const item = questions[activeQuestion];


	const onClickAnswer = (index) => {
		if (index === item.correct) {
			setResult(prevState => prevState + 1);
		}
		setActiveQuestion(prevState => prevState + 1);
	}

	return (
		<>
			<div className="progress">
				<div style={{ width: `${progressBar}%` }} className="progress__inner"></div>
			</div>
			<h1>
				{
					item.title
				}
			</h1>
			<ul>
				{
					item.variants.map((name, i) =>
						<li key={i} onClick={() => onClickAnswer(i)}>{name}</li>
					)
				}
			</ul>
		</>
	);
}

function App() {

	const [result, setResult] = useState(0);
	const [activeQuestion, setActiveQuestion] = useState(0);

	const questions = [
		{
			title: 'Какого цвета полосатый свитер Фредди Крюгера?',
			variants: ['Красно-синего', 'Оранжево-зеленого', 'Красно-зеленого', 'Оранжево-коричневого'],
			correct: 2,
		},
		{
			title: 'Какой предмет есть в каждой сцене «Бойцовского клуба»?',
			variants: ['Банка Coca-Cola', 'Стаканчик Starbucks', 'Пончик Dunkin', 'Бутылка Pepsi'],
			correct: 1,
		},
		{
			title: 'Кто снял «Молчание ягнят»?',
			variants: ['Уэс Андерсон', 'Джонатан Демме', 'Оливер Стоун', 'Кристофер Нолан'],
			correct: 1,
		},
		{
			title: 'Правда или ложь? Муфасу в «Короле Льве» 1994 года озвучил Джеймс Эрл Джонс',
			variants: ['Правда', 'Ложь'],
			correct: 0,
		},
		{
			title: ' Правда или ложь? В «Джанго освобожденном» Леонардо ДиКаприо специально порезал руку во время сцены',
			variants: ['Правда', 'Ложь'],
			correct: 1,
		},
		{
			title: ' Какое слово завершает цитату из «Апокалипсиса сегодня»: «Я люблю запах ___ поутру»',
			variants: ['Капитуляции', 'Напалма', 'Стрельбы', 'Победы'],
			correct: 1,
		},
	];

	return (
		<div className="App">
			{
				activeQuestion < questions.length
					? <Game questions={questions} activeQuestion={activeQuestion}
						setActiveQuestion={setActiveQuestion} setResult={setResult} />
					: <Result length={questions.length} result={result}
						setResult={setResult} setActiveQuestion={setActiveQuestion}
					/>
			}
		</div>
	);
}

export default App;
