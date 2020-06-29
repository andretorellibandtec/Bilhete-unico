package modelos;

import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;

public class Telegram extends TelegramLongPollingBot {

    private SendMessage mensagem = new SendMessage();

    @Override
    public String getBotToken() {
        return "1064446185:AAH2fljwrJoecaXWsrTOiDyWbzTJifHYjrM";
    }

    @Override
    public void onUpdateReceived(Update update) {

    }

    @Override
    public String getBotUsername() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    public void enviarMensagem(Long chatId, String texto){
        mensagem.setText(texto);
        mensagem.setChatId(chatId);
        
        try {
            execute(mensagem);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
