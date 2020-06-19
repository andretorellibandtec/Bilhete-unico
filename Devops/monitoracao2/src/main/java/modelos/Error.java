package modelos;

import conexao.Conexao;
import java.util.Calendar;
import java.util.GregorianCalendar;

public class Error {

    private String descricao;
    private String erro;

    Conexao conn = new Conexao();

    public Error() {
        conn.conectar();
        conn.conectou();
    }

    public Boolean cadastrarError(Exception erro) {

        Calendar dataCalendar = new GregorianCalendar();
        descricao = dataCalendar.getTime().toString();

        try {
            String sql = "insert into Erro(descricao,erro) "
                    + "values ('" + descricao + "','" + erro + "')";
            conn.statiment.executeQuery(sql);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }

    }

}
