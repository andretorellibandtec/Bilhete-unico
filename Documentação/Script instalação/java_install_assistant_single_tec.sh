#!/bin/bash

PURPLE='0;35'
NC='\033[0m' 
VERSAO=8
	
echo  "$(tput setaf 6)[Single Tec]:$(tput setaf 7) Olá, serei sue assistente para instalação do Java!;"
echo  "$(tput setaf 6)[Single Tec]:$(tput setaf 7)  Verificando aqui se você possui o Java instalado...;"
 $
java -version
if [ $? -eq 0 ]
	then
		echo "$(tput setaf 6)[Single Tec]:$(tput setaf 7) : Olá, serei sua assistente para instalação do Java!"
		echo "$(tput setaf 6)[Single Tec]:$(tput setaf 7)  Verificando aqui se você possui o Java instalado..."
	else
		echo "$(tput setaf 6)[Single Tec]:$(tput setaf 7)  Opa! Não identifiquei nenhuma versão do Java instalado, mas sem problemas, irei resolver isso agora!"
		echo "$(tput setaf 6)[Single Tec]:$(tput setaf 7)  Confirme para mim se realmente deseja instalar o Java (S/N)?"
	read inst
	if [ \"$inst\" == \"s\" ]
		then
			echo "$(tput setaf 6)[Single Tec]:$(tput setaf 7)  Ok! Você escolheu instalar o Java"
			echo "$(tput setaf 6)[Single Tec]:$(tput setaf 7)  Adicionando o repositório!"
			sleep 2
			add-apt-repository ppa:webupd8team/java -y
			clear
			echo "$(tput setaf 6)[Single Tec]:$(tput setaf 7)  Atualizando! Quase lá."
			sleep 2
			apt-get update -y
			clear
			
			if [ $VERSAO -eq 8 ]
				then
					echo "$(tput setaf 6)[Single Tec]:$(tput setaf 7) Preparando para instalar a versão 8 do Java. Confirme a instalação quando solicitado"
					apt install default-jre ; apt install openjdk-8-jre-headless; -y
					clear
					echo "$(tput setaf 6)[Single Tec]:$(tput setaf 7) Java instalado com sucesso! Agora você poderá monitorar os totens."
				fi
		else 	
		echo "$(tput setaf 6)[Single Tec]:$(tput setaf 7)  Você optou por não instalar o Java por enquanto, então até a próxima então!"
	fi
fi

# ===================================================================
# Todos direitos reservados para o autor: Dra. Profa. Marise Miranda.
# Sob licença Creative Commons @2020
# Podera modificar e reproduzir para uso pessoal.
# Proibida a comercialização e a exclusão da autoria.
# ===================================================================
