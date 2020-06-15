package componentes;

import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.table.AbstractTableModel;
import javax.swing.table.DefaultTableModel;

public class Processos extends JTable {

	public Processos(AbstractTableModel model, int x, int y, int width, int height) {
		super();
		setBounds(x, y, width, height);
		setModel(model);
	}
}
