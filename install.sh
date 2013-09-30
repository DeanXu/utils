#!/bin/bash

apt-get update
apt-get install -y vim
apt-get install -y zsh
wget --no-check-certificate https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh


cp vim/vimrc ~/.vimrc
cp -r vim/dot_vim ~/.
rm -rf ~/.vim
mv ~/dot_vim ~/.vim

cp vim/distinguished.vim /usr/share/vim/vim73/colors/distinguished.vim

cp zsh/zshrc ~/.zshrc
cp zsh/bash_aliases  ~/.bash_aliases 

cd ~/.vim/bundle
git clone https://github.com/scrooloose/nerdtree.git

