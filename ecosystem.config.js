module.exports = {
  apps: [{
    script: 'npm start',
  }],

  deploy: {
    production: {
      user: 'root',
      host: '185.237.204.173',
      ref: 'origin/main',
      repo: 'https://github.com/Alfabravo228/nextjs.git',
      path: '/home/root',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh-options': 'ForwardAgent=yes'
    }
  }
};


