import java.util.Scanner;

class LerConsoleComScanner {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int tentativas = 0;
        int limiteDeTentativas = 3;
        int numero = 0;
        int numeroAleatorio = (int) (Math.random() * 11);

        while (tentativas < limiteDeTentativas) {
            System.out.print("Jogue um numero: ");
            numero = scanner.nextInt();
            tentativas++;

            System.out.println("Você jogou o numero: " + numero + "!");
            System.out.println("O computador jogou: " + numeroAleatorio + "!");

            if (numero == numeroAleatorio) {
                System.out.println("Voce ganhou. Parabéns!");
                break;
            } else {
                System.out.println("Você errou.");
            }
        }

        if (tentativas == limiteDeTentativas) {
            System.out.println("Suas tentativas acabaram. O número era " + numeroAleatorio + ".");
        }
    }
}
