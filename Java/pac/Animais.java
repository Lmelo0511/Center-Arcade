package pac;


public class Animais {

    // Atributos
    private String especie;
    private int idade;
    private String sexo;

    // Metodo
    public void fazerBarulho() {

    }

    // Metodos Especiais
    public String getEspecie() {
        return especie;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    } 

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    @Override
    public String toString() {
        return "Animais{" + "especie=" + especie + ", idade=" + idade + ",sexo=" + sexo;}
    }

