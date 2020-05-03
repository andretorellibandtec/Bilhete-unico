package singletec;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.category.DefaultCategoryDataset;

public class Dashboard extends javax.swing.JFrame {

    Font arial = new Font("Arial", Font.PLAIN, 18);
    JButton processos = new JButton();
    JButton sobre = new JButton();

    public Dashboard() {
        initComponents();
        criarGrafico();
        btnProcessos();
        btnSobre();
        configuracoes();
    }

    private void configuracoes() {
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        jPanel1.setBounds(0, 0, getWidth(), 50);
        setResizable(false);
        processos.setBounds(getWidth() - 220, 0, 110, jPanel1.getHeight());
        processos.setText("Processos");
        processos.setBackground(Color.WHITE);
        processos.setForeground(Color.black);
        processos.setFocusable(false);
        sobre.setBounds(getWidth() - 110, 0, 110, jPanel1.getHeight());
        sobre.setText("Sobre");
        sobre.setBackground(Color.WHITE);
        sobre.setForeground(Color.black);
        sobre.setFocusable(false);
        jLabel2.setFont(arial);
        jPanel1.add(processos);
        jPanel1.add(sobre);
    }

    public void btnProcessos() {
        processos.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new TelaProcessos().setVisible(true);
            }
        });
    }

    public void btnSobre() {
        sobre.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new TelaSobre().setVisible(true);
            }
        });
    }

    public void criarGrafico() {
        DefaultCategoryDataset barra = new DefaultCategoryDataset();
        barra.setValue(50, "CPU", "");
        barra.setValue(30, "MEMÓRIA", "");
        barra.setValue(90, "DISCO", "");
        JFreeChart grafico = ChartFactory.createBarChart3D("Monitoramento de máquina", "", "Total", barra, PlotOrientation.VERTICAL, true, true, false);
        ChartPanel painel = new ChartPanel(grafico);
        painel.setBounds(0, 60, getWidth(), getHeight() - 120);
        add(painel);
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jLabel2 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setMaximumSize(new java.awt.Dimension(750, 500));
        setMinimumSize(new java.awt.Dimension(750, 500));
        getContentPane().setLayout(null);

        jPanel1.setBackground(new java.awt.Color(51, 51, 255));

        jLabel2.setForeground(new java.awt.Color(255, 255, 255));
        jLabel2.setText("SingleTec");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 104, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(284, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel2, javax.swing.GroupLayout.DEFAULT_SIZE, 28, Short.MAX_VALUE)
                .addContainerGap())
        );

        getContentPane().add(jPanel1);
        jPanel1.setBounds(0, 0, 400, 50);

        pack();
    }// </editor-fold>//GEN-END:initComponents
    public static void main(String args[]) {
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Dashboard().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel jLabel2;
    private javax.swing.JPanel jPanel1;
    // End of variables declaration//GEN-END:variables
}
