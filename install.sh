#!/bin/bash

apt-get update
apt-get install -y vim
apt-get install -y zsh
wget --no-check-certificate https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh


cp vim/vimrc ~/.vimrc
cp vim/dot_vim ~/.vim
cp vim/distinguished.vim /usr/share/vim/vim??/colors/distinguished.vim


cp zsh/zshrc ~/.zshrc
cp zsh/bash_aliases  ~/.bash_aliases 

