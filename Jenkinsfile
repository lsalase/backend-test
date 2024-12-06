pipeline{
    agent any
    stages{
        stage("build - gral"){
            agent{
                docker{
                    image 'node:22-alpine'
                    reuseNode true

                }
            }
            stages{
                stage("otro"){
                    steps{
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
    }
}