const checkConfig = (server) => {
    let config;
    switch (server){
        case 'production':
            config = {
               baseUrl: 'https://dave-store-admin.vercel.app'
            };
            break;
            case 'local':
                config = {
                    baseUrl: 'http://localhost:5000',
                }
                break;
                default:
                    break;
    }
    return config;
}

export const selectServer = 'production';
export const config = checkConfig(selectServer)