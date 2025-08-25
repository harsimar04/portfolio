pipeline {
    agent any

    environment {
        REMOTE_USER = "ubuntu"
        REMOTE_HOST = "13.233.117.66"
        DEPLOY_DIR = "/var/www/portfolio"
        BACKUP_DIR = "/var/www/portfolio_backup"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'git@github.com:harsimar04/portfolio.git', credentialsId: 'github-ssh-key'
            }
        }

        stage('Install & Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy to Remote') {
            steps {
                sshagent(credentials: ['portfolio-ssh-key']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no $REMOTE_USER@$REMOTE_HOST '
                        if [ -d $DEPLOY_DIR ]; then
                            rm -rf $BACKUP_DIR
                            mv $DEPLOY_DIR $BACKUP_DIR
                        fi
                        mkdir -p $DEPLOY_DIR
                    '
                    scp -r dist/* $REMOTE_USER@$REMOTE_HOST:$DEPLOY_DIR/
                    ssh $REMOTE_USER@$REMOTE_HOST 'sudo chown -R www-data:www-data $DEPLOY_DIR'
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Deployment Failed!'
        }
    }
}

