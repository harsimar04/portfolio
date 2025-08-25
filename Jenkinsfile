pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/var/www/portfolio"
        BACKUP_DIR = "/var/www/portfolio_backup"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'git@github.com:username/your-portfolio.git', credentialsId: 'github-ssh-key'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Backup Old Deployment') {
            steps {
                sh '''
                if [ -d $DEPLOY_DIR ]; then
                    rm -rf $BACKUP_DIR
                    mv $DEPLOY_DIR $BACKUP_DIR
                fi
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                cp -r dist $DEPLOY_DIR
                sudo chown -R www-data:www-data $DEPLOY_DIR
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Deployment Failed! Restoring backup...'
            sh '''
            if [ -d $BACKUP_DIR ]; then
                rm -rf $DEPLOY_DIR
                mv $BACKUP_DIR $DEPLOY_DIR
            fi
            '''
        }
    }
}

