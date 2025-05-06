module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'minio.jusikids.ru', // Ваш внешний домен
          port: '',
          pathname: '/**', // Разрешаем все пути
        },
      ],
    },
  }