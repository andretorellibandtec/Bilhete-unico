package telas;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;

import javax.swing.JFrame;
import javax.swing.JLabel;

import componentes.Botao;
import componentes.Input;
import componentes.Logo;
import componentes.Texto;
import java.util.ArrayList;
import modelos.Funcionario;
import modelos.Log;
import modelos.Maquina;
import modelos.Telegram;

public class Login extends JFrame {

    private Texto relogio = new Texto("", 20, 0, 70, 40);
    private Logo logo = new Logo(85, 70, 110, 25, "singleTec", Color.black);
    private Input login = new Input(30, 142, 210, 30);
    private Input serialNumber = new Input(30, login.getY() + 72, 210, 30);
    private Texto tEmail = new Texto("E-mail", 30, 120, 100, 20);
    private Texto tSerialNumber = new Texto("Serial Number", 30, 190, 100, 20);
    private Botao logar = new Botao("Login", 30, 280, 210, 30);
    private Botao btnClose = new Botao("x", 230, 0, 40, 40);
    private Font arial = new Font("arial", Font.PLAIN, 20);
    private Font fontRelogio = new Font("arial", Font.PLAIN, 13);
    private Telegram bot = new Telegram();

    public Login() {
        super();
        setTitle("Login");
        getContentPane().setBackground(Color.white);
        setSize(270, 370);
        setLocationRelativeTo(null);
        setLayout(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setUndecorated(true);
        setResizable(false);
        init();
        setVisible(true);
    }

    private void init() {
        addTela();
        personalizarComponentes();
        clickLogar();
        clickClose();
        atualizarHora();
    }

    private void addTela() {
        add(logo);
        add(login);
        add(serialNumber);
        add(tEmail);
        add(tSerialNumber);
        add(logar);
        add(btnClose);
        add(relogio);
    }

    private void clickClose() {
        btnClose.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });
    }

    private void clickLogar() {

        logar.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {
                Funcionario f = new Funcionario(login.getText(), serialNumber.getText());
                Maquina m = new Maquina(serialNumber.getText());
                ArrayList informacoes = f.logar();
                Log l = new Log();

                if (informacoes == null) {
                    l.cadastrarError(login.getText(), "Usuário não Cadastrado na base de Dados");
                    System.out.println("Funcionario não cadastrado");
                    gravarTxt("Usuário não Cadastrado na base de Dados");
                } else {
                    bot.enviarMensagem(Long.parseLong(informacoes.get(3).toString()),"Usuario do email: " + informacoes.get(2).toString() + " esta Logado");
                    gravarTxt("Usuário Cadastrado na base de Dados");
                    l.cadastrarError(login.getText(), "Usuário Cadastrado na base de Dados");
                    new Monitoracao(informacoes);
                }
            }

        });

    }

    public void gravarTxt(String mensagem) {

        try {
            Funcionario fun = new Funcionario(login.getText(), serialNumber.getText());
            Log my_log = new Log("C:\\Users\\Miguel Moreira\\Desktop\\log.txt");
            my_log.logger.info("User: " + login.getText() + "Serial Number: " + serialNumber.getText());

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    private String getTime() {
        Calendar data = Calendar.getInstance();
        int hora = data.get(Calendar.HOUR_OF_DAY);
        int min = data.get(Calendar.MINUTE);
        int seg = data.get(Calendar.SECOND);
        String time = hora + ":" + min + ":" + seg;
        return time;
    }

    private void atualizarHora() {
        Timer timer = new Timer();
        TimerTask task = new TimerTask() {

            @Override
            public void run() {
                relogio.setText(getTime());
            }
        };
        timer.scheduleAtFixedRate(task, 0, 1000);
    }

    private void personalizarComponentes() {
        logo.setFont(arial);
        logo.setForeground(Color.black);
        tEmail.setForeground(Color.black);
        tSerialNumber.setForeground(Color.black);
        login.setBackground(new Color(220, 220, 220));
        serialNumber.setBackground(new Color(220, 220, 220));
        relogio.setBackground(Color.white);
        relogio.setForeground(Color.black);
        relogio.setOpaque(true);
        relogio.setFont(fontRelogio);
    }

    public String getEmail() {
        return tEmail.getName();

    }

    public String getSerialNumber() {
        return tSerialNumber.getText();
    }

}
