package modelos;

import oshi.SystemInfo;
import oshi.hardware.HWDiskStore;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.util.FormatUtil;

public class Disco {
	private String modeloDisco;
	private String capacidadeDisco;
	private long leituraBytesDisco;
	private long gravacaoBytesDisco;

	SystemInfo sy = new SystemInfo();
	HardwareAbstractionLayer hal = sy.getHardware();
	HWDiskStore[] disk = hal.getDiskStores();

	public String getModeloDisco() {
		modeloDisco = disk[0].getModel();

		return modeloDisco;
	}

	public String getcapacidadeDisco() {
		capacidadeDisco = FormatUtil.formatBytes(disk[0].getSize());

		return capacidadeDisco;
	}

	public String getLeituraBytesDisco() {
		// captura os a quantidade antiga de bytes lidos
		long oldReadBytes = disk[0].getReadBytes();

		// atualiza os dentro dos metodos dentro da classe HWDiskStore
		disk[0].updateAtrributes();

		/**
		 * faz a subtração da captura dos dados atuais com os dados antigos de leitura,
		 * e retorna a quantidade de bytes usados na leitura de arquivos
		 */
		leituraBytesDisco = disk[0].getReadBytes() - oldReadBytes;

		// retorna o valor obtido formatado em bytes
		return FormatUtil.formatBytes(leituraBytesDisco);
	}

	public String getGravacaoBytesDisco() {
		long oldWriteBytes = disk[0].getWriteBytes();

		disk[0].updateAtrributes();
		gravacaoBytesDisco = disk[0].getWriteBytes() - oldWriteBytes;

		return FormatUtil.formatBytes(gravacaoBytesDisco);
	}
}
