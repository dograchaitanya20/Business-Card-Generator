pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/dograchaitanya20/Business-Card-Generator.git'
            }
        }

        stage('Verify Files') {
            steps {
                sh 'ls -l'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                sudo rm -rf /var/www/html/*
                sudo cp -r * /var/www/html/
                '''
            }
        }
    }
}
