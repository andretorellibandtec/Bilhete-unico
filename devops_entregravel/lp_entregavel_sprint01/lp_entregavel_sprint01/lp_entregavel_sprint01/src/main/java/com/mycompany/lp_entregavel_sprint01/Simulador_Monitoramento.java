package com.mycompany.lp_entregavel_sprint01;

import java.util.Random;



public class Simulador_Monitoramento extends javax.swing.JFrame {

   
    public Simulador_Monitoramento() {
        initComponents();
    }

    
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        Porc_memoria = new javax.swing.JLabel();
        Porc_disco = new javax.swing.JLabel();
        Btn_atualizar = new javax.swing.JButton();
        Porc_Cpu = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        jTextArea1 = new javax.swing.JTextArea();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setMaximumSize(new java.awt.Dimension(575, 300));
        setMinimumSize(new java.awt.Dimension(575, 300));
        setPreferredSize(new java.awt.Dimension(575, 300));
        getContentPane().setLayout(null);

        jLabel1.setFont(new java.awt.Font("Tahoma", 1, 24)); // NOI18N
        jLabel1.setText("CPU");
        getContentPane().add(jLabel1);
        jLabel1.setBounds(30, 60, 90, 40);

        jLabel2.setFont(new java.awt.Font("Arial", 1, 24)); // NOI18N
        jLabel2.setText("Memória");
        getContentPane().add(jLabel2);
        jLabel2.setBounds(30, 120, 160, 40);

        jLabel3.setFont(new java.awt.Font("Arial", 1, 24)); // NOI18N
        jLabel3.setText("Disco");
        getContentPane().add(jLabel3);
        jLabel3.setBounds(30, 190, 110, 28);

        Porc_memoria.setFont(new java.awt.Font("Tahoma", 1, 24)); // NOI18N
        Porc_memoria.setForeground(new java.awt.Color(255, 255, 255));
        Porc_memoria.setText("6%");
        getContentPane().add(Porc_memoria);
        Porc_memoria.setBounds(230, 110, 90, 60);

        Porc_disco.setFont(new java.awt.Font("Tahoma", 1, 24)); // NOI18N
        Porc_disco.setForeground(new java.awt.Color(255, 255, 255));
        Porc_disco.setText("43%");
        getContentPane().add(Porc_disco);
        Porc_disco.setBounds(220, 170, 70, 60);

        Btn_atualizar.setBackground(new java.awt.Color(255, 255, 255));
        Btn_atualizar.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        Btn_atualizar.setText("Atualizar");
        Btn_atualizar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                Btn_atualizarActionPerformed(evt);
            }
        });
        getContentPane().add(Btn_atualizar);
        Btn_atualizar.setBounds(100, 240, 170, 40);

        Porc_Cpu.setFont(new java.awt.Font("Tahoma", 1, 24)); // NOI18N
        Porc_Cpu.setForeground(new java.awt.Color(255, 255, 255));
        Porc_Cpu.setText("32%");
        getContentPane().add(Porc_Cpu);
        Porc_Cpu.setBounds(230, 60, 100, 50);

        jLabel4.setFont(new java.awt.Font("Tahoma", 1, 24)); // NOI18N
        jLabel4.setForeground(new java.awt.Color(51, 51, 51));
        jLabel4.setText("Simulador  Monitoramento");
        getContentPane().add(jLabel4);
        jLabel4.setBounds(30, 20, 340, 30);

        jTextArea1.setBackground(new java.awt.Color(153, 153, 153));
        jTextArea1.setColumns(20);
        jTextArea1.setRows(5);
        jScrollPane1.setViewportView(jTextArea1);

        getContentPane().add(jScrollPane1);
        jScrollPane1.setBounds(0, 0, 380, 300);

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void Btn_atualizarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_Btn_atualizarActionPerformed
       
        Random Al_Cpu = new Random(); // criando um objeto que tem cm crctristiscas do random
        Random Al_memoria = new Random();
        Random Al_disco = new Random();
        
        Integer At_Cpu,At_memoria,At_disco;// recebendo atualização de cada objeto;
        
        At_Cpu = Al_Cpu.nextInt(101); // atribuindo a um objeto uma range aleatório até 101
        At_memoria = Al_memoria.nextInt(101);//
        At_disco = Al_disco.nextInt(101);
        
        Porc_Cpu.setText(String.valueOf(At_Cpu +"%"));// atribuindo um valor a um  objeto (porc Cpu)q tem cmo herança a classe label  convertendo e apresentando.
        Porc_memoria.setText(String.valueOf(At_memoria +"%"));
        Porc_disco.setText(String.valueOf(At_disco + "%"));
                

        
    }//GEN-LAST:event_Btn_atualizarActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Simulador_Monitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Simulador_Monitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Simulador_Monitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Simulador_Monitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Simulador_Monitoramento().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton Btn_atualizar;
    private javax.swing.JLabel Porc_Cpu;
    private javax.swing.JLabel Porc_disco;
    private javax.swing.JLabel Porc_memoria;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTextArea jTextArea1;
    // End of variables declaration//GEN-END:variables
}
