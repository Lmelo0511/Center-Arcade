import java.util.Scanner;

public class teste2 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Informe sua Massa: ");
        double peso = scanner.nextDouble();
        System.out.println("Informe sua Altura: ");
        double alt = scanner.nextDouble();

        double imc = peso / Math.pow(alt, 2);

        System.out.printf("IMC = %.2f", imc);

        if (imc < 15) {
            System.out.println("Seu resultado de Anorexia");
        } 
        else if (imc < 20) {
            System.out.println("Seu resultado é Subpeso");
        } 
        else if (imc >= 20) {
            System.out.println("Seu resultado é Normal");
        } 
        else if (imc > 25) {
            System.out.println("Seu resultado é Sobrepeso");
        } 
        else {
            System.out.println("Seu resultado é Obesidade");
        }
    }
}