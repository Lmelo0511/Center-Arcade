package pac;

public class aves extends Animais{
    
    // Atributos
    private String corPena;
    private int envergaduraAsa;
    private String habitat;

    // Metodos
    public void voar() {

    }

    // Metodos Especiais
    public String getCorPena() {
        return corPena;
    }

    public void setCorPena(String corPena) {
        this.corPena = corPena;
    }

    public int getEnvergaduraAsa() {
        return envergaduraAsa;
    }

    public void setEnvergaduraAsa(int envergaduraAsa) {
        this.envergaduraAsa = envergaduraAsa;
    }

    public String getHabitat() {
        return habitat;
    }

    public void setHabitat(String habitat) {
        this.habitat = habitat;
    }
}
