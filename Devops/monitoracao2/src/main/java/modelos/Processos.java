package modelos;

import java.util.ArrayList;

import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OSProcess;
import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;

public class Processos {

	private ArrayList<DadosProcessos> todosProcessos = new ArrayList<DadosProcessos>();
	private SystemInfo si = new SystemInfo();
	private HardwareAbstractionLayer hal = si.getHardware();
	private OperatingSystem os = si.getOperatingSystem();

	public ArrayList<DadosProcessos> getProcessos() {
		for (OSProcess osp : os.getProcesses()) {
			DadosProcessos dados = new DadosProcessos();
			dados.setNome(osp.getName());
			dados.setPid(osp.getProcessID());
			dados.setEstado(osp.getState().toString());
			dados.setUsuario(osp.getUser());
			dados.setCpu(String.format("%5.1f ", 100d * (osp.getKernelTime() + osp.getUserTime()) / osp.getUpTime()));
			dados.setMemoria(FormatUtil.formatBytes(osp.getResidentSetSize()));
			todosProcessos.add(dados);
		}
		return todosProcessos;
	}

}