package modelos;

import oshi.SystemInfo;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.util.FormatUtil;

public class Memoria {
	private String memoriaRamModelo;
	private String memoriaRamTotal;
	private String memoriaRamUsado;
	private String memoriaRamDisponivel;
	private Integer memoriaPorcentagemUsada;

	SystemInfo si = new SystemInfo();
	HardwareAbstractionLayer hal = si.getHardware();
	GlobalMemory memoria = hal.getMemory();

	// public String getMemoriaRamModelo(){
	// memoriaRamModelo = hal.
	// }

	public String getMemoriaRamTotal() {

		memoriaRamTotal = FormatUtil.formatBytes(memoria.getTotal());

		return memoriaRamTotal;
	}

	public String getMemoriaRamUsado() {
		memoriaRamUsado = FormatUtil.formatBytes(memoria.getTotal() - memoria.getAvailable());
		return memoriaRamUsado;
	}

	public String getMemoriaRamDisponivel() {
		memoriaRamDisponivel = FormatUtil.formatBytes(memoria.getAvailable());

		return memoriaRamDisponivel;
	}

	public Integer getMemoriaPorcentagemUsada() {
		Long porcentagem = (((memoria.getTotal() - memoria.getAvailable()) * 100) / memoria.getTotal());

		memoriaPorcentagemUsada = Integer.parseInt(porcentagem.toString());

		return memoriaPorcentagemUsada;
	}
}
