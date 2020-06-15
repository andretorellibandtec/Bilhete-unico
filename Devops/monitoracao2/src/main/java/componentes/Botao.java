package componentes;

import java.awt.Color;
import java.awt.Cursor;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

import javax.swing.JButton;

public class Botao extends JButton {
	public Botao(String text, int x, int y, int width, int height) {
		setBounds(x, y, width, height);
		setText(text);
		setCursor(new Cursor(Cursor.HAND_CURSOR));
		setBackground(new Color(128, 0, 0));
		setForeground(Color.white);
		setOpaque(true);
		setFocusable(false);
		setBorder(null);
	}
}
