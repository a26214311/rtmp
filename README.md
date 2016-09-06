# rtmp

#install nginx with rtmp
sudo apt-get install build-essential libpcre3 libpcre3-dev libssl-dev

http://nginx.org/download/nginx-1.11.3.tar.gz
wget https://github.com/arut/nginx-rtmp-module/archive/master.zip

tar -xvf nginx-1.11.3.tar.gz
unzip master.zip
cd nginx-1.11.3.tar.gz

./configure --with-http_ssl_module --add-module=../nginx-rtmp-module-master
make
sudo make install





#start auth server
npm install express
nohup node index.js &