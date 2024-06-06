pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/helenatrisa/simpleNode.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        // stage('Build') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         sh 'npm run deploy'
        //     }
        // }
    }
}
