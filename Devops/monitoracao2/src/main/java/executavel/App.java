package executavel;

import conexao.Conexao;
import telas.Login;
import telas.Monitoracao;
import telas.Splash;

public class App {

    public static void main(String[] args) {
		Conexao con = new Conexao();
		con.conectar();
		con.conectou();
//               Splash n1 = new Splash();

    }
}
