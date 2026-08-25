pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/vijsanya27-afk/DEVOPS-2026-CS-E-15.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Lint') {
            steps {
                bat 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            bat '''
                echo Jenkins Build Feedback > feedback.txt
                echo ====================== >> feedback.txt
                echo Build Status: SUCCESS >> feedback.txt
                echo Lint: PASSED >> feedback.txt
                echo Build: PASSED >> feedback.txt
            '''

            archiveArtifacts artifacts: 'feedback.txt', fingerprint: true

            echo 'BUILD SUCCESSFUL - Feedback file generated!'
        }

        failure {
            bat '''
                echo Jenkins Build Feedback > feedback.txt
                echo ====================== >> feedback.txt
                echo Build Status: FAILED >> feedback.txt
            '''

            archiveArtifacts artifacts: 'feedback.txt', fingerprint: true

            echo 'BUILD FAILED - Feedback file generated.'
        }
    }
}