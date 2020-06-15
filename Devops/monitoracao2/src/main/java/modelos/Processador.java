package modelos;

import java.text.DecimalFormat;

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

		return format.format(cpu.getSystemCpuLoadBetweenTicks(prevTicks) * 100);
	}
}
