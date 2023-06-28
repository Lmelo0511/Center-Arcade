const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

    rl.question("Informe sua Primeira Nota: ", function(N1) {
    rl.question("Informe sua Segunda Nota: ", function(N2) {
        const Media = (parseFloat(N1) + parseFloat(N2)) / 2;

        if (Media >= 7) {
            console.log("Parabéns, você está aprovado! Sua média semestral é de: " + Media);
        } else {
            l.question("Você está de exame. Informe sua nota do exame: ", function(N3) {
            const Media2 = ((parseFloat(N1) + parseFloat(N2)) / 2 + parseFloat(N3)) / 2;

                if (Media2 >= 5) {
                    console.log("Você foi aprovado no exame!");
                } else {
                    console.log("Você está de DP");
                }

                rl.close();
            });
        }
    });
});