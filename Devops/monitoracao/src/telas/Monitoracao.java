package telas;

import java.awt.CardLayout;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Timer;
import java.util.TimerTask;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.category.DefaultCategoryDataset;
import org.jfree.data.general.DefaultPieDataset;

import componentes.Botao;
import componentes.Table;
import componentes.Texto;
import modelos.DadosProcessos;
import modelos.Disco;
import modelos.Memoria;
import modelos.Processador;
import modelos.Processos;

public class Monitoracao extends JFrame {

	private Table tabelaProcessos = new Table(0, 0, 685, 490);
	private Timer timer = new Timer();
	private Processos processos = new Processos();
	private Disco disco = new Disco();
	private Memoria memoria = new Memoria();
	private Processador processador = new Processador();
	private Font arial = new Font("arial", Font.PLAIN, 17);
	private JPanel jpanelMenu = new JPanel();
	private JPanel jpanelSessoes = new JPanel();
	private JPanel jpanelGrafico = new JPanel();
	private JPanel jpanelProcessos = new JPanel();
	private Botao btnGrafico = new Botao("Gráfico", 0, 0, 150, 40);
	private Botao btnProcessos = new Botao("Processos", 150, 0, 150, 40);
	private Botao btnClose = new Botao("x", 645, 0, 40, 40);
	private CardLayout card = new CardLayout();
	private DefaultCategoryDataset barra = new DefaultCategoryDataset();
	private JFreeChart grafico = ChartFactory.createBarChart3D("", "", "", barra, PlotOrientation.VERTICAL, true, true,
			false);
	private ChartPanel panel = new ChartPanel(grafico);
	private JScrollPane scroll = new JScrollPane(tabelaProcessos);

	private String porcentagemCpu = processador.getPorcentagemCpu();
	private String porcentagemRamUsada = memoria.getMemoriaRamUsado();
	private String porcentagemDisco = "100";

	private Texto lblPorcentagemCpu = new Texto(porcentagemCpu, 131, 8, 100, 25);
	private Texto lblPorcentagemRam = new Texto(porcentagemRamUsada, 325, 8, 100, 25);
	private Texto lblPorcentagemDisco = new Texto(porcentagemDisco + 100, 530, 8, 100, 25);

	public Monitoracao() {
		super();
		setTitle("Monitoração");
		getContentPane().setBackground(Color.white);
		setSize(685, 490);
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
		clickGrafico();
		clickProcessos();
		clickClose();
		configurarGrafico();
		atualizarGrafico();
	}

	private void configurarGrafico() {
		porcentagemRamUsada = porcentagemRamUsada.replaceAll("GiB", "");
		porcentagemRamUsada = porcentagemRamUsada.replaceAll(",", ".");

		barra.setValue(Integer.parseInt(porcentagemCpu), "Cpu", "");
		barra.setValue(Double.parseDouble(porcentagemRamUsada), "Memória", "");
		barra.setValue(Integer.parseInt(porcentagemDisco), "Disco", "");
		panel.setBounds(0, 30, getWidth(), getHeight() - 80);
		jpanelGrafico.add(panel);
	}

	private void atualizarGrafico() {
		TimerTask task = new TimerTask() {

			@Override
			public void run() {
				porcentagemCpu = processador.getPorcentagemCpu();
				porcentagemRamUsada = memoria.getMemoriaRamUsado();
				porcentagemDisco = "100";
				porcentagemRamUsada = porcentagemRamUsada.replaceAll("GiB", "");
				porcentagemRamUsada = porcentagemRamUsada.replaceAll(",", ".");

				lblPorcentagemCpu.setText("Cpu: " + porcentagemCpu + "%");
				lblPorcentagemRam.setText("Ram: " + porcentagemRamUsada + "%");
				lblPorcentagemDisco.setText("Disco: " + porcentagemDisco + "%");

				barra.setValue(Integer.parseInt(porcentagemCpu), "Cpu", "");
				barra.setValue(Double.parseDouble(porcentagemRamUsada), "Memória", "");
				barra.setValue(Integer.parseInt(porcentagemDisco), "Disco", "");
			}
		};
		timer.scheduleAtFixedRate(task, 0, 1000);
	}

	private void clickClose() {
		btnClose.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				System.exit(0);
			}
		});
	}

	private void clickGrafico() {
		btnGrafico.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				card.show(jpanelSessoes, "Gráfico");
			}
		});
	}

	private void clickProcessos() {
		btnProcessos.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				card.show(jpanelSessoes, "Processos");
			}
		});
	}

	private void addTela() {
		add(jpanelMenu);
		add(jpanelSessoes);
		jpanelMenu.add(btnGrafico);
		jpanelMenu.add(btnProcessos);
		jpanelMenu.add(btnClose);
		jpanelProcessos.add(scroll);
		jpanelGrafico.add(lblPorcentagemCpu);
		jpanelGrafico.add(lblPorcentagemRam);
		jpanelGrafico.add(lblPorcentagemDisco);
	}

	private void personalizarComponentes() {
		jpanelMenu.setLayout(null);
		jpanelMenu.setBounds(0, 0, getWidth(), 40);
		jpanelMenu.setBackground(new Color(128, 0, 0));
		jpanelSessoes.setBounds(0, 40, getWidth(), getHeight() - 40);
		jpanelSessoes.setBackground(Color.red);
		jpanelSessoes.setLayout(card);
		jpanelSessoes.add(jpanelGrafico, "Gráfico");
		jpanelSessoes.add(jpanelProcessos, "Processos");
		jpanelGrafico.setBackground(Color.white);
		jpanelProcessos.setBackground(Color.white);
		btnClose.setFont(arial);
		jpanelProcessos.setLayout(null);
		jpanelGrafico.setLayout(null);
		scroll.setBounds(0, 0, getWidth(), getHeight() - 39);
	}
}
