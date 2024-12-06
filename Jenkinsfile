pipeline{
    agent any
    stages{
        stage("build - instalacion de dependencias"){
            steps{
                echo "etapa 1"
                sh 'npm install'
            }
        }
        stage("build - build del proyecto"){
            steps{
                echo "etapa 2"
                sh 'npm run build'
            }
        }
    }
}