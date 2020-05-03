package singletec;

import java.text.DecimalFormat;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OSProcess;
import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;
import java.util.Arrays;
import oshi.hardware.ComputerSystem;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HWDiskStore;
import oshi.hardware.HWPartition;
import oshi.hardware.PhysicalMemory;
import oshi.hardware.Sensors;
import oshi.hardware.VirtualMemory;

public class Maquina {

    private Double memoriaTotal;
    private Integer serialNumber;
    private String sistemaOperacional;
    private String modeloMaquina;

    private SystemInfo si = new SystemInfo();
    private HardwareAbstractionLayer hal = si.getHardware();
    private CentralProcessor cpu = hal.getProcessor();
    private OperatingSystem os = si.getOperatingSystem();
    private ComputerSystem computerSystem = hal.getComputerSystem();
    private GlobalMemory memory = hal.getMemory();
    private HWDiskStore[] diskStores = hal.getDiskStores();
    private Sensors sensors = hal.getSensors();

    ArrayList<Processos> proc = new ArrayList<Processos>();

    public ArrayList printProcesses() {
        List<OSProcess> procs = Arrays.asList(os.getProcesses(5, OperatingSystem.ProcessSort.CPU));
        for (int i = 0; i < procs.size() && i < 5; i++) {
            OSProcess p = procs.get(i);
            Processos processo = new Processos();
            processo.setPid(p.getProcessID());
            processo.setPpid(p.getParentProcessID());
            processo.setNome(p.getName());
            processo.setInicioProcesso(p.getStartTime());
            proc.add(processo);
        }
        return proc;
    }

    public String serialNumber() {
        return computerSystem.getSerialNumber();
    }

    public String modeloMaquina() {
        return computerSystem.getModel();
    }

    public String sistemaOperacional() {
        return String.valueOf(os.getFamily() + " " + os.getManufacturer());
    }

    public Long ramTotal() {
        return memory.getTotal();
    }

    public Long ramUtilizada() {
        return memory.getAvailable();
    }

    public Long ramLivre() {
        return memory.getTotal() - memory.getAvailable();
    }

    public Long memoriaHd() {
        Long hd = null;
        for (int i = 0; i < diskStores.length; i++) {
            if (i == 0) {
                hd = diskStores[0].getSize();
            }
        }
        return hd;
    }

    public Double temperaturaCPU() {
        return sensors.getCpuTemperature();
    }
}
