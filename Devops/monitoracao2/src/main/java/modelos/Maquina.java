package modelos;

public class Maquina {

    private String serialNumber;

    public Maquina(String serialNumber) {
        this.serialNumber = serialNumber;

    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    @Override
    public String toString() {
        return "Maquina{" + "serialNumber=" + serialNumber + '}';
    }

}
