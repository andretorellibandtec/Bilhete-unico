package singletec;

import java.awt.Color;
import java.awt.Component;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.ListCellRenderer;

public class CustomListCellRenderer implements ListCellRenderer {
    
    @Override
    public Component getListCellRendererComponent(JList list, Object value, int index, boolean isSelected, boolean cellHasFocus) {
        JLabel lbl = new JLabel();
        lbl.setBackground(Color.red);
        lbl.setForeground(Color.white);
        lbl.setOpaque(true);
        return lbl;
    }
    
}
