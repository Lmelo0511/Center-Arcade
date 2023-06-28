package dispositivo;

public class Controle {
    
    public static void main(String[] args) {

		ControleRemoto c = new ControleRemoto();
		c.ligar();
		c.abrirMenu();
		c.menosVolume();
        c.desligar();
		c.fecharMenu();
	}
}
