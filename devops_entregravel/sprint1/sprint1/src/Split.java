import java.awt.Color;
import java.awt.Image;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class Split extends JFrame {

	public Split() {
		setSize(400, 300);
		setLocationRelativeTo(null);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);
		setUndecorated(true);
		init();
		setVisible(true);
	}

	private void init() {
		fundosplit();
		fechartela();
	}

	private void fundosplit() {
		ImageIcon icon = new ImageIcon(getClass().getResource("/img/split.gif"));
		JLabel lbl_icon = new JLabel();
		lbl_icon.setBounds(0, 0, getWidth(), getHeight());
		icon.setImage(icon.getImage().getScaledInstance(getWidth(), getHeight(), 1));
		lbl_icon.setIcon(icon);
		add(lbl_icon);
	}

	private void fechartela() {
		new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					Thread.sleep(5000);
					new TelaCpu();
				} catch (Exception e) {
					System.err.println(e);
				}
			}
		}).start();
	}

}
