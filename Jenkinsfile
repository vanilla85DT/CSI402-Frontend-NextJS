pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                checkout([
        $class: 'GitSCM',
        branches: [[name: '*/main'], [name: '*/main'], …[name: '*/main']],
        userRemoteConfigs: [ [
        credentialsId: 'supervanilla85',
        url: 'https://github.com/vanilla85DT/CSI402-Frontend-NextJS.git'
                ]]
                ])
            }
        }

        stage('Build') {
            steps {
                print "Athitaya C"
            }
        }

        stage('Deploy Image') {
            steps {
                print "deploy image"
            }
        }

        stage('Testing') {
            steps {
                print "testing"
            }
        }
    }
}