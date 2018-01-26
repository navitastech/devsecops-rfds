#!groovy

properties(
    [
        [$class: 'BuildDiscarderProperty', strategy:
          [$class: 'LogRotator', artifactDaysToKeepStr: '14', artifactNumToKeepStr: '5', daysToKeepStr: '30', numToKeepStr: '60']],
       
    ]
)
node {
    stage('Checkout') {
        deleteDir()
        checkout scm

       }

    stage('NPM Install') {
        withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
            sh 'npm install'
        }
    }

    stage('Deploy') {
        milestone()
        echo "Deploying..."
    }
}
