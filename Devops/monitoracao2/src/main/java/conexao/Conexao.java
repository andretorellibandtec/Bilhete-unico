package conexao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Conexao {

    private Connection conn = null;
    public Statement statiment = null;
    private ResultSet resultset = null;

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
            System.out.println("Successful connection - Schema: " + schema);
        } catch (Exception e) {
            System.err.println(e);
        }
    }

    public void conectou() {
        if (conn != null) {
            System.out.println("conectou");
        } else {
            System.out.println("n�o conectado");
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

    public void buscarFuncionario() {
        String selectSql = "SELECT * FROM Funcionario";

        try (Statement statement = conn.createStatement();
                ResultSet resultSet = statement.executeQuery(selectSql)) {

            // Print results from select statement
            System.out.println("Funcionarios");
            while (resultSet.next()) {
                System.out.println(resultSet.getString(1) + " "
                        + resultSet.getString(2));
            }
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
