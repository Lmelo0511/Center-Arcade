import java.util.Scanner;

public class teste5 {

	public static void main(String[]args) {
	
		Scanner scanner = new Scanner (System.in);

		int[] idade = new[75];
	
		for (int i = 0; i < numeros.length; i++) {

			System.out.println("Digite sua idade" + (i + 1) + ":");
			idade[i] = scanner.nextInt();
	
		}

		if (idade[i] >= 18) {

			System.out.println("Maior de Idade");

		} else {

			System.out.println("Menor de Idade");
		}
	}
}
