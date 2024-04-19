function playGame(playerChoice) {

 const choices = ['🪨', '📄', '🗡️'];
 
 const computerChoice = choices[Math.floor(Math.random() * 3)];

 let result = '';
 if (playerChoice === computerChoice) {
     result = 'Empate';
 } else if (
     (playerChoice === '🪨' && computerChoice === '🗡️') ||
     (playerChoice === '📄' && computerChoice === '🪨') ||
     (playerChoice === '🗡️' && computerChoice === '📄')
 ) {
     result = '¡Ganaste!';
 } else {
     result = 'Perdiste';
 }
 
 
 document.getElementById('result').innerHTML = `
     Elegiste: ${playerChoice}<br>
     Computadora eligió: ${computerChoice}<br>
     Resultado: ${result}
 `;
}