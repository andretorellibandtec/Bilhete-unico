package componentes;

import java.awt.Color;
import java.awt.Insets;

import javax.swing.BorderFactory;
import javax.swing.JTextField;

public class Input extends JTextField {
	public Input(int x, int y, int width, int height) {
		setBounds(x, y, width, height);
		setBorder(BorderFactory.createEmptyBorder(0, 7, 0, 0));
	}
}
