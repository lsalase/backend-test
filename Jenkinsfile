pipeline{
    agent any
    environment{
        USERNAME = "lsalas"
    }
    stages{
        stage("build - gral"){
            agent{
                docker{
                    image 'node:22-alpine'
                    reuseNode true

                }
            }
            stages{
                stage("build - instalacion dependencia"){
                    steps{
                        sh 'npm install'
                    }
                }
                stage("build - ejecucion de test"){
                    steps{
                        sh 'npm run test'
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