// DICE ROLLER PROGRAM

let intervalId;

function rollDice()
{
    const numOfDice = document.getElementById("numOfDice").value;
    const diceImages = document.getElementById("diceImages");
    const rollButton = document.getElementById("rollButton");

    rollButton.disabled = true;

    intervalId = setInterval(() => 
    {
        const images = [];
        
        for (let i = 0; i < numOfDice; i++)
        {
            const value = Math.floor(Math.random() * 6) + 1;
            images.push(`<img src="dice_images/dice${value}.png">`);
        }   
        diceImages.innerHTML = images.join('');
    }, 100);

    setTimeout(() => 
    {
        clearInterval(intervalId);
        const finalImages = [];
        for(let i = 0; i < numOfDice; i++)
            {
                const value = Math.floor(Math.random() * 6) + 1;
                finalImages.push(`<img src="dice_images/dice${value}.png">`);
            }   
        diceImages.innerHTML = finalImages.join(''); 

        rollButton.disabled = false;       
    }, 2000);
}