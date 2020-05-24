package componentes;

import javax.swing.JLabel;

public class Texto extends JLabel {
	public Texto(String text, int x, int y, int width, int height) {
		setBounds(x, y, width, height);
		setText(text);
	}
}
