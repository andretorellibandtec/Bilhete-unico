package modelos;

import conexao.Conexao;
import java.text.DecimalFormat;
import java.util.Calendar;

import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.CentralProcessor.LogicalProcessor;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.util.FormatUtil;
import oshi.util.Util;

public class Processador {

    private DecimalFormat format = new DecimalFormat("##");
    private String modeloProcessador;
    private long frequenciaMaxima;
    private Integer qtdSocket = 0;
    private Integer qtdNucleoFisico = 0;
    private Integer qtdNucleoLogico = 0;
    private Double porcentagemCpu = 0.0;

    SystemInfo si = new SystemInfo();
    HardwareAbstractionLayer hal = si.getHardware();
    CentralProcessor cpu = hal.getProcessor();

    public String getModeloProcessador() {
        modeloProcessador = cpu.getProcessorIdentifier().getName();

        return modeloProcessador;
    }

    public String getFrequenciaMaxima() {
        frequenciaMaxima = cpu.getMaxFreq();

        return FormatUtil.formatHertz(frequenciaMaxima);
    }

    public Integer getQtdSocket() {
        qtdSocket = cpu.getPhysicalPackageCount();

        return qtdSocket;
    }

    public Integer getQtdNucleoFisico() {

        qtdNucleoFisico = cpu.getPhysicalProcessorCount();

        return qtdNucleoFisico;
    }

    public Integer getQtdNucleoLogico() {

        qtdNucleoLogico = cpu.getLogicalProcessorCount();

        return qtdNucleoLogico;
    }

    public String getPorcentagemCpu() {
        long[] prevTicks = cpu.getSystemCpuLoadTicks();

        Util.sleep(1000);
        System.out.println(format.format(cpu.getSystemCpuLoadBetweenTicks(prevTicks) * 100));
        return format.format(cpu.getSystemCpuLoadBetweenTicks(prevTicks) * 100);
    }

    public String data() {
        Calendar c = Calendar.getInstance();

        String time = c.getTime().toString();
        String ano = c.get(Calendar.YEAR) + "";
        int mes = c.get(Calendar.MONTH) + 1;
        String diaMes = c.get(Calendar.DAY_OF_MONTH) + "";

        String horaFinal = ano + "-" + mes + "-" + diaMes + time.split("BRT", -1)[0].split(diaMes, -1)[1];

        return horaFinal;
    }

    public void Gravar(int fkMaquina) {
        Conexao conn = new Conexao();
        conn.conectar();
        Disco disk = new Disco();
        Memoria memory = new Memoria();
        try {
            String sql = "insert into Dados(cpu_Utilizada,disco_Utilizada,memoria_Utilizada,data_Hora,Fk_Maquina) "
                    + "values ('" + getPorcentagemCpu() + "' , '" + disk.getconvercao() + "','" + memory.getMemoriaPorcentagemUsada() + "','" + data() +"','" + fkMaquina + "')";
            conn.statiment.executeQuery(sql);

        } catch (Exception e) {
            System.out.println(e);

        }

    }

}
