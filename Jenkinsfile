pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/helenatrisa/simpleNode.git'  // URL repositori
        DEPLOY_SERVER = 'root@202.10.41.24'  // Ganti dengan informasi server deploy Anda
        DEPLOY_PATH = '/var/www/html/simpleNode'  // Ganti dengan path deploy di server Anda
        APP_NAME = 'simpleNode'  // Nama aplikasi Anda
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: "${env.REPO_URL}", branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Archive application files
                    sh """
                    tar -czf ${APP_NAME}.tar.gz *
                    """
                    
                    // Copy archive to the deployment server
                    sh """
                    scp ${APP_NAME}.tar.gz ${DEPLOY_SERVER}:${DEPLOY_PATH}
                    """
                    
                    // Extract archive and install production dependencies on the deployment server
                    sh """
                    ssh ${DEPLOY_SERVER} '
                        cd ${DEPLOY_PATH} &&
                        tar -xzf ${APP_NAME}.tar.gz &&
                        npm install --production &&
                        pm2 restart ${APP_NAME} || pm2 start server.js --name ${APP_NAME}
                    '
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs()  // Membersihkan workspace setelah build
        }
    }
}
