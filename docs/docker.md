<p align="center">
  <p align="center">
    <a href="https://docs.docker.com/" target="_blank">
      <img src="https://www.docker.com/sites/default/files/d8/2019-07/horizontal-logo-monochromatic-white.png" alt="docker" height="72">
    </a>
  </p>
  <p align="center">
    Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.
  </p>
</p>

# Docker Setup and Development

# Docker

If you are familiar with [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose) then you can run built in docker-compose file, which will install and configure application and database for you.

## Uninstall old versions

```bash 

sudo apt-get remove docker docker-engine docker.io containerd runc

```

## Docker installation

Download docker from Official website

- Mac <https://docs.docker.com/docker-for-mac/install/>
- Windows <https://docs.docker.com/docker-for-windows/install/>
- Ubuntu <https://docs.docker.com/install/linux/docker-ce/ubuntu/>

## Install using the repository

```bash 

# Update the apt package index:
sudo apt-get update

# Install packages to allow apt to use a repository over HTTPS:
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

# Add Docker’s official GPG key:
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Set up the stable repository
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

```

## Docker-compose installation

Download docker from [Official website](https://docs.docker.com/compose/install)


## Install Compose in Linux

```bash
# download the current stable release of Docker Compose:
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Apply executable permissions to the binary:
sudo chmod +x /usr/local/bin/docker-compose

# Test the installation.
docker-compose --version

```

## Run

Open terminal and navigate to project directory and run the following command.

```bash
PORT=3000 docker-compose up
```

> Note: application will run on port 3000 (<http://localhost:3000>)

Navigate to <http://localhost:8080> and connect to you database with the following configurations

```text
host: postgres
user: postgres
pass: postgres
```

create database `stater_nest` and your application fully is ready to use.

