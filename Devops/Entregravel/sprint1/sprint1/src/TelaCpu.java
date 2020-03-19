import java.awt.Color;
import java.awt.Cursor;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.util.Random;

import javax.swing.JButton;
import javax.swing.JFrame;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.category.DefaultCategoryDataset;

public class TelaCpu extends JFrame {
	// Componentes
	DefaultCategoryDataset barra = new DefaultCategoryDataset();
	JFreeChart grafico = ChartFactory.createBarChart("Monitoramento de máquina", "", "Dados em %", barra,
			PlotOrientation.VERTICAL, true, true, false);
	ChartPanel painel = new ChartPanel(grafico);
	JButton close = new JButton();
	JButton atualizar = new JButton();
	Cursor pointer = new Cursor(Cursor.HAND_CURSOR);

	public TelaCpu() {
		setSize(800, 500);
		setLocationRelativeTo(null);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);
		setUndecorated(true);
		init();
		setVisible(true);
	}

	private void init() {
		// adicionando botão de fechar a tela;
		close.setBounds(getWidth() - 50, 0, 50, 40);
		close.setText("x");
		close.setFocusable(false);
		close.setCursor(pointer);
		close.setForeground(Color.red);
		close.setBackground(Color.white);
		close.setBorder(null);
		close.setFont(new Font("Arial", Font.PLAIN, 24));
		add(close);

		// botão de atualizar dados do gráfico;
		atualizar.setBounds(getWidth() - 100, getHeight() - 60, 80, 40);
		atualizar.setText("Atualizar");
		atualizar.setForeground(Color.white);
		atualizar.setBackground(new Color(65, 105, 255));
		atualizar.setBorder(null);
		atualizar.setFocusable(false);
		atualizar.setCursor(pointer);
		add(atualizar);

		// métodos;
		click_close();
		criar_grafico();
		atualizar();
	}

	private void click_close() {
		close.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				System.exit(0);
			}
		});
	}

	private void criar_grafico() {
		barra.setValue(50, "CPU", "");
		barra.setValue(80, "Memória", "");
		barra.setValue(30, "Disco", "");
		painel.setBounds(0, 60, getWidth(), getHeight()-140);
		add(painel);
		validate();
	}

	private void atualizar() {
		atualizar.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				int n1 = numero_aleatorio();
				int n2 = numero_aleatorio();
				int n3 = numero_aleatorio();
				barra.setValue(n1, "CPU", "");
				barra.setValue(n2, "Memória", "");
				barra.setValue(n3, "Disco", "");
			}
		});
	}

	private Integer numero_aleatorio() {
		Random r = new Random();
		Integer numero = r.nextInt(100);
		return numero;
	}
}
