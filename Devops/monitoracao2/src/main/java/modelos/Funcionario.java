package modelos;

//import com.mysql.cj.conf.PropertyKey;
//import com.mysql.cj.xdevapi.Result;
import conexao.Conexao;
import java.sql.SQLData;
import java.util.ArrayList;
import java.util.Calendar;
import telas.Login;
import telas.Monitoracao;

public class Funcionario {

    private String email;
    private String serialNumber;
    private ArrayList<String> login;
    private Integer idEmpresa;
    private Integer idMaquina;
    private String chatId;

    public Funcionario(String email, String serialNumber) {
        this.email = email;
        this.serialNumber = serialNumber;
        login = new ArrayList<>();
    }

    public ArrayList logar() {

        Maquina m = null;
        Conexao conn = new Conexao();
        conn.conectar();

        String sql = "SELECT email, Fk_Empresa FROM  Funcionario where email = '" + email + "'";

        try {
            conn.resultset = conn.statiment.executeQuery(sql);
            while (conn.resultset.next()) {
                this.email = conn.resultset.getString(1);
                this.idEmpresa = conn.resultset.getInt(2);

                String sql2 = "SELECT * FROM Maquina where serial_Number = " + serialNumber + "";
                conn.resultset = conn.statiment.executeQuery(sql2);
                while (conn.resultset.next()) {
                    this.serialNumber = conn.resultset.getString(3);
                    this.idMaquina = conn.resultset.getInt(1);
                    String sql3 = "SELECT chatId FROM Empresa where idEmpresa = " + this.idEmpresa + "";
                    conn.resultset = conn.statiment.executeQuery(sql3);
                    while (conn.resultset.next()) {
                        this.login.add(this.idEmpresa.toString());
                        this.login.add(this.idMaquina.toString());
                        this.login.add(email);
                        this.login.add(conn.resultset.getInt(1) + "");
                        this.login.add(serialNumber);

                        return login;
                    }
                }
            }

            conn.fecharConexao();

        } catch (Exception e) {
            System.out.println("Erro");
        }
        return null;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Funcionario{" + "email=" + email + '}';
    }

}
