package telas;

import java.awt.Color;
import java.awt.Font;
import java.util.Timer;

import javax.swing.ImageIcon;
import javax.swing.JFrame;

import componentes.Logo;
import componentes.Texto;

public class Splash extends JFrame {

	private ImageIcon loading = new ImageIcon(getClass().getResource("img/loading.gif"));
	private Texto lbl_loading = new Texto("", 0, 0, 300, 400);

	public Splash() {
		getContentPane().setBackground(Color.black);
		setSize(300, 400);
		setLocationRelativeTo(null);
		setLayout(null);
		setUndecorated(true);
		init();
		setVisible(true);
	}

	private void init() {
		transicao();
		personalizarComponentes();
		addTela();
	}

	private void addTela() {
		add(lbl_loading);
	}

	private void personalizarComponentes() {
		loading.setImage(loading.getImage().getScaledInstance(300, 400, 1));
		lbl_loading.setIcon(loading);
	}

	private void transicao() {
		new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					Thread.sleep(4000);
					dispose();
					new Login();
				} catch (Exception e) {
					System.err.println(e);
				}
			}
		}).start();
		;
	}
}
