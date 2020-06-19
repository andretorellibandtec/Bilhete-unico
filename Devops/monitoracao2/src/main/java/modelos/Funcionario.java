package modelos;

import com.mysql.cj.conf.PropertyKey;
import com.mysql.cj.xdevapi.Result;
import conexao.Conexao;
import java.sql.SQLData;
import telas.Login;
import telas.Monitoracao;

public class Funcionario {

    private String email;
    private String senha;

    public Funcionario(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }

    public Funcionario logar() {

        Conexao conn = new Conexao();
        conn.conectar();
        String sql = "SELECT email , senha FROM  Funcionario where email = '" + email + "'  and  senha = '" + senha + "'";

        try {
            conn.resultset = conn.statiment.executeQuery(sql);
            while (conn.resultset.next()) {
                Funcionario f = new Funcionario(conn.resultset.getString(1), conn.resultset.getString(2));
                return f;
            }
            conn.fecharConexao();

        } catch (Exception e) {
            return null;
        }
        return null;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

}
