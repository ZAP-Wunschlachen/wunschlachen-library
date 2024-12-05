pipeline {
    agent any

     stages {
        stage('Configuration') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm config ls'
            }
        }
         stage('Build') {
            steps {
                sh 'npm install --silent'
                sh 'npm run ci'
            }
        }
    }
}
