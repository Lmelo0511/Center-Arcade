package pac;

public class anfibios extends Animais{
    
    //Atributos
    private Double tamanho;
    private String corPele;
    private String regiaoGeografica;

    // Metodos
    public void nadar() {

    }
    // Metodos Especiais
    public Double getTamanho() {
        return tamanho;
    }

    public void setTamanho(Double tamanho) {
        this.tamanho = tamanho;
    }

    public String getCorPele() {
        return corPele;
    }

    public void setCorPele(String corPele) {
        this.corPele = corPele;
    }

    public String getRegiaoGeografica() {
        return regiaoGeografica;
    }

    public void setRegiaoGeografica(String regiaoGeografica) {
        this.regiaoGeografica = regiaoGeografica;
    }
}
