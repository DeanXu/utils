#!/bin/bash

cp vim/vimrc ~/.vimrc
cp vim/dot_vim ~/.vim

apt-get update
apt-get install -y zsh
apt-get install -y vim
wget --no-check-certificate https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh

cp zsh/zshrc ~/.zshrc
cp zsh/bash_aliases  ~/.bash_aliases 

