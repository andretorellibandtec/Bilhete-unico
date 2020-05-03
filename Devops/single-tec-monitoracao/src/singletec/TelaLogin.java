package singletec;

import java.awt.Font;

public class TelaLogin extends javax.swing.JFrame {

    Font arial = new Font("Arial", Font.PLAIN, 18);

    public TelaLogin() {
        initComponents();
        configuracoes();
        setDefaultCloseOperation(EXIT_ON_CLOSE);
    }

    private void configuracoes() {
        setSize(347, 300);
        setResizable(false);
        setVisible(true);
        setLocationRelativeTo(null);
        jLabel2.setFont(arial);
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        TxtLogin = new javax.swing.JTextField();
        TxtSenha = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        BtnLogin = new javax.swing.JButton();
        jPanel1 = new javax.swing.JPanel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setBackground(new java.awt.Color(255, 255, 255));
        setMaximumSize(new java.awt.Dimension(300, 350));
        setMinimumSize(new java.awt.Dimension(300, 350));
        getContentPane().setLayout(null);

        TxtLogin.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                TxtLoginActionPerformed(evt);
            }
        });
        getContentPane().add(TxtLogin);
        TxtLogin.setBounds(70, 100, 210, 30);

        TxtSenha.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                TxtSenhaActionPerformed(evt);
            }
        });
        getContentPane().add(TxtSenha);
        TxtSenha.setBounds(70, 170, 210, 30);

        jLabel1.setText("Senha");
        getContentPane().add(jLabel1);
        jLabel1.setBounds(70, 150, 50, 17);

        BtnLogin.setBackground(new java.awt.Color(51, 51, 255));
        BtnLogin.setForeground(new java.awt.Color(255, 255, 255));
        BtnLogin.setText("Entrar");
        BtnLogin.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                BtnLoginActionPerformed(evt);
            }
        });
        getContentPane().add(BtnLogin);
        BtnLogin.setBounds(70, 240, 210, 30);

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
                .addComponent(jLabel2, javax.swing.GroupLayout.DEFAULT_SIZE, 28, Short.MAX_VALUE)
                .addContainerGap())
        );

        getContentPane().add(jPanel1);
        jPanel1.setBounds(0, 0, 400, 50);

        jLabel3.setText("Email");
        getContentPane().add(jLabel3);
        jLabel3.setBounds(70, 80, 40, 17);

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void BtnLoginActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BtnLoginActionPerformed
        Dashboard dash = new Dashboard();
        this.setVisible(false);
        dash.setVisible(true);
    }//GEN-LAST:event_BtnLoginActionPerformed

    private void TxtLoginActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_TxtLoginActionPerformed
    }//GEN-LAST:event_TxtLoginActionPerformed

    private void TxtSenhaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_TxtSenhaActionPerformed
    }//GEN-LAST:event_TxtSenhaActionPerformed

    public static void main(String args[]) {
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new TelaLogin().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton BtnLogin;
    private javax.swing.JTextField TxtLogin;
    private javax.swing.JTextField TxtSenha;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JPanel jPanel1;
    // End of variables declaration//GEN-END:variables
}
