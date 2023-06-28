package pac;

public class mamiferos extends Animais{
    
    // Atributos
    private String mudarPele;
    private String tipoSentido;
    private String alimentacao;

    // Metodos
    public void correr() {

    }

    // Metodos Especiais
    public String getMudarPele() {
        return mudarPele;
    }

    public void setMudarPele(String mudarPele) {
        this.mudarPele = mudarPele;
    }

    public String getTipoSentido() {
        return tipoSentido;
    }

    public void setTipoSentido(String tipoSentido) {
        this.tipoSentido = tipoSentido;
    }

    public String getAlimentacao() {
        return alimentacao;
    }

    public void setAlimentacao(String alimentacao) {
        this.alimentacao = alimentacao;
    }
}
