package executavel;

import conexao.Conexao;
import java.util.Timer;
import java.util.TimerTask;
import modelos.Disco;
import modelos.Funcionario;
import modelos.Memoria;
import modelos.Processador;
import telas.Login;
import telas.Monitoracao;
import telas.Splash;

public class App {

    public static void main(String[] args) {
        Processador proc = new Processador();

        Timer timer = new Timer(); // Instânciando um objeto tTmer = esse objeto de tempo.

        TimerTask taskCpu = new TimerTask() {  // Instânciando um objeto TimerTask = esse objeto é tem uma tarefa com um determinado tempo.
            @Override
            public void run() {
                Processador proc = new Processador();
                proc.gravarCpu();
            }
        };

        TimerTask taskDisco = new TimerTask() { // Instânciando um objeto TimerTask = esse objeto é tem uma tarefa com um determinado tempo.
            @Override
            public void run() {
                Disco disk = new Disco();
                disk.gravarDisco();
            }
        };

        TimerTask taskMemoria = new TimerTask() { // Instânciando um objeto TimerTask = esse objeto é tem uma tarefa com um determinado tempo.
            @Override
            public void run() {
                Memoria memory = new Memoria();
                memory.gravarMemory();
            }
        };

        timer.scheduleAtFixedRate(taskCpu, 30000, 30000); //Estipulando o tempo que essa tarefa vai ser rodada.
        timer.scheduleAtFixedRate(taskMemoria, 30000, 30000);
        timer.scheduleAtFixedRate(taskDisco, 30000, 30000);
        new Login();

    }

    // Splash n1 = new Splash();
}
