package modelos;

import conexao.Conexao;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.logging.FileHandler;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

public class Log {

    Conexao conn = new Conexao();

    public Log() {
        conn.conectar();
        conn.conectou();
    }

    public Logger logger;
    FileHandler fh;

    public Log(String file_name) throws SecurityException, IOException {

        java.io.File f = new java.io.File(file_name);
        if (!f.exists()) {
            f.createNewFile();
        }

        fh = new FileHandler(file_name, true);
        logger = Logger.getLogger("test");
        logger.addHandler(fh);
        SimpleFormatter formatter = new SimpleFormatter();
        fh.setFormatter(formatter);
    }

    public Boolean cadastrarError(String usuario, String descricao) {

        Calendar dataCalendar = new GregorianCalendar();
        String dataHora = dataCalendar.getTime().toString();

        try {
            String sql = "insert into Erro(usuario,data_hora,descricao) "
                    + "values ('" + usuario + "','" + dataHora + "','" + descricao + "')";
            conn.statiment.executeQuery(sql);

            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }

    }

}
