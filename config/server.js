module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ff9c84f0bdfe4a393c4789fd7445806e'),
    },
    url:'/dashboard'
  },
  cron: { enabled: true }
});
