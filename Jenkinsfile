pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Clone Code the project From Git"
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']], 
                    userRemoteConfigs: [[
                        credentialsId: 'supervanilla85',
                        url: 'https://github.com/vanilla85DT/CSI402-Frontend-NextJS.git' 
                    ]]
                ])
            }
        }

        stage('Build') {
            steps {
                echo "Building the project..."
            }
        }

        stage('Unit Tests') {
            steps {
                echo "Running tests..."
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application..."
            }
        }

        stage('Deployment test') {
            steps {
                echo "Running tests..."
            }
        }
    }
}