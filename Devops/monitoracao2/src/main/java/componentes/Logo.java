package componentes;

import java.awt.Color;

import javax.swing.JLabel;

public class Logo extends JLabel {
	public Logo(int x, int y, int width, int height, String texto, Color cor) {
		setText(texto);
		setBounds(x, y, width, height);
		setForeground(cor);
	}
}
