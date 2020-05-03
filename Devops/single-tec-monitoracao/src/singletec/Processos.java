package singletec;

public class Processos {

    private Integer pid;
    private Integer ppid;
    private String nome;
    private Long inicioProcesso;

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public Integer getPpid() {
        return ppid;
    }

    public void setPpid(Integer ppid) {
        this.ppid = ppid;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Long getInicioProcesso() {
        return inicioProcesso;
    }

    public void setInicioProcesso(Long inicioProcesso) {
        this.inicioProcesso = inicioProcesso;
    }

}
