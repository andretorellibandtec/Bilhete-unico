package singletec;

import java.util.ArrayList;
import javax.swing.table.AbstractTableModel;

public class ProcessTable extends AbstractTableModel {

    private ArrayList<Processos> dados = new ArrayList<Processos>();
    private String[] colunas = {"Pid", "Ppid", "Nome", "Tempo Inicio"};

    @Override
    public String getColumnName(int column) {
        return colunas[column];
    }

    @Override
    public int getRowCount() {
        return dados.size();
    }

    @Override
    public int getColumnCount() {
        return colunas.length;
    }

    @Override
    public Object getValueAt(int linha, int coluna) {
        switch (coluna) {
            case 0:
                return dados.get(linha).getPid();
            case 1:
                return dados.get(linha).getPpid();
            case 2:
                return dados.get(linha).getNome();
            case 3:
                return dados.get(linha).getInicioProcesso();
        }
        return null;
    }

    public void addRow(Processos p) {
        this.dados.add(p);
        this.fireTableDataChanged();
    }

}
