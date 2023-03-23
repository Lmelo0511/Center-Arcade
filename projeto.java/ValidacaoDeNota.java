import java.util.Scanner;

public class ValidacaoDeNota {
 
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Informe sua Primeira Nota: ");
        double N1 = scanner.nextDouble();
        System.out.println("Informe sua Segunda Nota: ");
        double N2 = scanner.nextDouble();

        double Media = (N1 + N2) / 2;

        if (Media >= 7) {
            System.out.println("Parabéns, você está aprovado!");
        } else {
            System.out.println("Você está de exame. Informe sua Terceira Nota: ");
            double N3 = scanner.nextDouble();

            double Media2 = (N1 + N2 + N3) / 3;

            if (Media2 >= 5) {
                System.out.println("Você foi aprovado no exame!");
            } else {
                System.out.println("Voçê esta de DP");
            }
        }
    }
}
