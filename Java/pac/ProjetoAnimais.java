package pac;

public class ProjetoAnimais {
    public static void main(String[] args) {
        
        // Programa Principal
        Animais a1 = new Animais();
        aves a2 = new aves();
        mamiferos a3 = new mamiferos();
        anfibios a4 = new anfibios();

        a1.setEspecie("Animais");
        a2.setEspecie("Aguia");
        a3.setEspecie("Morcego");
        a4.setEspecie("Rã");

        System.out.println(a1.toString());
        System.out.println(a2.toString());
        System.out.println(a3.toString());
        System.out.println(a4.toString());
    }
}
