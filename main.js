function playGame(playerChoice) {

 const choices = ['🪨', '📄', '🗡️'];
 
 const computerChoice = choices[Math.floor(Math.random() * 3)];
 
 const userPointsElement = document.getElementById('userpoints');
 const computerPointsElement = document.getElementById('computerpoints');
 
 let userPoints = parseInt(userPointsElement.textContent);
 let computerPoints = parseInt(computerPointsElement.textContent);
 
 let result = '';
 if (playerChoice === computerChoice) {
     result = 'Empate';
 } else if (
     (playerChoice === '🪨' && computerChoice === '🗡️') ||
     (playerChoice === '📄' && computerChoice === '🪨') ||
     (playerChoice === '🗡️' && computerChoice === '📄')
 ) {
     result = 'YOU WIN! 🎉';
     userPoints++;
 } else {
     result = 'YOU LOSE! 💀';
     computerPoints++;
 }
 userPointsElement.textContent = userPoints;
 computerPointsElement.textContent = computerPoints;
 
 document.getElementById('result').innerHTML = `
     Elegiste: ${playerChoice}<br>
     Computadora eligió: ${computerChoice}<br>
     Resultado: ${result}
 `;
}