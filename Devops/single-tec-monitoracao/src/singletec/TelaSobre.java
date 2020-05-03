package singletec;

import java.awt.Font;
import javax.swing.DefaultListModel;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JPanel;

public class TelaSobre extends javax.swing.JFrame {

    private Font arial = new Font("Arial", Font.PLAIN, 16);
    private Maquina maquina = new Maquina();
    private JList sobre = new JList();
    private DefaultListModel model = new DefaultListModel();
    private CustomListCellRenderer render = new CustomListCellRenderer();
    private JLabel lblSerialNumber = new JLabel();
    private JLabel lblModeloMaquina = new JLabel();
    private JLabel lblSistemaOperacional = new JLabel();
    private JLabel lblRamTotal = new JLabel();
    private JLabel lblRamUtilizada = new JLabel();
    private JLabel lblRamLivre = new JLabel();
    private JLabel lblMemoriaHd = new JLabel();
    private JLabel lblTemperaturaCpu = new JLabel();

    public TelaSobre() {
        initComponents();
        configuracoes();
    }

    private void configuracoes() {
        jPanel1.setBounds(0, 0, getWidth(), 50);
        jLabel2.setFont(arial);
        lblSerialNumber.setBounds(13, 70, getWidth(), 20);
        lblSerialNumber.setFont(arial);
        lblModeloMaquina.setBounds(13, lblSerialNumber.getY() + 10, getWidth(), lblSerialNumber.getHeight() + 50);
        lblModeloMaquina.setFont(arial);
        lblSistemaOperacional.setBounds(13, lblModeloMaquina.getY() + 10, getWidth(), lblModeloMaquina.getHeight() + 50);
        lblSistemaOperacional.setFont(arial);
        lblRamTotal.setBounds(13, lblSistemaOperacional.getY() + 10, getWidth(), lblSistemaOperacional.getHeight() + 50);
        lblRamTotal.setFont(arial);
        lblRamUtilizada.setBounds(13, lblRamTotal.getY() + 10, getWidth(), lblRamTotal.getHeight() + 50);
        lblRamUtilizada.setFont(arial);
        lblRamLivre.setBounds(13, lblRamUtilizada.getY() + 10, getWidth(), lblRamUtilizada.getHeight() + 50);
        lblRamLivre.setFont(arial);
        lblMemoriaHd.setBounds(13, lblRamLivre.getY() + 10, getWidth(), lblRamLivre.getHeight() + 50);
        lblMemoriaHd.setFont(arial);
        lblTemperaturaCpu.setBounds(13, lblMemoriaHd.getY() + 10, getWidth(), lblMemoriaHd.getHeight() + 50);
        lblTemperaturaCpu.setFont(arial);
        lblSerialNumber.setText("Serial Number: " + maquina.serialNumber());
        lblModeloMaquina.setText("Modelo Maquina: " + maquina.modeloMaquina());
        lblSistemaOperacional.setText("Sistema Operacional: " + maquina.sistemaOperacional());
        lblRamTotal.setText("Total Ram: " + maquina.ramTotal());
        lblRamUtilizada.setText("Ram Utilizada: " + maquina.ramUtilizada());
        lblRamLivre.setText("Ram Livre: " + maquina.ramLivre());
        lblMemoriaHd.setText("HD Total: " + maquina.memoriaHd());
        lblTemperaturaCpu.setText("Temperatura Cpu: " + maquina.temperaturaCPU() + "%");
        add(lblSerialNumber);
        add(lblModeloMaquina);
        add(lblSistemaOperacional);
        add(lblRamTotal);
        add(lblRamUtilizada);
        add(lblRamLivre);
        add(lblMemoriaHd);
        add(lblTemperaturaCpu);
        sobre.setModel(model);
        sobre.setCellRenderer(render);
        setResizable(false);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(DISPOSE_ON_CLOSE);
        setSize(400,380);
        sobre.setBounds(0, 0, getWidth(), getHeight());
        add(sobre);
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jLabel2 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(51, 51, 255));

        jLabel2.setForeground(new java.awt.Color(255, 255, 255));
        jLabel2.setText("SingleTec");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 106, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(282, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel2, javax.swing.GroupLayout.DEFAULT_SIZE, 26, Short.MAX_VALUE)
                .addContainerGap())
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 250, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    public static void main(String args[]) {

        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new TelaSobre().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel jLabel2;
    private javax.swing.JPanel jPanel1;
    // End of variables declaration//GEN-END:variables
}
