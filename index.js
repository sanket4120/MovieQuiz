let readlineSync = require('readline-sync');
const chalk = require('chalk');

const heading = chalk.bold.rgb(153, 255, 51);
const success = chalk.rgb(0, 255, 0);
const failure = chalk.rgb(255, 0, 0);
const message = chalk.rgb(247, 255, 0);

let score;
let totalScore = 0;

console.log(heading('Welcome to the Movies Quiz..🎬 \n'));

const userName = readlineSync.question('please enter your name:');
console.log(
  message(
    `\nHello ${userName}, it's a 3 level game in order to clear each level you have to give atleast 5 correct answers.`
  )
);

const questions1 = [
  {
    question:
      'What was the number of applicants that fillep up for ICE according to the professor Virus?',
    opt: 'a]6 Lakhs  \nb]4.5 Lakhs  \nc]4 Lakhs  \nd]5 lakhs',
    ans: 'a',
  },
  {
    question:
      'What was the name of the college where Rancho and Chatur studied?',
    opt:
      'a]Indian College of Engineering  \nb]Indian Institutes of Technology  \nc]Imperial College of Engineering  \nd]Imperial Centre of Engineering',
    ans: 'c',
  },
  {
    question:
      "Rancho, Farhan, and Raju are caught gate-crashing Virus' daughter's wedding. Whose guest does Rancho claim to be?",
    opt:
      'a]Ladkewalo ki taraf se  \nb]Ladkiwalon ki taraf se \nc]Science ki taraf se  \nd]Engineering ki taraf se',
    ans: 'c',
  },
  {
    question: `How did Ranchhoddas "Rancho" Shamaldas Chanchad and Chote aka Phunsuk Wangdu actually know each other?`,
    opt: `a]He was the son of Rancho's gardener  \nb]He was Rancho's school friend \nc]He was Rancho's illegitimate brother  \nd]He was Rancho's driver's son`,
    ans: 'a',
  },
  {
    question:
      'What was the time of birth of Farhan in the movie according to him?',
    opt: 'a]3:15 am  \nb]6:15 am  \nc]4:15 pm  \nd]5:15 pm',
    ans: 'd',
  },
  {
    question: 'What was the price of shoes on which Rancho poured mint sauce?',
    opt: 'a]$1200  \nb]$1000  \nc]$450  \nd]$300',
    ans: 'd',
  },
  {
    question: 'For how many minutes does virus listen to opera?',
    opt: 'a]30  \nb]5  \nc]7.5  \nd]12',
    ans: 'c',
  },
  {
    question: 'Which car model did Chatur own in his late life?',
    opt: 'a]ford  \nb]lamborgini  \nc]bmw  \nd]tesla',
    ans: 'b',
  },
];

const questions2 = [
  {
    question: 'Who is not in the movie?',
    opt: 'a]Baku  \nb]Buckey Barnes  \nc]Ant-man  \nd]Heimdall',
    ans: 'c',
  },
  {
    question: 'How many Infinity Stones are there?',
    opt: 'a]four  \nb]five \nc]six  \nd]infinite',
    ans: 'c',
  },
  {
    question: "Who didn't get dusted?",
    opt: 'a]falcon  \nb]vision  \nc]groot  \nd]black panther',
    ans: 'b',
  },
  {
    question: "Whose last words were, 'Oh man...'?",
    opt: 'a]peter quill  \nb]peter parker  \nc]drax  \nd]nick fury',
    ans: 'a',
  },
  {
    question: "What is the name of Thor's new weapon?",
    opt: 'a]mjolnir  \nb]strombreaker  \nc]jarnbjorn \nd]axe of angarruumus',
    ans: 'b',
  },
  {
    question: 'How many times does Vision die?',
    opt: 'a]0  \nb]1  \nc]2 \nd]3',
    ans: 'c',
  },
  {
    question: 'Where did Thanos get the Soul Stone?',
    opt: 'a]knowhere  \nb]xandar  \nc]vormir \nd]earth',
    ans: 'c',
  },
  {
    question: `Who says, "She's not alone."?`,
    opt: 'a]okoye  \nb]scarlet witch  \nc]black widow \nd]captain america',
    ans: 'c',
  },
];

const questions3 = [
  {
    question:
      'How long did Cobb and Mal spend in Limbo, leading to her disconnect with reality? ',
    opt: 'a]30  \nb]40  \nc]50  \nd]60',
    ans: 'c',
  },
  {
    question:
      'Which famous artist were the paradoxical stairs inspired by in the film?',
    opt:
      'a]Salvador Dali \nb]M.C. Escher \nc]Pablo Picasso \nd]Leonardo da Vinci',
    ans: 'b',
  },
  {
    question: ' What does Mal use to try and attack Ariadne?',
    opt: 'a]Acid \nb]A knife \nc]A gun \nd]A piece of glass.r',
    ans: 'd',
  },
  {
    question:
      "What do the numbers '528-491', scattered throughout the movie, actually mean?",
    opt: `a]They are the combination to a safe.  \nb]It's a code language they use.  \nc]It's Arthur's totem. \n d]That's the number they want to incept.`,
    ans: 'a',
  },
  {
    question: 'What does the sedative created by Yusuf the chemist do?',
    opt: `a]It keeps people in Limbo.  \nb]It makes you forget negative projections like Mal.  \nc]It makes you conscious you're in a dream. \nd]It stabilises the dream world.`,
    ans: 'd',
  },
  {
    question: "What is Saito's totem?",
    opt: 'a]A loaded die.  \nb]A chess piece.  \nc]A rug. \nd]A poker chip.',
    ans: 'c',
  },
  {
    question: 'Why is Arthur in zero-gravity during the hotel fight scene?',
    opt: `a]Because they're on a spaceship in the dream level above.  \nb]Because they're in a falling car in the dream level above..  \nc]Because Eames bent the rules of the labyrinth. \nd]Because they're falling down a mountain in the dream above.`,
    ans: 'b',
  },
  {
    question: 'What does Saito hire Cobb to do to exactly?',
    opt: `a]Steal information from Robert Fischer.  \nb]Incept the idea that Robert should continue his father's legacy.  \nc]Incept the idea that Robert should give the reigns of the company to someone else. \nd]ncept the idea that Robert should dissolve his father's company`,
    ans: 'd',
  },
];

const highScores = [
  {
    name: 'Sanket',
    score: 21,
  },
  {
    name: 'Kshitij',
    score: 19,
  },
  {
    name: 'Mohan',
    score: 18,
  },
];

const level1Score = startLevel(1, '3 idiots', questions1);

if (level1Score) {
  console.log(message('\n Starting level-2...'));
  const level2Score = startLevel(2, 'Avengers Infinity War', questions2);

  if (level2Score) {
    console.log(message('\n Starting level-3...'));
    const level3Score = startLevel(3, 'Inception', questions3);

    if (level3Score) {
      console.log(
        success('CONGRATULATIONS...!!! \n You have cleared all levels..!!')
      );
      console.log(message(`Your total score is ${totalScore}`));

      console.log(message('\nCheckout the high scores list\n'));
      for (let i = 0; i < highScores.length; i++) {
        console.log(highScores[i].name + ' : ' + highScores[i].score);
      }

      console.log(
        message(
          "\nIf you have beaten anyone's score then send me the screenshot, so that I can update the high scores list."
        )
      );
    }
  }
}

function startLevel(level, movie, questions) {
  score = 0;
  console.log(message(`\n Level ${level} \n Movie:${movie}`));

  for (let i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].opt, questions[i].ans);
  }

  totalScore += score;

  console.log(
    '\n----------------------------------------------------------------------'
  );
  console.log(heading(`Your score for level-${level}: ${score}`));

  if (score >= 5) {
    console.log(success(`Congratulations you have cleared level-${level}`));
    console.log(
      '\n----------------------------------------------------------------------'
    );
    return score;
  } else {
    console.log(
      failure(`You failed to clear level-${level}.Better Luck next time..!!`)
    );
  }
}

function play(question, opt, ans) {
  console.log('\n' + question);
  console.log(opt);

  let answer = readlineSync.question('Answer:');

  if (answer === ans) {
    score += 1;
    console.log(success('Correct answer!'));
  } else {
    console.log(failure('Wrong answer!'));
  }
  console.log(message(`Current Score:${score}`));
}
