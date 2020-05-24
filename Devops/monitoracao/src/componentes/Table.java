package componentes;

import java.awt.Color;
import java.awt.Dimension;

import javax.swing.JTable;

import modelos.ModeloDadosTabela;

public class Table extends JTable {
	private ModeloDadosTabela modelo = new ModeloDadosTabela();

	public Table(int x, int y, int width, int height) {
		setModel(modelo);
		setBounds(x, y, width, height);
		setPreferredScrollableViewportSize(new Dimension(667, 425));
		setFillsViewportHeight(true);
	}
}
