package modelos;

import java.util.ArrayList;

import javax.swing.table.AbstractTableModel;

public class ModeloDadosTabela extends AbstractTableModel {

	private Processos proc = new Processos();
	private ArrayList<DadosProcessos> todosProcessos = proc.getProcessos();
	private String[] colunas = { "Nome", "Pid", "Estado", "Usuário", "Cpu", "Memória" };

	@Override
	public int getRowCount() {
		return todosProcessos.size();
	}

	@Override
	public String getColumnName(int column) {
		return colunas[column];
	}

	@Override
	public int getColumnCount() {
		return colunas.length;
	}

	@Override
	public Object getValueAt(int linha, int coluna) {
		switch (coluna) {
		case 0:
			return todosProcessos.get(linha).getNome();
		case 1:
			return todosProcessos.get(linha).getPid();
		case 2:
			return todosProcessos.get(linha).getEstado();
		case 3:
			return todosProcessos.get(linha).getUsuario();
		case 4:
			return todosProcessos.get(linha).getCpu();
		case 5:
			return todosProcessos.get(linha).getMemoria();
		}
		return null;
	}

}
