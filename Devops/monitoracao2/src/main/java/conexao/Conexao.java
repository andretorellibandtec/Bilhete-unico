package conexao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Conexao {

    public Connection conn = null;
    public Statement statiment = null;
    public ResultSet resultset = null;

    public void conectar() {
        String hostName = "svrsingletec.database.windows.net"; // update me
        String dbName = "bdsingletec"; // update me
        String user = "localadmin@svrsingletec"; // update me
        String password = "#Gfgrupo3b"; // update me
        String url = String.format("jdbc:sqlserver://%s:1433;database=%s;user=%s;password=%s;encrypt=true;" + "hostNameInCertificate=*.database.windows.net;loginTimeout=30;",
                hostName, dbName, user, password);
        try {
            conn = DriverManager.getConnection(url);
            String schema = conn.getSchema();
            this.statiment = conn.createStatement();

        } catch (Exception e) {
            System.err.println(e);
        }
    }

    public void conectou() {
        if (conn != null) {
            System.out.println("conectou");
        } else {
            System.out.println("não conectado");
        }
    }

    public void fecharConexao() {
        if (conn != null) {
            try {
                this.conn.close();
            } catch (Exception e) {
                System.err.println(e);
            }
        }
    }

}
